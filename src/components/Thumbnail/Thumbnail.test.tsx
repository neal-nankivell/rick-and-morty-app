import React from "react";
import ReactDOM from "react-dom";
import Thumbnail from "./Thumbnail";
import renderer from "react-test-renderer";
import ThumbnailProps from "./ThumbnailProps";
import characters from "../../testData/characters";

const testCases: ThumbnailProps[][] = characters.map(c => [c]);

describe("Thumbnail", () => {
  describe.each(testCases)("Character(%o)", (props: ThumbnailProps) => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Thumbnail {...props} />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("renders correctly", () => {
      const sut = renderer.create(<Thumbnail {...props} />).toJSON();

      expect(sut).toMatchInlineSnapshot(`
              <p>
                <img
                  alt="${props.name} mug shot"
                  src="${props.imageUrl}"
                />
                ${props.name}
              </p>
            `);
    });
  });
});
