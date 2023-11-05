import { ApiUrl } from "../../constants/api-url-constant";
import { DetailsResponse } from "../../models/DetailsResponse";
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

    public async getDetails(id: string) {
        try {
            const res = ApiClient.GetApi<DetailsResponse>(`${ApiUrl.info}${id}`)
            return res
        } catch (error) {
            console.log('getDetails', error);
        }
    }
}