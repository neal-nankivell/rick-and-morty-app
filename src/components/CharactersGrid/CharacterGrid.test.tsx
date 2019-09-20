import React from "react";
import ReactDOM from "react-dom";
import characters from "../../testData/characters";
import CharactersGrid from "./CharactersGrid";
import { shallow } from "enzyme";

describe("CharacterGrid", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CharactersGrid characters={characters} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly", () => {
    const sut = shallow(<CharactersGrid characters={characters.slice(0, 2)} />);

    expect(sut).toMatchInlineSnapshot(`
      <ul>
        <li
          key="Test Rick"
        >
          <Thumbnail
            imageUrl="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            key="Test Rick"
            name="Test Rick"
          />
        </li>
        <li
          key="Test Morty"
        >
          <Thumbnail
            imageUrl="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            key="Test Morty"
            name="Test Morty"
          />
        </li>
      </ul>
    `);
  });
});
