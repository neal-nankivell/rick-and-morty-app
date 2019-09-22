import {
  LOAD_CHARACTERS,
  UPDATE_CHARACTERS,
  NEW_FILTER,
  UPDATE_FILTER
} from "./actionTypes";
import { ActionType, createStandardAction } from "typesafe-actions";
import { Character } from "./ApplicationState";

export const loadCharacters = createStandardAction(LOAD_CHARACTERS)();

export const updateCharacters = createStandardAction(UPDATE_CHARACTERS).map(
  (characters: Character[]) => ({ payload: { characters } })
);

export const newFilter = createStandardAction(NEW_FILTER).map(
  (filter: string) => ({ payload: { filter } })
);

export const updateFilter = createStandardAction(UPDATE_FILTER).map(
  (filter: string) => ({ payload: { filter } })
);

export type Action = ActionType<
  | typeof loadCharacters
  | typeof updateCharacters
  | typeof newFilter
  | typeof updateFilter
>;
