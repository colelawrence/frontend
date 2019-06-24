import * as React from "react"

import { loadRepo } from "./RepoState"
import { FlashWarning } from "../common/FlashWarning"
import { RepoSummary } from "./RepoSummary"
import { RepoNavigation } from "./RepoNavigation"
import { PageWidth } from "./PageWidth"

export function RepoPage() {
  return loadRepo((repo, repoState) => {
    if (repo == null) {
      return (
        <PageWidth>
          <FlashWarning>Dataset not found</FlashWarning>
        </PageWidth>
      )
    } else {
      return (
        <>
          <RepoNavigation repo={repo} />
          <RepoSummary repo={repo} />
        </>
      )
    }
  })
}
