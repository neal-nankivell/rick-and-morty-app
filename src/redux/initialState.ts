import { ApplicationState } from "./ApplicationState";
export const initialState: ApplicationState = Object.freeze({
  characters: [],
  pages: 0,
  nextPageUrl: "",
  previousPageUrl: "",
  filterString: ""
});
export default initialState;
