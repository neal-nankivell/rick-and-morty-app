import React from "react";
import ReactDOM from "react-dom";
import SearchBox from "./SearchBox";

describe("SearchBox", () => {
  const mockCallback = jest.fn().mockName("SearchOnChange");

  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<SearchBox onChange={mockCallback} value="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
