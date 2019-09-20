import React from "react";
import ReactDOM from "react-dom";
import Thumbnail from "./Thumbnail";
import renderer from "react-test-renderer";
import ThumbnailProps from "./ThumbnailProps";

const characters: ThumbnailProps[][] = [
  [{ name: "Rick" }],
  [{ name: " Morty " }]
];

describe("Thumbnail", () => {
  describe.each(characters)("Character(%o)", (props: ThumbnailProps) => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Thumbnail {...props} />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("renders correctly", () => {
      const sut = renderer.create(<Thumbnail {...props} />).toJSON();

      expect(sut).toMatchInlineSnapshot(`
              <p>
                ${props.name}
              </p>
            `);
    });
  });
});
