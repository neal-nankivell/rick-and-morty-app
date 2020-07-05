import {
  LOAD_CHARACTERS,
  UPDATE_CHARACTERS,
  NEW_FILTER,
  UPDATE_FILTER,
  UPDATE_NEXT_PAGE,
  LOAD_MORE
} from "./actionTypes";
import { ActionType, createAction } from "typesafe-actions";
import { Character } from "./ApplicationState";

export const loadCharacters = createAction(LOAD_CHARACTERS)();

export const updateCharacters = createAction(UPDATE_CHARACTERS,
  (characters: Character[]) => ({ characters })
)();

export const newFilter = createAction(NEW_FILTER,
  (filter: string) => ({ filter })
)();

export const updateFilter = createAction(UPDATE_FILTER,
  (filter: string) => ({ filter })
)();

export const updateNextPage = createAction(UPDATE_NEXT_PAGE,
  (nextUrl: string | undefined) => ({ nextUrl })
)();

export const loadMore = createAction(LOAD_MORE)();

export type Action = ActionType<
  | typeof loadCharacters
  | typeof updateCharacters
  | typeof newFilter
  | typeof updateFilter
  | typeof updateNextPage
  | typeof loadMore
>;
