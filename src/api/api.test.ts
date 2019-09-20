import api from "./api";
import fetchMock from "fetch-mock";

describe("api", () => {
  const endpoint = "https://rickandmortyapi.com/api/character";
  const sut = api;
  afterEach(fetchMock.reset);

  test("get characters calls correct endpoint", async () => {
    fetchMock.getOnce(endpoint, {
      results: [
        { name: "Rick", ignored: "additional field" },
        { name: "Mr Meseeks" }
      ]
    });

    const result = await sut.getCharacters();

    expect(fetchMock.called(endpoint)).toBeTruthy();
    expect(result).toEqual([{ name: "Rick" }, { name: "Mr Meseeks" }]);
  });

  test("get characters handles server error", async () => {
    fetchMock.getOnce(endpoint, 500);

    const result = await sut.getCharacters();

    expect(fetchMock.called(endpoint)).toBeTruthy();
    expect(result).toEqual([]);
  });

  test("get characters handles malformed characters in response", async () => {
    fetchMock.getOnce(endpoint, {
      results: [
        { badName: "Rick", ignored: "additional field" },
        { name: "Mr Meseeks", ignored: "I shouldnt be passed down!" }
      ]
    });

    const result = await sut.getCharacters();

    expect(fetchMock.called(endpoint)).toBeTruthy();
    expect(result).toEqual([{ name: "Mr Meseeks" }]);
  });

  test("get characters handles no results field on response", async () => {
    fetchMock.getOnce(endpoint, {
      otherData: [{ foo: "Rick", bar: "Morty" }]
    });

    const result = await sut.getCharacters();

    expect(fetchMock.called(endpoint)).toBeTruthy();
    expect(result).toEqual([]);
  });

  test("get characters handles malformed results on response", async () => {
    fetchMock.getOnce(endpoint, {
      results: { name: "No Array here :O" }
    });

    const result = await sut.getCharacters();

    expect(fetchMock.called(endpoint)).toBeTruthy();
    expect(result).toEqual([]);
  });
});
