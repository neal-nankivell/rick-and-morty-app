import { ApplicationState } from "./ApplicationState";
import placeHolderCharacters from "./placeHolderCharacters";

export const initialState: ApplicationState = Object.freeze({
  characters: placeHolderCharacters,
  pages: 0,
  nextPageUrl: "",
  previousPageUrl: "",
  filterString: ""
});
export default initialState;
