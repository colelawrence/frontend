import * as React from "react"

import { loadRepo } from "./__RepoState"
import { FlashWarning } from "../common/FlashWarning"
import { RepoSummary } from "./RepoSummary"
import { RepoNavigation } from "./RepoNavigation/RepoNavigation"
import { TypographyStyles } from "../TypographyStyles"
import { PageWidth } from "../common/PageWidth"

export function RepoPage() {
  return (
    <TypographyStyles>
      {loadRepo((repo, repoState) => {
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
      })}
    </TypographyStyles>
  )
}
