import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnail from "./Thumbnail";
import { withKnobs, select } from "@storybook/addon-knobs";
import characters from "../../testData/characters";

storiesOf("Components/Thumbnail", module).add("Static Test Data", () => {
  let options = {};
  characters.forEach(
    c =>
      (options = {
        ...options,
        [c.name || "Empty State"]: characters.indexOf(c)
      })
  );
  const character = characters[select("Character", options, 0)];

  return <Thumbnail name={character.name} imageUrl={character.imageUrl} />;
});
