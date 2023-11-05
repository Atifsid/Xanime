export interface SearchResponse {
    currentPage: string;
    hasNextPage: boolean;
    results: Result[];
}

export interface Result {
    id: string;
    image: string
    releaseDate: string;
    subOrDub: string;
    title: string;
    url: string
}
