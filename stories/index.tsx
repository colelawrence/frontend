import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Button from "../lib/components/chrome/Button.js"
import DownloadBar from "../lib/components/chrome/DownloadBar.js"

// Don't forget to import our stylesheet:
import "../lib/app.global.scss"

import * as themes from "./redesign/themes"
import TestPage from "./redesign/TestPage"
import { Tag } from "./redesign/components/common/Tag"
import { CodeBlock } from "./redesign/components/common/CodeBlock"
import { ThemeContext } from "./redesign/themes/ThemeContext.js"

storiesOf("Redesign Test Page", module)
  .add("Day", () => <TestPage theme={themes.Day} />)
  .add("Night", () => <TestPage theme={themes.Night} />)

storiesOf("Redesign Components", module)
  .add("Tag", () => (
    <>
      <Tag title="html"></Tag>
      <Tag title="webgl"></Tag>
      <Tag title="ipyth"></Tag>
      <Tag title="d3"></Tag>
      <Tag title="snapsvg"></Tag>
    </>
  ))
  .add("CodeBlock", () => (
    <>
      <CodeBlock>python python python is a snake</CodeBlock>
      <CodeBlock label="Python">python python python is a snake</CodeBlock>
      <CodeBlock label="Jupyter">python python python is a snake</CodeBlock>
      <CodeBlock label="Star">python python python is a snake</CodeBlock>
      <ThemeContext.Provider value={themes.Night}>
        <CodeBlock>python python python is a snake</CodeBlock>
        <CodeBlock label="Python">python python python is a snake</CodeBlock>
        <CodeBlock label="Jupyter">python python python is a snake</CodeBlock>
        <CodeBlock label="Star">python python python is a snake</CodeBlock>
      </ThemeContext.Provider>
    </>
  ))

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")} text="qri button" />
  ))
  .add("loading", () => <Button loading text="loading button" />)

storiesOf("Download bar", module).add("standard", () => (
  <DownloadBar
    layout={{ height: 55, top: 0, left: 0 }}
    peername="test_peer"
    name="test_dataset"
  />
))
