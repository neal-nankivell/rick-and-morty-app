import { Reducer } from "redux";
import { initialState } from "./initialState";
import { ApplicationState } from "./ApplicationState";
import { Action, updateCharacters } from "./actions";
import { getType } from "typesafe-actions";

const applyUpdateCharacters: (
  state: ApplicationState,
  action: ReturnType<typeof updateCharacters>
) => ApplicationState = (
  state: ApplicationState,
  action: ReturnType<typeof updateCharacters>
) => ({ ...state, characters: action.payload.characters });

export const reducer: Reducer<ApplicationState, Action> = (
  state: ApplicationState = initialState,
  action: Action
) => {
  switch (action.type) {
    case getType(updateCharacters):
      return applyUpdateCharacters(state, action);
    default:
      return state;
  }
};

export default reducer;
