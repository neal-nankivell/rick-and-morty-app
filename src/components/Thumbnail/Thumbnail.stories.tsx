import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnail from "./Thumbnail";

storiesOf("Components/Thumbnail", module).add("Main Character Examples", () => (
  <>
    <p>
      <Thumbnail name="Rick Sanchez" />
    </p>
    <p>
      <Thumbnail name="Morty Smith" />
    </p>
  </>
));
