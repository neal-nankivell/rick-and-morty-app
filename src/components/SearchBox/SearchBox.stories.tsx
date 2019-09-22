import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import SearchBox from "./SearchBox";
import { action } from "@storybook/addon-actions";

storiesOf("Components/Search Box", module)
  .addDecorator(withKnobs)
  .add("Static Test Data", () => {
    return (
      <SearchBox
        onChange={action("Search Updated")}
        value={text("Initial Value", "")}
      />
    );
  });
