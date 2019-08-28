import { configure, addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import theme from "./theme";

addParameters({
  options: {
    showPanel: false,
    isToolshown: false,
    theme
  }
});

// automatically import all redesign files ending in *.story.tsx
const req = require.context("../redesign", true, /.story.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(
  /** config 4.x https://github.com/storybookjs/storybook/tree/release/4.x/addons/info#options-and-defaults */
  withInfo({
    header: false // Global configuration for the info addon across all of your stories.
  })
);

configure(loadStories, module);
