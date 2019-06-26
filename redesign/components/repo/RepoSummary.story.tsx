import * as React from "react"

import { storiesOf } from "@storybook/react"
import { ThemeSwitcher } from "../../story-helpers/ThemeSwitcher";
import { generateRepo } from "./Mock/generateRepo";
import { RepoSummary } from "./RepoSummary";

const stories = storiesOf("Repo", module)

stories.add("Summary Section", () => {
  return (
    <ThemeSwitcher>
      <RepoSummary repo={generateRepo(0)} />
    </ThemeSwitcher>
  )
})
