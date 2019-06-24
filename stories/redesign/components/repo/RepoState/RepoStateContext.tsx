import * as React from "react";
import { RepoStateMock } from "./RepoStateMock";
import { IRepoState, V } from "./IRepoState";
import { Loader } from "../../Loader";
import { StreamBuilder, ConnectionState } from "react-stream-builder";

export const RepoStateContext = React.createContext<IRepoState>(
  new RepoStateMock(),
);

/** provider of RepoState */
export function getRepo(fn: (repoState: IRepoState) => JSX.Element) {
  return <RepoStateContext.Consumer>{fn}</RepoStateContext.Consumer>;
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
          return loader;
        } else {
          return fn(snapshot.data, repoState);
        }
      }}
    />
  ));
}
