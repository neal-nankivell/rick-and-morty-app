import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CharactersGridContainer from "./components/CharactersGrid/CharactersGridContainer";
import SearchBoxContainer from "./components/SearchBox/SearchBoxContainer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h1>Rick and Morty Characters</h1>
      <SearchBoxContainer />
      <CharactersGridContainer />
    </Provider>
  );
};

export default App;
