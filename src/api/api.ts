export interface GetCharactersLocation {
  name: string;
  url: string;
}

export interface GetCharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    previous: string;
  };
  results: {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: GetCharactersLocation;
    location: GetCharactersLocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }[];
}

export function buildUrl(nameFilter: string | undefined = undefined) {
  let url: string = "https://rickandmortyapi.com/api/character";
  if (nameFilter) {
    url += `/?name=${nameFilter}`;
  }
  return url;
}

export async function getCharacters(
  url: string | undefined
): Promise<GetCharactersResponse | undefined> {
  const response = await fetch(url || buildUrl());
  if (!response.ok) {
    console.log(response.statusText);
    return undefined;
  }

  const data = (await response.json()) as GetCharactersResponse;

  if (data.results === undefined || !Array.isArray(data.results)) {
    console.log("Results for getCharacters is not in the expected format");
    return undefined;
  }

  return data;
}

export const api = {
  getCharacters
};

export default api;