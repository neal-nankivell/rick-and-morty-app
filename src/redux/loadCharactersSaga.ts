import { takeLatest, put, select, delay } from "@redux-saga/core/effects";
import { LOAD_CHARACTERS } from "./actionTypes";
import api, { GetCharactersResponse } from "../api/api";
import { updateCharacters } from "./actions";
import { Character, ApplicationState } from "./ApplicationState";
import placeHolderCharacters from "./placeHolderCharacters";

function* loadCharacters() {
  yield delay(500);
  yield put(updateCharacters(placeHolderCharacters));
  const state: ApplicationState = yield select();
  const response: GetCharactersResponse | undefined = yield api.getCharacters(
    state.filterString
  );
  if (response === undefined) {
    console.log("Error retreving characters");
    yield put(updateCharacters([]));
  } else {
    const characters: Character[] = response.results
      .filter(c => c.name && c.url)
      .map(c => ({
        id: c.id,
        name: c.name,
        imageUrl: c.image
      }));
    yield put(updateCharacters(characters));
  }
}

export default function* watchLoadCharacters() {
  yield takeLatest(LOAD_CHARACTERS, loadCharacters);
}
