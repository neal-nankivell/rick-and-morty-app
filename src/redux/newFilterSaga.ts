import { put, throttle } from "@redux-saga/core/effects";
import { NEW_FILTER } from "./actionTypes";
import { updateFilter, loadCharacters } from "./actions";

function* applyNewFilter(action: ReturnType<typeof updateFilter>) {
  yield put(updateFilter(action.payload.filter));
  yield put(loadCharacters());
}

export default function* watchNewFilter() {
  yield throttle(500, NEW_FILTER, applyNewFilter);
}
