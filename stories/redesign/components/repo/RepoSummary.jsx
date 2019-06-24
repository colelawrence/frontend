import * as React from "react"

import { getTheme } from "../../themes/ThemeContext"
import { style } from "typestyle"
import { px } from "csx"
import { PageWidth } from "./PageWidth"
import { RepoBody } from "./RepoBody"

/**
 * @param {{ repo: import("./RepoState/IRepoState").V.Repo }} props
 */
export const RepoSummary = ({ repo }) =>
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
          <H3>{repo.title}</H3>
          <p>{repo.description}</p>
          <p>Keywords: {repo.keywords.join(", ")}</p>
          <Center>
            <RepoSummaryStats repo={repo} theme={theme}></RepoSummaryStats>
          </Center>
        </PageWidth>
        <br />
        <PageWidth>
          <H4>Visualizations</H4>
          <Center>{repo.visualizations.map(Viz)}</Center>
        </PageWidth>
        <br />
        <RepoBody />
      </div>
    )

    /** @param {import("./RepoState/IRepoState").V.RepoVisualization} viz */
    function Viz(viz) {
      return (
        <div
          key={viz.id}
          style={{
            position: "relative",
            display: "inline-block",
            margin: theme.Sizes.PageSidePadding,
            color: theme.Colors.TextDim,
            width: px(200),
          }}
        >
          {viz.title}
          {vizTag(viz.type)}
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

    function vizTag(type) {
      /** @type {React.CSSProperties} */
      const pos = {
        position: "absolute",
        right: 0,
        top: 0,
        borderRadius: px(3),
        padding: "2px 4px",
        color: theme.Colors.Text,
      }

      switch (String(type).toLowerCase()) {
        case "html":
          return (
            <div style={{ background: theme.Colors.BackgroundGreen, ...pos }}>
              HTML
            </div>
          )
        case "d3":
          return (
            <div style={{ background: theme.Colors.BackgroundBlue, ...pos }}>
              D3
            </div>
          )
        case "webgl":
          return (
            <div style={{ background: theme.Colors.BackgroundYellow, ...pos }}>
              WEB GL
            </div>
          )
        case "ipyth":
        default:
          return (
            <div style={{ background: theme.Colors.BackgroundRed, ...pos }}>
              D3
            </div>
          )
      }
    }

    function H3(props) {
      return <div className={style(theme.Type.Heading3)}>{props.children}</div>
    }

    function H4(props) {
      return <div className={style(theme.Type.Heading4)}>{props.children}</div>
    }
  })

function Center({ children }) {
  return (
    <div
      children={children}
      className={style({
        textAlign: "center",
        verticalAlign: "middle",
        alignItems: "center",
        alignContent: "center",
        $nest: {
          "&>*": {
            textAlign: "left",
          },
        },
      })}
    />
  )
}

/** @param {{ repo: import("./RepoState/IRepoState").V.Repo, theme: Theme }} props */
function RepoSummaryStats({ repo, theme }) {
  const statEl = (label, value) => (
    <div
      className={style({
        display: "inline-block",
        textAlign: "center",
        margin: `0 ${theme.Sizes.PageSidePadding}`,
      })}
    >
      <div
        className={style({
          ...theme.Type.SmallText,
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
