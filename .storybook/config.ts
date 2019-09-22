import "../src/index.css";
import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

const req = require.context("../src", true, /\.stories.tsx$/);
addDecorator(withKnobs);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
