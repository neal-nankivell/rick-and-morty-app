import { ApplicationState } from "./ApplicationState";
import placeHolderCharacters from "./placeHolderCharacters";

export const initialState: ApplicationState = Object.freeze({
  characters: placeHolderCharacters,
  nextPageUrl: undefined,
  filterString: ""
});
export default initialState;
