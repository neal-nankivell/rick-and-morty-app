import React from "react";
import { storiesOf } from "@storybook/react";
import CharactersGrid from "./CharactersGrid";
import characters from "../../testData/characters";
import withRedux from "../../testData/withReduxDecorator";
import CharactersGridContainer from "./CharactersGridContainer";

storiesOf("Components/Characters Grid", module)
  .add("Static Test Data", () => <CharactersGrid characters={characters} />)
  .addDecorator(withRedux)
  .add("Live Data via Redux", () => <CharactersGridContainer />);
