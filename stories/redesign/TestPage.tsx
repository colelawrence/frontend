/// <reference path="./themes/Theme.d.ts">
import { typeToStyle, Day } from "./themes"
import * as React from "react"

import { action } from "@storybook/addon-actions"

import { style } from "typestyle"
import { ThemeContext } from "./themes/ThemeContext"
import { TopBar } from "./components/TopBar.jsx"
import { RepoStateContext, RepoStateMock } from "./components/repo/RepoState"
import { RepoPage } from "./components/repo/RepoPage"
import { NavStateContext } from "./components/nav/NavStateContext"
import { NavStateMock } from "./components/nav/NavStateMock"
import { percent } from "csx"
import { EasyLogger } from "./components/Logger"
import { IRepoState } from "./components/repo/RepoState/IRepoState"
import { INavState } from "./components/nav/INavState"

/**
 * @param {{theme: Theme}} props
 */
export default function TestPage({ theme }) {
  const $page = style(
    {
      backgroundColor: theme.Colors.Background,
      color: theme.Colors.Text,
      height: percent(100),
      overflow: "auto",
    },
    typeToStyle(theme.Type.NormalText),
  )

  return (
    <ThemeContext.Provider value={theme}>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap"
        rel="stylesheet"
      />
      <div className={$page}>
        <PageMock />
      </div>
    </ThemeContext.Provider>
  )
}

class PageMock extends React.PureComponent {
  private repoMock: IRepoState
  private navMock: INavState

  constructor(props) {
    super(props)
    const actionLogger = new EasyLogger((scope, msg, subject) => {
      action(scope + ": " + msg)(subject)
    })
    this.repoMock = new RepoStateMock(actionLogger)
    this.navMock = new NavStateMock(actionLogger, this.repoMock)
  }

  componentWillMount() {
    this.repoMock.loadRepo(2001, "will mount")
  }

  render() {
    this.repoMock.loadRepo(2001, "render")
    return (
      <RepoStateContext.Provider value={this.repoMock}>
        <NavStateContext.Provider value={this.navMock}>
          <TopBar />
          <RepoPage />
        </NavStateContext.Provider>
      </RepoStateContext.Provider>
    )
  }
}
