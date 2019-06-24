import { Observable, BehaviorSubject, Subject } from "rxjs"
import { IRepoState, V } from "./IRepoState"
import { ILogger } from "../../Logger"

export class RepoStateMock implements IRepoState {
  private _repo = new BehaviorSubject<V.Repo>(null)

  constructor(private _log: ILogger) {
    this._log = this._log.scope("RepoStateMock")
  }

  get repo() {
    return this._repo.asObservable()
  }

  loadRepo(id: any, source: string) {
    this._log.log(`load repo`, { id, source })
    if (id == null) {
      this._log.log("no repo found", { source })
      this._repo.next(null)
      return
    }
    const totalRows = 4100
    const rows = 120
    const rowsNull = new Array(rows).fill(null)
    this._repo.next({
      id: id, // I don't exactly know what format the id would be in
      owner: {
        id: 120,
        title: "Cole Lawrence",
        slug: randomer("colelawrence", "b5", "some-super-long-name")(),
      },
      slug: "cfl-player-transactions-2018",
      entries: `${totalRows}`,
      errors: "0",
      format: "JSON",
      size: "10MB",
      updated: "Feb 11, 2019",
      tags: ["Sports"],
      title: "CFL Player Transactions",
      description:
        "Dataset of CFL player transactions for 2018. Transactions include drafts, trades, injuries, transfers to & from the starting roster, etc.",
      keywords: "cfl, football, canada, sports, trades, injuries".split(", "),

      visualizations: [
        { id: 1301, title: "Overview 2018", type: "html" },
        { id: 1302, title: "Trade Date Density", type: "d3" },
      ],

      bodySummary: `Previewing ${rows} of ${totalRows}`,
      body: {
        type: "tabular",
        tabularBody: {
          columns: [
            { title: "date", type: "text", index: 0 },
            { title: "roster", type: "text", index: 1 },
            { title: "team", type: "text", index: 2 },
            { title: "txn_type", type: "text", index: 3 },
            { title: "txn_description", type: "text", index: 4 },
            { title: "national", type: "text", index: 5 },
            { title: "player", type: "text", index: 6 },
            { title: "position", type: "text", index: 7 },
            { title: "extra number", type: "number", index: 8 },
            { title: "extra date", type: "date", index: 9 },
            { title: "extra boolean", type: "boolean", index: 10 },
          ],
          cells: rowsNull.map(_ => [
            date(),
            roster(),
            team(),
            txn_type(),
            txn_desc(),
            national(),
            player(),
            position(),
            xNumber(),
            xDate(),
            xBoolean(),
          ]),
        },
      },
    })
  }
}

const date = randomer("2018-11-12", "2018-11-13")
const roster = randomer("", "NON-ACTIVE")
const team = randomer("SSK")
const txn_type = randomer("ADD", "REM")
const txn_desc = randomer("", "UNS")
const national = randomer("NAT", "INT")
const player = randomer(
  "Reggie HALL",
  "Deon KING",
  "Mathieu BRETON",
  "Tresor BUAMA-MA...",
)
const position = randomer("(DB)", "(LB)", "(DL)")
const xNumber = randomer("0.001", "0.02", "1200.04")
const xDate = randomer("Feb 26th, 2018", "Feb 23rd, 2018")
const xBoolean = randomer("True", "False")

function randomer<A>(...choices: A[]): () => A {
  return function() {
    return choices[Math.floor(Math.random() * choices.length)]
  }
}
