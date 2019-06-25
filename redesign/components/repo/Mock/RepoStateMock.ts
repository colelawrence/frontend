import { BehaviorSubject } from "rxjs"
import { IRepoState, V } from "../RepoState/IRepoState"
import { ILogger } from "../../Logger"
import { generateRepo } from "./generateRepo"

export class RepoStateMock implements IRepoState {
  private _repo = new BehaviorSubject<V.Repo>(null)

  constructor(private _log: ILogger) {
    this._log = this._log.scope("RepoStateMock")
  }

  get repo() {
    return this._repo.asObservable()
  }

  loadRepo(id: any, source: string) {
    this._log.log("Loading repo", { id, source })
    if (id == null) {
      this._log.log("no repo found", { source })
      this._repo.next(null)
      return
    }
    const foundRepo = generateRepo(id)
    this._log.log("Found repo", { id, subject: foundRepo })
    this._repo.next(foundRepo)
  }
}
