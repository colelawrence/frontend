import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { ThemeBase } from "./story-helpers/ThemeBase"
import { Day } from "./themes"
import { TopBar } from "./components/TopBar"
import { RepoSummary } from "./components/repo/RepoSummary"
import { RepoTitle } from "./components/repo/RepoNavigation/RepoTitle"
import { RepoNavigation } from "./components/repo/RepoNavigation/RepoNavigation"
import { generateRepo } from "./components/repo/Mock/generateRepo"

const stories = storiesOf("Repo", module)

stories.add("Summary Page", () => {
  const repo = generateRepo(1001)
  return (
    <ThemeBase theme={Day}>
      <TopBar />
      <RepoNavigation repo={repo} />
      <RepoSummary repo={repo} />
    </ThemeBase>
  )
})
