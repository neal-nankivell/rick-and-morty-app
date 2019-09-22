import React from "react";
import ThumbnailProps from "./ThumbnailProps";
import styled from "styled-components";

const imageSize = 10;

const Image = styled.img`
  height: ${imageSize}em;
  width: ${imageSize}em;
`;

const Container = styled.div`
  position: relative;
  height: ${imageSize}em;
  width: ${imageSize}em;
  background: #00000050;
`;

const Caption = styled.span`
  position: absolute;
  bottom: 0em;
  left: 0em;
  width: ${imageSize - 1}em;
  padding: 0.5em;
  background: #00000050;
  color: #fff;
  text-align: center;
`;

export const Thumbnail: React.FC<ThumbnailProps> = props => {
  return (
    <Container>
      <Image src={props.imageUrl} alt={`${props.name} mug shot`} />
      <Caption>{props.name}</Caption>
    </Container>
  );
};

export default Thumbnail;
