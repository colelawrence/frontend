import * as React from "react"
import * as ReactDOM from "react-dom"

import { getTheme } from "../../themes/ThemeContext"
import { style } from "typestyle"
import { px } from "csx"
import { loadRepo } from "./RepoState"
import { DataIcons } from "./Icons"

/** @param {Theme} theme */
const $tabularBodyClass = theme =>
  style(theme.Type.NormalText, {
    backgroundColor: theme.Colors.Background,
    borderTop: `solid 1px ${theme.Colors.Divider}`,
    overflowX: "auto",
    // calculate padding to align table left to page width
    paddingLeft: `calc((100% - ${theme.Sizes.MaxPageWidth}) * .5 + ${theme.Sizes.PageSidePadding})`,
    $nest: {
      table: {
        tableLayout: "fixed",
        cursor: "default",
      },
      "th, td": {
        padding: px(8),
        whiteSpace: "nowrap",
        borderBottom: `solid 1px ${theme.Colors.Divider}`,
        borderRight: `solid 1px ${theme.Colors.Divider}`,
      },
      th: {
        fontWeight: "inherit",
        color: theme.Colors.TextDim,
      },
      td: {
        color: theme.Colors.Text,
      },
    },
  })

/**
 * @param {{}} _props
 */
export const RepoBody = _props =>
  loadRepo(repo =>
    getTheme(theme => {
      if (repo.body.type === "tabular") {
        const tableHeading = (
          <TableHeading tabularBody={repo.body.tabularBody} />
        )

        return (
          <div className={$tabularBodyClass(theme)}>
            <table>
              <thead>{tableHeading}</thead>
              <tbody>
                {repo.body.tabularBody.cells.map((row, idx) => (
                  <tr key={idx}>
                    {row.map((cell, idx) => (
                      <td key={idx}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      } else {
        return <div></div>
      }
    }),
  )

class TableHeading extends React.Component {
  /**
   * @param {{ tabularBody: import("./RepoState/IRepoState").V.TabularBody; }} props
   */
  constructor(props) {
    super(props)
    /** @type {import("./RepoState/IRepoState").V.TabularBody} */
    this.body = props.tabularBody
    /** @type {HTMLTableHeaderCellElement[]} */
    this.columnRefs = this.body.columns.map(_ => null)
    this.state = { sizes: this.body.columns.map(_ => undefined) }
  }
  render() {
    return (
      <>
        {/* master control row -- can be moved around without affecting table layout */}
        <tr
          className={style({
            $nest: {
              "th svg": {
                verticalAlign: "middle",
              },
            },
          })}
        >
          {getTheme(theme => (
            <>
              {this.body.columns.map((col, idx) => (
                <th
                  key={col.title}
                  ref={th => (this.columnRefs[idx] = th)}
                  style={{ width: px(this.state.sizes[idx]) }}
                >
                  {this.dataIcon(col.type, theme.Colors.TextDim)}&nbsp;
                  {col.title}
                </th>
              ))}
            </>
          ))}
        </tr>
        {/* measurements row – retains table layout if master control row moves or is positioned fixed */}
        {/* visibility: collapse ensures that column widths are consistent without showing */}
        <tr style={{ visibility: "collapse" }}>
          {this.body.columns.map((col, idx) => (
            <th key={col.title} style={{ width: px(this.state.sizes[idx]) }} />
          ))}
        </tr>
      </>
    )
  }
  componentDidMount() {
    // @ts-ignore
    const tr = this.columnRefs.map(th => ReactDOM.findDOMNode(th))
    this.setState(() => ({
      // @ts-ignore
      sizes: tr.map(th => th.offsetWidth),
    }))
  }

  dataIcon(type, color) {
    switch (type) {
      case "boolean":
        return DataIcons.DataBooleanIcon({ color })
      case "number":
        return DataIcons.DataNumberIcon({ color })
      case "text":
      default:
        return DataIcons.DataTextIcon({ color })
    }
  }
}
