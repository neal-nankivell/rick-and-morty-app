import { takeLatest, put, select, delay } from "@redux-saga/core/effects";
import { LOAD_CHARACTERS, LOAD_MORE } from "./actionTypes";
import api, { GetCharactersResponse, buildUrl } from "../api/api";
import { updateCharacters, updateNextPage } from "./actions";
import { Character, ApplicationState } from "./ApplicationState";
import placeHolderCharacters from "./placeHolderCharacters";

function* loadCharacters() {
  yield delay(500);
  yield put(updateCharacters(placeHolderCharacters));
  yield put(updateNextPage(undefined));

  const state: ApplicationState = yield select();
  const response: GetCharactersResponse | undefined = yield api.getCharacters(
    buildUrl(state.filterString)
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
    yield put(updateNextPage(response.info.next));

    yield takeLatest(LOAD_MORE, loadMore);
  }
}

function* loadMore() {
  yield delay(500);
  const state: ApplicationState = yield select();
  if (!state.nextPageUrl) {
    console.log("No next page available");
    return;
  }
  const response: GetCharactersResponse | undefined = yield api.getCharacters(
    state.nextPageUrl
  );
  if (response === undefined) {
    console.log("Error loading more characters");
  } else {
    const characters: Character[] = response.results
      .filter(c => c.name && c.url)
      .map(c => ({
        id: c.id,
        name: c.name,
        imageUrl: c.image
      }));

    yield put(updateCharacters([...state.characters, ...characters]));
    yield put(updateNextPage(response.info.next));
  }
}
export default function* watchLoadCharacters() {
  yield takeLatest(LOAD_CHARACTERS, loadCharacters);
}
