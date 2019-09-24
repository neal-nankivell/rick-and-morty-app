import {
  loadCharacters,
  updateCharacters,
  newFilter,
  updateFilter,
  updateNextPage,
  loadMore
} from "./actions";
import {
  LOAD_CHARACTERS,
  UPDATE_CHARACTERS,
  NEW_FILTER,
  UPDATE_FILTER,
  UPDATE_NEXT_PAGE,
  LOAD_MORE
} from "./actionTypes";
import testCharacters from "../testData/characters";

describe("action creators", () => {
  it("loadCharacters uses correct type", () => {
    var result = loadCharacters();

    expect(result.type).toEqual(LOAD_CHARACTERS);
  });

  it("updateCharacters uses correct type and payload", () => {
    var characters = testCharacters;

    var result = updateCharacters(characters);

    expect(result.type).toEqual(UPDATE_CHARACTERS);
    expect(result.payload.characters).toEqual(characters);
  });

  it("newFilter uses correct type and payload", () => {
    var filter = "Test Filter String";

    var result = newFilter(filter);

    expect(result.type).toEqual(NEW_FILTER);
    expect(result.payload.filter).toEqual(filter);
  });

  it("updateFilter uses correct type and payload", () => {
    var filter = "Another test filter";

    var result = updateFilter(filter);

    expect(result.type).toEqual(UPDATE_FILTER);
    expect(result.payload.filter).toEqual(filter);
  });

  it("updateNextPage uses correct type and payload", () => {
    var url = "some test url";

    var result = updateNextPage(url);

    expect(result.type).toEqual(UPDATE_NEXT_PAGE);
    expect(result.payload.nextUrl).toEqual(url);
  });

  it("load more uses correct type", () => {
    var result = loadMore();

    expect(result.type).toEqual(LOAD_MORE);
  });
});
