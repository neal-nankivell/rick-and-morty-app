import { takeLatest, put } from "@redux-saga/core/effects";
import { LOAD_CHARACTERS } from "./actionTypes";
import api, { GetCharactersResponse } from "../api/api";
import { updateCharacters } from "./actions";
import { Character } from "./ApplicationState";

function* loadCharacters() {
  const response: GetCharactersResponse | undefined = yield api.getCharacters();
  if (response === undefined) {
    console.log("Error retreving characters");
  } else {
    const characters: Character[] = response.results
      .filter(c => c.name && c.url)
      .map(c => ({
        name: c.name,
        imageUrl: c.image
      }));
    yield put(updateCharacters(characters));
  }
}

export default function* watchLoadCharacters() {
  yield takeLatest(LOAD_CHARACTERS, loadCharacters);
}
