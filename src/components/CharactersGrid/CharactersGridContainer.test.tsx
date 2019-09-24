import { mapStateToProps } from "./CharactersGridContainer";
import initialState from "../../redux/initialState";
import characters from "../../testData/characters";

describe("Characters Grid Container Tests", () => {
  it("mapStateToProps maps characters", () => {
    var sut = mapStateToProps;
    const state = { ...initialState, characters: characters };

    var result = sut(state);

    expect(result.characters).toEqual(state.characters);
  });
});
