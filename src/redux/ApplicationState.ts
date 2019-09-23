export interface Character {
  id: number;
  name?: string;
  imageUrl?: string;
}

export interface ApplicationState {
  characters: Character[];
  nextPageUrl?: string;
  filterString: string;
}
