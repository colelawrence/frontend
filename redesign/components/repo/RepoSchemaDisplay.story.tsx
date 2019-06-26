import * as React from "react"

import { storiesOf } from "@storybook/react"
import { RepoSchemaDisplay } from "./RepoSchemaDisplay";
import { ThemeSwitcher } from "../../story-helpers/ThemeSwitcher";
import { generateRepo } from "./Mock/generateRepo";

const stories = storiesOf("Repo", module)

stories.add("Schema Display", () => {
  return (
    <ThemeSwitcher>
      <RepoSchemaDisplay schema={generateRepo(0).schema} />
    </ThemeSwitcher>
  )
})
