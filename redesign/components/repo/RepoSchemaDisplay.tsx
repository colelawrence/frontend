import * as React from "react"

import { getTheme } from "../../themes/ThemeContext"
import { style } from "typestyle"
import { em } from "csx"
import { V } from "./IRepoState"

export const RepoSchemaDisplay = (props: { schema: V.RepoSchema }) =>
  getTheme(theme => <RepoSchemaBlock theme={theme} schema={props.schema} />)

const RepoSchemaBlock = ({
  schema,
  theme,
}: {
  schema: V.RepoSchema
  theme: Theme
}) => {
  const $schemaBlock = style({
    padding: em(0.25),
    color: theme.Colors.Text,
    border: `1px solid ${theme.Colors.TextDim}`,
    margin: em(0.25),
    borderRadius: theme.Sizes.SmallRadius,
  })

  if (schema.type === "array") {
    return (
      <div className={$schemaBlock}>
        <span style={{ float: "right" }}>array</span>
        <span style={{ float: "left" }}>{schema.array.itemCount}</span>
        <br />
        {schema.array.items.map((item, idx) => (
          <RepoSchemaBlock theme={theme} key={idx} schema={item} />
        ))}
      </div>
    )
  } else if (schema.type === "cell") {
    return (
      <div className={$schemaBlock}>
        <span style={{ float: "right" }}>{schema.cell.kind}</span>
        <span style={{ float: "left" }}>{schema.cell.title}</span>
        <br />
        {schema.cell.description}
      </div>
    )
  } else {
    throw new Error("Expected type of schema to be set")
  }
}
