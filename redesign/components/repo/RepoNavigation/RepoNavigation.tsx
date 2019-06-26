import * as React from "react"

import { getTheme } from "../../../themes/ThemeContext"
import { getNav } from "../../__NavState/NavStateContext"

import { style } from "typestyle"
import { px } from "csx"
import { PageWidth } from "../../common/PageWidth"
import { RepoTitle } from "./RepoTitle"
import { PrimaryTabs } from "../Tabs/PrimaryTabs"
import { RepoIcons } from "../Icons"
import { V } from "../IRepoState"

export const RepoNavigation = ({ repo }: { repo: V.Repo }) =>
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
