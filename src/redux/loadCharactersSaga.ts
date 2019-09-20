import { takeLatest, put } from "@redux-saga/core/effects";
import { LOAD_CHARACTERS } from "./actionTypes";
import api from "../api/api";
import { updateCharacters } from "./actions";

function* loadCharacters() {
  const characters = yield api.getCharacters();
  yield put(updateCharacters(characters));
}

export default function* watchLoadCharacters() {
  yield takeLatest(LOAD_CHARACTERS, loadCharacters);
}
