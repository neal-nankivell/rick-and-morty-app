import { all } from "@redux-saga/core/effects";
import watchLoadCharacters from "./loadCharactersSaga";

export default function* rootSaga() {
  yield all([watchLoadCharacters()]);
}
