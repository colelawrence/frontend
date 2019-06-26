import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { ThemeBase } from "./story-helpers/ThemeBase"
import { Day, Night } from "./themes"
import { TopBar } from "./components/TopBar"
import { RepoSummary } from "./components/repo/RepoSummary"
import { RepoNavigation } from "./components/repo/RepoNavigation/RepoNavigation"
import { generateRepo } from "./components/repo/Mock/generateRepo"
import { ThemeSwitcher } from "./story-helpers/ThemeSwitcher"

const stories = storiesOf("Repo", module)

stories.add("Summary Page", () => {
  const repo = generateRepo(1001)
  return (
    <ThemeSwitcher>
      <TopBar />
      <RepoNavigation repo={repo} />
      <RepoSummary repo={repo} />
    </ThemeSwitcher>
  )
})
