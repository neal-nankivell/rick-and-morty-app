import initialState from "./initialState";
import placeHolderCharacters from "./placeHolderCharacters";

describe("Initial State", () => {
  let sut = initialState;
  it("Contains placeholder characters", () => {
    expect(sut.characters).toEqual(placeHolderCharacters);
  });

  it("Does not have a next page url set", () => {
    expect(sut.nextPageUrl).toBeUndefined();
  });

  it("Does not have a filter string", () => {
    expect(sut.filterString).toEqual("");
  });
});
