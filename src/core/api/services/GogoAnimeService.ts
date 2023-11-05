import { ApiUrl } from "../../constants/api-url-constant";
import { SearchResponse } from "../../models/SearchResponse";
import { ApiClient } from "../client/ApiClient";

export default class GogoAnimeService {
    public async search(str: string) {
        try {
            const res = ApiClient.GetApi<SearchResponse>(`${ApiUrl.search}${str}`, { page: 1 })
            return res
        } catch (error) {
            console.log('search', error);
        }
    }
}