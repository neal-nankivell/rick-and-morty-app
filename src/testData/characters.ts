import { Character } from "../redux/ApplicationState";

export const characters: Character[] = [
  {
    id: 1,
    name: "Test Rick",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  },
  {
    id: 2,
    name: "Test Morty",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  },
  {
    id: -1,
    name: undefined,
    imageUrl: undefined
  }
];

export default characters;
