import { Character } from "../redux/ApplicationState";

export async function getCharacters(): Promise<Character[]> {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  if (!response.ok) {
    console.log(response.statusText);
    return [];
  }

  const data = (await response.json()) as {
    results: { name: string; image: string }[];
  };

  if (data.results === undefined || !Array.isArray(data.results)) {
    console.log("Results for getCharacters is not in the expected format");
    return [];
  }

  return data.results
    .filter(c => c.name !== undefined || c.image !== undefined)
    .map(c => ({ name: c.name, imageUrl: c.image }));
}

export default {
  getCharacters
};
