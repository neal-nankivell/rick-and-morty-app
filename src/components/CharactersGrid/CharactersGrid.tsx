import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import CharactersGridProps from "./CharactersGridProps";
import styled from "styled-components";

const Container = styled.ul`
  margin: 0 auto;
  text-align: center;
`;

const Item = styled.li`
  display: inline-block;
  vertical-align: top;
  margin: 0.5em;
`;

export const CharactersGrid: React.FC<CharactersGridProps> = props => {
  return (
    <Container>
      {props.characters.map(character => (
        <Item key={character.name}>
          <Thumbnail
            key={character.name}
            name={character.name}
            imageUrl={character.imageUrl}
          />
        </Item>
      ))}
    </Container>
  );
};

export default CharactersGrid;
