import { Character } from "./ApplicationState";

export const placeHolderCharacters: Character[] = Array.from(
  Array(20).keys()
).map(key => ({ id: -1 * key, name: undefined, imageUrl: undefined }));

export default placeHolderCharacters;
