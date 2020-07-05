import api, { buildUrl } from "./api";
import fetchMock from "fetch-mock";

describe("api", () => {
  const endpoint = "https://rickandmortyapi.com/api/character";
  const sut = api;
  afterEach(() => fetchMock.reset());

  test("get characters calls correct endpoint", async () => {
    const mockResponse = {
      results: [
        { name: "Rick", ignored: "additional field" },
        { name: "Mr Meseeks" }
      ]
    };
    fetchMock.getOnce(endpoint, mockResponse);

    const result = await sut.getCharacters(buildUrl());

    expect(fetchMock.called(endpoint)).toBeTruthy();
    expect(result).toEqual(mockResponse);
  });

  test("get characters handles server error", async () => {
    fetchMock.getOnce(endpoint, 500);

    const result = await sut.getCharacters(buildUrl());

    expect(fetchMock.called(endpoint)).toBeTruthy();
    expect(result).toEqual(undefined);
  });

  test("get characters performs basic validation and ignores bad data", async () => {
    const malformedResponse = {
      results: { name: "No Array here :O" }
    };
    fetchMock.getOnce(endpoint, malformedResponse);

    const result = await sut.getCharacters(buildUrl());

    expect(fetchMock.called(endpoint)).toBeTruthy();
    expect(result).toEqual(undefined);
  });

  it("buildUrl applies name filter", () => {
    var sut = buildUrl;

    var result = sut("test_filter");

    expect(result.endsWith("/?name=test_filter"));
  });
});
