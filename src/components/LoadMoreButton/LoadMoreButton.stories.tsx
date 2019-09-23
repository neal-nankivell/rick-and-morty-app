import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { LoadMoreButton } from "./LoadMoreButton";

storiesOf("Components/Load More Button", module).add("Static Test Data", () => {
  return (
    <LoadMoreButton
      onClick={action("Load More Clicked!")}
      hidden={boolean("Hidden", false)}
    />
  );
});
