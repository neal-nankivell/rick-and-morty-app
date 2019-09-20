export async function getCharacters(): Promise<{ name: string }[]> {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  if (!response.ok) {
    console.log(response.statusText);
    return [];
  }

  const data = (await response.json()) as { results: { name: string }[] };

  if (data.results === undefined || !Array.isArray(data.results)) {
    console.log("Results for getCharacters is not in the expected format");
    return [];
  }

  return data.results
    .filter(c => c.name !== undefined)
    .map(c => ({ name: c.name }));
}

export default {
  getCharacters
};
