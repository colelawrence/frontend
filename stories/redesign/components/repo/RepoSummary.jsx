import * as React from "react";

import { getTheme } from "../../helpers";
import { style } from "typestyle";
import { px } from "csx";
import { typeToStyle } from "../../themes";
import { PageWidth } from "./PageWidth";
import { loadRepo } from "./RepoState";
import { RepoBody } from "./RepoBody";

/**
 * @param {{}} _props
 */
export const RepoSummary = _props =>
  loadRepo(repo =>
    getTheme(theme => {
      return (
        <div
          className={style({
            backgroundColor: theme.Colors.Background,
            paddingTop: px(10),
          })}
        >
          <PageWidth>
            <div style={{ padding: px(10) }}>
              <H3>{repo.title}</H3>
              <p>{repo.description}</p>
            </div>
          </PageWidth>
          <RepoBody />
        </div>
      );

      function H3(props) {
        return (
          <div className={style(typeToStyle(theme.Type.Heading3))}>
            {props.children}
          </div>
        );
      }
    }),
  );
