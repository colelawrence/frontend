import * as React from "react"
import * as ReactDOM from "react-dom"

import { getTheme } from "../../themes/ThemeContext"
import { style } from "typestyle"
import { px } from "csx"
import { loadRepo } from "./__RepoState"
import { DataIcons } from "./Icons"
import { V } from "./IRepoState"

/** @param {Theme} theme */
const $tableBodyClass = theme =>
  style(theme.Typography.NormalText, {
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

export const RepoBody = (props: { body: V.Body }) => {
  if (props.body.type === "table") {
    return <RepoTableBody table={props.body.table} />
  } else {
    return <div></div>
  }
}

class RepoTableBody extends React.Component<{ table: V.TableBody }> {
  render() {
    const tableHeading = <RepoTableHeader columns={this.props.table.columns} />

    return getTheme(theme => (
      <div className={$tableBodyClass(theme)}>
        <table>
          <thead>{tableHeading}</thead>
          <tbody>
            {this.props.table.cells.map((row, idx) => (
              <tr key={idx}>
                {row.map((cell, idx) => (
                  <td key={idx}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))
  }
}

class RepoTableHeader extends React.Component<
  { columns: V.TableBody["columns"] },
  { sizes: number[] }
> {
  private columnRefs: HTMLTableHeaderCellElement[]

  constructor(props) {
    super(props)

    this.columnRefs = props.columns.map(_ => undefined)
    this.state = { sizes: props.columns.map(_ => undefined) }
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
              {this.props.columns.map((col, idx) => (
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
          {this.props.columns.map((col, idx) => (
            <th key={col.title} style={{ width: px(this.state.sizes[idx]) }} />
          ))}
        </tr>
      </>
    )
  }

  componentDidMount() {
    // after mounting, measure each column's width and add the values to the state

    // @ts-ignore
    const tr = this.columnRefs.map(th => ReactDOM.findDOMNode(th))
    this.setState(() => ({
      // @ts-ignore
      sizes: tr.map(th => th.offsetWidth),
    }))
  }

  dataIcon(type: string, color: string) {
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
