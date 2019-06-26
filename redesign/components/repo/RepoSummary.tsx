import * as React from "react"

import { getTheme } from "../../themes/ThemeContext"
import { style } from "typestyle"
import { px } from "csx"
import { PageWidth } from "../common/PageWidth"
import { RepoBody } from "./RepoBody"
import { Tag } from "../common/Tag"
import { RepoSchemaDisplay } from "./RepoSchemaDisplay"
import { V } from "./IRepoState"
import { Center } from "../common/Center"

export const RepoSummary = ({ repo }: { repo: V.Repo }) =>
  getTheme(theme => {
    return (
      <div
        className={style({
          backgroundColor: theme.Colors.Background,
          paddingTop: px(10),
        })}
      >
        <br />
        <PageWidth>
          <h3>{repo.title}</h3>
          <p>{repo.description}</p>
          <p>
            <b>Keywords</b>: {repo.keywords.join(", ")}
          </p>
          <Center>
            <RepoSummaryStats repo={repo} theme={theme}></RepoSummaryStats>
          </Center>
        </PageWidth>
        <br />
        <PageWidth>
          <h4>Schema</h4>
        </PageWidth>
        <RepoSchemaDisplay schema={repo.schema} />
        <PageWidth>
          <h4>Visualizations</h4>
          <Center>{repo.visualizations.map(createViz)}</Center>
        </PageWidth>
        <br />
        <RepoBody body={repo.body} />
      </div>
    )

    function createViz(viz: V.RepoVisualization) {
      return (
        <div
          key={viz.id}
          className={style({
            position: "relative",
            display: "inline-block",
            textAlign: "left",
            margin: theme.Sizes.PageSidePadding,
            color: theme.Colors.TextDim,
            width: px(200),
          })}
        >
          {viz.title}
          <div
            className={style({
              position: "absolute",
              right: 0,
              top: 0,
            })}
          >
            <Tag title={viz.type} />
          </div>
          <div
            style={{
              width: px(200),
              height: px(120),
              background: theme.Colors.BackgroundDim,
              borderRadius: px(8),
              marginTop: px(12),
            }}
          ></div>
        </div>
      )
    }
  })

function RepoSummaryStats({ repo, theme }: { repo: V.Repo; theme: Theme }) {
  const statEl = (label: string, value: string) => (
    <div
      className={style({
        display: "inline-block",
        textAlign: "center",
        margin: `0 ${theme.Sizes.PageSidePadding}`,
      })}
    >
      <div
        className={style({
          ...theme.Typography.SmallText,
          textTransform: "uppercase",
        })}
      >
        {label}
      </div>
      <div className={style({ ...theme.Fonts.BodyFont.Ultra })}>{value}</div>
    </div>
  )
  return (
    <div
      className={style({
        display: "inline-block",
      })}
    >
      {statEl("Format", repo.format)}
      {statEl("Size", repo.size)}
      {statEl("Entries", repo.entries)}
      {statEl("Errors", repo.errors)}
      {statEl("Updated", repo.updated)}
    </div>
  )
}
