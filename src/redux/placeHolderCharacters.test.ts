import placeHolderCharacters from "./placeHolderCharacters";

describe("placeHolderCharacters", () => {
  let sut = placeHolderCharacters;

  it("Contains 20 placeholders", () => {
    expect(sut.length).toEqual(20);
  });

  it("each placeholder has a unique id", () => {
    let ids = sut.map(placeHolder => placeHolder.id);
    let uniqueIds = ids.filter((v, i) => ids.indexOf(v) === i);
    expect(uniqueIds.length).toEqual(ids.length);
  });

  it("each placeholder does not have a name or url defined", () => {
    sut.forEach(character => {
      expect(character.name).toBeUndefined();
      expect(character.imageUrl).toBeUndefined();
    });
  });
});
