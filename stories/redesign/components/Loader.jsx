import * as React from "react";

export function Loader({ color }) {
  return <div style={{ color: color || "inherit" }}>Loading</div>;
}
