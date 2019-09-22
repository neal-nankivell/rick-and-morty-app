import React from "react";
import { storiesOf } from "@storybook/react";
import CharactersGrid from "./CharactersGrid";
import characters from "../../testData/characters";
import withRedux from "../../testData/withReduxDecorator";
import CharactersGridContainer from "./CharactersGridContainer";

storiesOf("Components/Characters Grid", module)
  .addDecorator(withRedux)
  .add("Static Test Data", () => <CharactersGrid characters={characters} />)
  .add("Live Data via Redux", () => <CharactersGridContainer />);
