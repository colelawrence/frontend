import { Observable } from "rxjs"
import { V } from "../repo/RepoState/IRepoState"

export interface INavState {
  openUser(id: any, source: string): void
  openRepo(id: any, source: string): void
}
