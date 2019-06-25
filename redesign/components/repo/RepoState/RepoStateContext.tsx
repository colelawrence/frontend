import * as React from "react"
import { RepoStateMock } from "../Mock/RepoStateMock"
import { IRepoState, V } from "./IRepoState"
import { Loader } from "../../Loader"
import { StreamBuilder, ConnectionState } from "react-stream-builder"
import { EasyLogger } from "../../Logger"
import { getTheme } from "../../../themes/ThemeContext"

export const RepoStateContext = React.createContext<IRepoState>(
  new RepoStateMock(new EasyLogger(console.error.bind("Default RepoState"))),
)

/** provider of RepoState */
export function getRepo(fn: (repoState: IRepoState) => JSX.Element) {
  return <RepoStateContext.Consumer>{fn}</RepoStateContext.Consumer>
}

/** provider of V.Repo */
export function loadRepo(
  fn: (repo: V.Repo, repoState: IRepoState) => JSX.Element,
  loader = Loader,
) {
  return getRepo(repoState => (
    <StreamBuilder
      stream={repoState.repo}
      builder={snapshot => {
        if (snapshot.state !== ConnectionState.active) {
          return getTheme(theme => loader({ color: theme.Colors.Text }))
        } else {
          return fn(snapshot.data, repoState)
        }
      }}
    />
  ))
}
