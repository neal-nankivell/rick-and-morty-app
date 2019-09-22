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

export async function getCharacters(
  nameFilter: string | undefined = undefined
): Promise<GetCharactersResponse | undefined> {
  let url: string = "https://rickandmortyapi.com/api/character";
  if (nameFilter) {
    url += `/?name=${nameFilter}`;
  }

  const response = await fetch(url);
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

export default {
  getCharacters
};
