import * as React from "react"

import { storiesOf } from "@storybook/react"
import { ThemeSwitcher } from "../../story-helpers/ThemeSwitcher";
import { generateRepo } from "./Mock/generateRepo";
import { RepoBody } from "./RepoBody";

const stories = storiesOf("Repo", module)

stories.add("Schema Display", () => {
  return (
    <ThemeSwitcher>
      <RepoBody body={generateRepo(0).body} />
    </ThemeSwitcher>
  )
})
