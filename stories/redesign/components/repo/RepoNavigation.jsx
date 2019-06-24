import * as React from "react";

import { getTheme } from "../../helpers";
import { style } from "typestyle";
import { px, rotate, deg } from "csx";
import { typeToStyle } from "../../themes";
import { PageWidth } from "./PageWidth";
import { RepoTitle } from "./RepoTitle";
import { PrimaryTabs } from "./PrimaryTabs";
import { HistoryIcon, SettingsIcon, DetailsIcon, SummaryIcon } from "./Icons";
import { getRepo } from "./RepoState";
import { StreamBuilder, ConnectionState } from "react-stream-builder";

/**
 * @param {{}} _props
 */
export const RepoNavigation = _props =>
  getRepo(repoState =>
    getTheme(theme => {
      return (
        <div
          className={style({
            backgroundColor: theme.Colors.BackgroundDim,
            paddingTop: px(28),
          })}
        >
          <StreamBuilder
            stream={repoState.repo}
            builder={snapshot => {
              if (snapshot.state !== ConnectionState.active) {
                return <Loader />;
              } else if (snapshot.data == null) {
                return `Dataset not found`;
              } else {
                const repo = snapshot.data;
                return (
                  <PageWidth>
                    <RepoTitle
                      ownerTitle={repo.owner.slug}
                      ownerClick={() =>
                        repoState.loadRepo("812378128", "clicked owner name")
                      }
                      repoTitle={repo.slug}
                      repoClick={() => console.log("clicked repo")}
                    />
                    <PrimaryTabs
                      leftTabs={[
                        {
                          title: "Summary",
                          active: true,
                          onClick: () => console.log("open tab"),
                          iconElt: color => SummaryIcon({ color }),
                        },
                        {
                          title: "Details",
                          active: false,
                          onClick: () => console.log("open details"),
                          iconElt: color => DetailsIcon({ color }),
                        },
                      ]}
                      rightTabs={[
                        {
                          title: "History",
                          active: false,
                          onClick: () => console.log("open history"),
                          iconElt: color => HistoryIcon({ color }),
                        },
                        {
                          title: "Settings",
                          active: false,
                          onClick: () => console.log("open settings"),
                          iconElt: color => SettingsIcon({ color }),
                        },
                      ]}
                    />
                  </PageWidth>
                );
              }
            }}
          />
        </div>
      );
    }),
  );

/** @param {{ color?: string }} props */
function Loader({ color }) {
  return (
    <div
      className={style({
        color: color || "inherit",
        transform: rotate(deg(15)),
        marginLeft: px(20),
        marginRight: px(20),
      })}
      children="Loading..."
    />
  );
}
