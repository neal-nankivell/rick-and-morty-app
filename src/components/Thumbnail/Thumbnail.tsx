import React from "react";
import ThumbnailProps from "./ThumbnailProps";

export const Thumbnail: React.FC<ThumbnailProps> = props => (
  <p>
    <img src={props.imageUrl} alt={`${props.name} mug shot`} />
    {props.name}
  </p>
);

export default Thumbnail;
