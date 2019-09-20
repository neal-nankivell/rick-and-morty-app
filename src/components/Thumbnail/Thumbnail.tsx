import React from "react";
import ThumbnailProps from "./ThumbnailProps";

export const Thumbnail: React.FC<ThumbnailProps> = props => (
  <p>
    <img src={props.imageUrl} alt={`Image of ${props.name}`} />
    {props.name}
  </p>
);

export default Thumbnail;
