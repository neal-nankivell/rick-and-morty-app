import { Reducer } from "redux";
import { initialState } from "./initialState";
import { ApplicationState } from "./ApplicationState";
import {
  Action,
  updateCharacters,
  updateFilter,
  updateNextPage
} from "./actions";
import { getType } from "typesafe-actions";

const applyUpdateCharacters: (
  state: ApplicationState,
  action: ReturnType<typeof updateCharacters>
) => ApplicationState = (
  state: ApplicationState,
  action: ReturnType<typeof updateCharacters>
) => ({ ...state, characters: action.payload.characters });

const applyUpdateFilter: (
  state: ApplicationState,
  action: ReturnType<typeof updateFilter>
) => ApplicationState = (
  state: ApplicationState,
  action: ReturnType<typeof updateFilter>
) => ({ ...state, filterString: action.payload.filter });

const applyUpdateNextPage: (
  state: ApplicationState,
  action: ReturnType<typeof updateNextPage>
) => ApplicationState = (
  state: ApplicationState,
  action: ReturnType<typeof updateNextPage>
) => ({ ...state, nextPageUrl: action.payload.nextUrl });

export const reducer: Reducer<ApplicationState, Action> = (
  state: ApplicationState = initialState,
  action: Action
) => {
  switch (action.type) {
    case getType(updateCharacters):
      return applyUpdateCharacters(state, action);
    case getType(updateFilter):
      return applyUpdateFilter(state, action);
    case getType(updateNextPage):
      return applyUpdateNextPage(state, action);
    default:
      return state;
  }
};

export default reducer;
