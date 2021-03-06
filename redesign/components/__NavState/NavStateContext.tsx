import * as React from "react"

export const NavStateContext = React.createContext<INavState>(null)

/** provider of NavState */
export function getNav(fn: (repoState: INavState) => JSX.Element) {
  return <NavStateContext.Consumer>{fn}</NavStateContext.Consumer>
}

export interface INavState {
  openUser(id: any, source: string): void
  openRepo(id: any, source: string): void
}
