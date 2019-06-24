import * as React from "react";

import { getTheme } from "../../helpers";
import { style } from "typestyle";
import { px } from "csx";
import { typeToStyle } from "../../themes";
import { PageWidth } from "./PageWidth";
import { loadRepo } from "./RepoState";

/** @param {Theme} theme */
const $tabularBodyClass = theme =>
  style(typeToStyle(theme.Type.NormalText), {
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
  });

/**
 * @param {{}} _props
 */
export const RepoBody = _props =>
  loadRepo(repo =>
    getTheme(theme => {
      if (repo.body.type === "tabular") {
        return (
          <div className={$tabularBodyClass(theme)}>
            <table>
              <thead>
                <tr>
                  {repo.body.columns.map(col => (
                    <th key={col.title}>
                      {dataIcon(col.type)}&nbsp;{col.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {repo.body.cells.map((row, idx) => (
                  <tr key={idx}>
                    {row.map((cell, idx) => (
                      <td key={idx}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      } else {
        return <div></div>;
      }

      function dataIcon(type) {
        switch (type) {
          case "date":
            return "📅";
          case "boolean":
            return "✅";
          case "number":
            return "#️⃣";
          case "text":
          default:
            return "🅰️";
        }
      }
    }),
  );
