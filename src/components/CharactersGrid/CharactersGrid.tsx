import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import CharactersGridProps from "./CharactersGridProps";
import styled from "styled-components";

const Container = styled.ul`
  margin: 0 auto;
  text-align: center;
  padding: 0;
`;

const Item = styled.li`
  display: inline-block;
  vertical-align: top;
  margin: 0.5em;
`;

const NoResults = styled.p`
  color: #fff;
  text-align: center;
  margin: 0 auto;
  padding: 2em;
`;

export const CharactersGrid: React.FC<CharactersGridProps> = props => {
  if (props.characters.length === 0) {
    return <NoResults>No Characters Found.</NoResults>;
  }
  return (
    <Container>
      {props.characters.map(character => (
        <Item key={character.id}>
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
