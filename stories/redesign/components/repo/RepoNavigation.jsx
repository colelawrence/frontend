import * as React from "react"

import { getTheme } from "../../themes/ThemeContext"
import { style } from "typestyle"
import { px, rotate, deg } from "csx"
import { PageWidth } from "./PageWidth"
import { RepoTitle } from "./RepoTitle"
import { PrimaryTabs } from "./PrimaryTabs"
import { RepoIcons } from "./Icons"
import { getRepo, loadRepo } from "./RepoState"
import { StreamBuilder, ConnectionState } from "react-stream-builder"
import { FlashWarning } from "../common/FlashWarning"
import { getNav } from "../nav/NavStateContext"

/**
 * @param {{ repo: import("./RepoState/IRepoState").V.Repo }} _props
 */
export const RepoNavigation = ({ repo }) =>
  getTheme(theme =>
    getNav(navState => (
      <div
        className={style({
          backgroundColor: theme.Colors.BackgroundDim,
          paddingTop: px(28),
        })}
      >
        <PageWidth>
          <RepoTitle
            ownerTitle={repo.owner.slug}
            ownerClick={() =>
              navState.openRepo("812378128", "clicked owner name")
            }
            repoTitle={repo.slug}
            repoClick={() => navState.openRepo(null, "clicked repo")}
          />
          <PrimaryTabs
            leftTabs={[
              {
                title: "Summary",
                active: true,
                onClick: () => console.log("open tab"),
                iconElt: color => RepoIcons.SummaryIcon({ color }),
              },
              {
                title: "Details",
                active: false,
                onClick: () => console.log("open details"),
                iconElt: color => RepoIcons.DetailsIcon({ color }),
              },
            ]}
            rightTabs={[
              {
                title: "History",
                active: false,
                onClick: () => console.log("open history"),
                iconElt: color => RepoIcons.HistoryIcon({ color }),
              },
              {
                title: "Settings",
                active: false,
                onClick: () => console.log("open settings"),
                iconElt: color => RepoIcons.SettingsIcon({ color }),
              },
            ]}
          />
        </PageWidth>
      </div>
    )),
  )

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
  )
}
