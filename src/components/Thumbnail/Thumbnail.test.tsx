import React from "react";
import ReactDOM from "react-dom";
import Thumbnail from "./Thumbnail";
import ThumbnailProps from "./ThumbnailProps";
import characters from "../../testData/characters";
import { shallow } from "enzyme";

const testCases: ThumbnailProps[][] = characters.map(c => [c]);

describe("Thumbnail", () => {
  describe.each(testCases)("Character(%o)", (props: ThumbnailProps) => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Thumbnail {...props} />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("renders correctly", () => {
      const sut = shallow(<Thumbnail {...props} />);

      expect(sut).toMatchInlineSnapshot(`
              <styled.div>
                <styled.img
                  alt="${props.name} mug shot"
                  src="${props.imageUrl}"
                />
                <styled.span>
                  ${props.name}
                </styled.span>
              </styled.div>
            `);
    });
  });
});
