import { INavState } from "./INavState"
import { IRepoState } from "../repo/RepoState/IRepoState"
import { ILogger } from "../Logger"

export class NavStateMock implements INavState {
  constructor(private _log: ILogger, private repoState: IRepoState) {
    this._log = this._log.scope("NavStateMock")
  }

  openRepo(id, source) {
    this._log.log("open repo", { source, id })
    this.repoState.loadRepo(id, "nav open repo")
  }

  openUser(id, source) {
    this._log.log("open user", { source, id })
  }
}
