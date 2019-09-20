import { LOAD_CHARACTERS, UPDATE_CHARACTERS } from "./actionTypes";
import { ActionType, createStandardAction } from "typesafe-actions";
import { Character } from "./ApplicationState";

export const loadCharacters = createStandardAction(LOAD_CHARACTERS)();

export const updateCharacters = createStandardAction(UPDATE_CHARACTERS).map(
  (characters: Character[]) => ({ payload: { characters } })
);

export type Action = ActionType<
  typeof loadCharacters | typeof updateCharacters
>;
