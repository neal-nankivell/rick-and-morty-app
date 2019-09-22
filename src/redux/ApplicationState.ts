export interface Character {
  id: number;
  name?: string;
  imageUrl?: string;
}

export interface ApplicationState {
  characters: Character[];
  pages: number;
  nextPageUrl: string;
  previousPageUrl: string;
  filterString: string;
}
