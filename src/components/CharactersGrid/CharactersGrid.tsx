import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import CharactersGridProps from "./CharactersGridProps";

export const CharactersGrid: React.FC<CharactersGridProps> = props => {
  return (
    <>
      {props.characters.map(character => (
        <Thumbnail name={character.name} imageUrl={character.imageUrl} />
      ))}
    </>
  );
};

export default CharactersGrid;
