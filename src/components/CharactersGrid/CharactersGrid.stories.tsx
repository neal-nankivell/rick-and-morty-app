import React from "react";
import { storiesOf } from "@storybook/react";
import CharactersGrid from "./CharactersGrid";
import characters from "../../testData/characters";

storiesOf("Components/Characters Grid", module).add("Static Test Data", () => (
  <CharactersGrid characters={characters} />
));
