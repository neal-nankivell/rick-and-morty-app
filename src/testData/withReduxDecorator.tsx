import React from "react";
import { makeDecorator } from "@storybook/addons";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ApplicationState } from "../redux/ApplicationState";
import { loadCharacters } from "../redux/actions";

export const withRedux = makeDecorator({
  name: "withRedux",
  parameterName: "_",
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context) => {
    const demoStore = store;
    let state = store.getState() as ApplicationState;

    if (state.characters.length === 0) {
      demoStore.dispatch(loadCharacters());
    }

    return <Provider store={demoStore}>{getStory(context)}</Provider>;
  }
});

export default withRedux;
