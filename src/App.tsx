import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CharactersGridContainer from "./components/CharactersGrid/CharactersGridContainer";
import SearchBoxContainer from "./components/SearchBox/SearchBoxContainer";
import LoadMoreButtonContainer from "./components/LoadMoreButton/LoadMoreButtonContainer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h1>Rick and Morty Characters</h1>
      <SearchBoxContainer />
      <CharactersGridContainer />
      <LoadMoreButtonContainer />
    </Provider>
  );
};

export default App;
