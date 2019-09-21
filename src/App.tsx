import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CharactersGridContainer from "./components/CharactersGrid/CharactersGridContainer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h1>Rick and Morty Characters</h1>
      <CharactersGridContainer />
    </Provider>
  );
};

export default App;
