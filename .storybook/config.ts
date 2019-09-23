import "../src/index.css";
import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

const req = require.context("../src", true, /\.stories.tsx$/);
addDecorator(withKnobs);
addDecorator(withA11y);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
