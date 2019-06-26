import * as React from "react"

import { storiesOf } from "@storybook/react"
import { ThemeSwitcher } from "../../story-helpers/ThemeSwitcher"
import { generateRepo } from "./Mock/generateRepo"
import { RepoBody } from "./RepoBody"
import { style } from "typestyle"
import { em } from "csx"
import { RepoIcons, DataIcons, ContextIcons } from "./Icons"
import { ThemeBase } from "../../story-helpers/ThemeBase"
import { Day } from "../../themes"

const stories = storiesOf("Components", module)

const $spread = style({
  $nest: {
    "&>*": {
      margin: em(2),
      display: "inline-block",
      textAlign: "center",
    },
  },
})
stories.add("Icons", () => {
  return (
    <ThemeBase theme={Day}>
      <div className={$spread}>
        <div>
          <RepoIcons.DetailsIcon color="dodgerblue" />
          <br />
          Details
        </div>
        <div>
          <RepoIcons.HistoryIcon color="dodgerblue" />
          <br />
          History
        </div>
        <div>
          <RepoIcons.SettingsIcon color="dodgerblue" />
          <br />
          Settings
        </div>
        <div>
          <RepoIcons.SummaryIcon color="dodgerblue" />
          <br />
          Summary
        </div>
        <br />
        <div>
          <DataIcons.DataBooleanIcon color="dodgerblue" />
          <br />
          Boolean
        </div>
        <div>
          <DataIcons.DataNumberIcon color="dodgerblue" />
          <br />
          Number
        </div>
        <div>
          <DataIcons.DataTextIcon color="dodgerblue" />
          <br />
          Text
        </div>
        <div>
          <ContextIcons.InfoIcon color="dodgerblue" />
          <br />
          Info
        </div>
      </div>
    </ThemeBase>
  )
})
