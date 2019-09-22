import { all } from "@redux-saga/core/effects";
import watchLoadCharacters from "./loadCharactersSaga";
import watchNewFilter from "./newFilterSaga";

export default function* rootSaga() {
  yield all([watchLoadCharacters(), watchNewFilter()]);
}
