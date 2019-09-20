import reducer from "./reducer";
import initialState from "./initialState";
import { Action, updateCharacters, loadCharacters } from "./actions";
import characters from "../testData/characters";

describe("reducer", () => {
  it("ignores unknown actions", () => {
    const sut = reducer;
    const unknownAction = { type: "unknown" };

    let result = sut(initialState, unknownAction as Action);

    expect(result).toEqual(initialState);
  });

  it("updateCharacters action populates new characers in state", () => {
    const sut = reducer;
    const testCharacters = characters;

    let result = sut(initialState, updateCharacters(testCharacters));

    expect(result.characters).toEqual(testCharacters);
  });

  it("updateCharacters action can be used to clear the list", () => {
    const sut = reducer;
    const testCharacters = characters;
    const state = { ...initialState, characers: testCharacters };

    let result = sut(state, updateCharacters([]));

    expect(result.characters).toEqual([]);
  });

  it("loadCharacters action is ignored", () => {
    const sut = reducer;

    let result = sut(initialState, loadCharacters());

    expect(result).toEqual(initialState);
  });
});
