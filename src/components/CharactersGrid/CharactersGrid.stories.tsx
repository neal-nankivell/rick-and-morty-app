import React from "react";
import { storiesOf } from "@storybook/react";
import CharactersGrid from "./CharactersGrid";

storiesOf("Components/Characters Grid", module).add(
  "Main Character Examples",
  () => <CharactersGrid characters={[{ name: "Rick" }, { name: "Morty" }]} />
);
