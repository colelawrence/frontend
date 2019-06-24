import * as React from "react"
import { NavStateMock } from "./NavStateMock"
import { INavState } from "./INavState"
import { StreamBuilder, ConnectionState } from "react-stream-builder"

export const NavStateContext = React.createContext<INavState>(null)

/** provider of NavState */
export function getNav(fn: (repoState: INavState) => JSX.Element) {
  return <NavStateContext.Consumer>{fn}</NavStateContext.Consumer>
}
