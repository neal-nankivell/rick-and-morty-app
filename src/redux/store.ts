import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { LOAD_CHARACTERS } from "./actionTypes";
import { reducer } from "./reducer";
import { initialState } from "./initialState";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

// Request initial load
store.dispatch({ type: LOAD_CHARACTERS });

export default store;
