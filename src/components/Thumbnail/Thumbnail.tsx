import React from "react";
import ThumbnailProps from "./ThumbnailProps";

export const Thumbnail: React.FC<ThumbnailProps> = props => <p>{props.name}</p>;

export default Thumbnail;
