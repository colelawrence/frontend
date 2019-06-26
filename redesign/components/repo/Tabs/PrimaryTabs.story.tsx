import * as React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { ThemeBase } from "../../../story-helpers/ThemeBase"
import { Day, Night } from "../../../themes"
import { PrimaryTabs } from "./PrimaryTabs"
import { RepoIcons } from "../Icons"
import { ThemeSwitcher } from "../../../story-helpers/ThemeSwitcher"

const stories = storiesOf("Components", module)

enum Tabs {
  Summary,
  Details,
  History,
  Settings,
}

// This is probably not very idiomatic storybook code...
// This should probably be controlled by story book and broken down maybe
class Example extends React.Component<
  { defaultTab: Tabs },
  { currentTab: Tabs }
> {
  constructor(props) {
    super(props)
    this.state = { currentTab: this.props.defaultTab }
  }

  render() {
    return (
      <PrimaryTabs
        leftTabs={[
          {
            title: "Summary",
            active: this.state.currentTab === Tabs.Summary,
            onClick: () => this.setState({ currentTab: Tabs.Summary }),
            iconElt: color => RepoIcons.SummaryIcon({ color }),
          },
          {
            title: "Details",
            active: this.state.currentTab === Tabs.Details,
            onClick: () => this.setState({ currentTab: Tabs.Details }),
            iconElt: color => RepoIcons.DetailsIcon({ color }),
          },
        ]}
        rightTabs={[
          {
            title: "History",
            active: this.state.currentTab === Tabs.History,
            onClick: () => this.setState({ currentTab: Tabs.History }),
            iconElt: color => RepoIcons.HistoryIcon({ color }),
          },
          {
            title: "Settings",
            active: this.state.currentTab === Tabs.Settings,
            onClick: () => this.setState({ currentTab: Tabs.Settings }),
            iconElt: color => RepoIcons.SettingsIcon({ color }),
          },
        ]}
      />
    )
  }
}

stories.add("Primary Tabs", () => {
  return (
    <ThemeSwitcher>
      <Example defaultTab={Tabs.Summary} />
    </ThemeSwitcher>
  )
})
