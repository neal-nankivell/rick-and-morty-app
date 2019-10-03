import React from "react";
import ReactDOM from "react-dom";
import SearchBox from "./SearchBox";
import { shallow } from "enzyme";

describe("SearchBox", () => {
  const mockCallback = jest.fn().mockName("SearchOnChange");

  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<SearchBox onChange={mockCallback} value="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly", () => {
    const sut = shallow(
      <SearchBox onChange={mockCallback} value="Current Search" />
    );

    expect(sut).toMatchInlineSnapshot(`
      <styled.div>
        <StyledInput
          aria-label="Search list of characters"
          defaultValue="Current Search"
          onChange={[Function]}
          placeholder="Search"
          type="search"
        />
      </styled.div>
    `);
  });

  it("Trigers onChange callback when input value changes", () => {
    const sut = shallow(
      <SearchBox onChange={mockCallback} value="Current Search" />
    );

    mockCallback.mockReset();

    sut
      .find("StyledInput")
      .simulate("change", { target: { value: "New Value" } });

    expect(mockCallback).toHaveBeenCalledWith("New Value");
  });
});
