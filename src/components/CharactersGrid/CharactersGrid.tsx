import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import CharactersGridProps from "./CharactersGridProps";

export const CharactersGrid: React.FC<CharactersGridProps> = props => {
  return (
    <ul>
      {props.characters.map(character => (
        <li key={character.name}>
          <Thumbnail
            key={character.name}
            name={character.name}
            imageUrl={character.imageUrl}
          />
        </li>
      ))}
    </ul>
  );
};

export default CharactersGrid;
