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

  it("renders no characters wtihout crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CharactersGrid characters={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly", () => {
    const sut = shallow(<CharactersGrid characters={characters.slice(0, 2)} />);

    expect(sut).toMatchInlineSnapshot(`
      <styled.ul
        aria-label="Characters"
      >
        <styled.li
          aria-label="Test Rick"
          key="1"
        >
          <Thumbnail
            imageUrl="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            key="Test Rick"
            name="Test Rick"
          />
        </styled.li>
        <styled.li
          aria-label="Test Morty"
          key="2"
        >
          <Thumbnail
            imageUrl="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            key="Test Morty"
            name="Test Morty"
          />
        </styled.li>
      </styled.ul>
    `);
  });

  it("renders no characters correctly", () => {
    const sut = shallow(<CharactersGrid characters={[]} />);

    expect(sut).toMatchInlineSnapshot(`
      <styled.p>
        No Characters Found.
      </styled.p>
    `);
  });
});
