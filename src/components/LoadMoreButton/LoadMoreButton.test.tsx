import React from "react";
import ReactDOM from "react-dom";
import { LoadMoreButton } from "./LoadMoreButton";
import { shallow } from "enzyme";

describe("LoadMoreButton", () => {
  const mockCallback = jest.fn().mockName("LoadMoreButtonOnClick");

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <LoadMoreButton onClick={mockCallback} hidden={false} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly", () => {
    const sut = shallow(
      <LoadMoreButton onClick={mockCallback} hidden={false} />
    );

    expect(sut).toMatchInlineSnapshot(`
      <styled.div>
        <StyledButton
          hidden={false}
          onClick={[MockFunction LoadMoreButtonOnClick]}
        >
          Load More
        </StyledButton>
      </styled.div>
    `);
  });

  it.each([[true], [false]])("Passes %s down to styled.button prop", hidden => {
    const sut = shallow(
      <LoadMoreButton onClick={mockCallback} hidden={hidden} />
    );

    expect(sut.find("StyledButton").prop("hidden")).toEqual(hidden);
  });

  it("Clicking the button triggers the parent onClick callback", () => {
    const sut = shallow(
      <LoadMoreButton onClick={mockCallback} hidden={false} />
    );

    mockCallback.mockReset();

    expect(mockCallback).not.toHaveBeenCalled();

    sut.find("StyledButton").simulate("click");

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
