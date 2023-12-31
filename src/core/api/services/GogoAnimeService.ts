import { ApiUrl } from "../../constants/api-url-constant";
import { DetailsResponse } from "../../models/DetailsResponse";
import { SearchResponse } from "../../models/SearchResponse";
import { ServerResponse } from "../../models/ServerResponse";
import { StreamResponse } from "../../models/StreamResponse";
import { ApiClient } from "../client/ApiClient";

export default class GogoAnimeService {
    public async search(str: string, page: number) {
        try {
            const res = ApiClient.GetApi<SearchResponse>(`${ApiUrl.search}${str}`, { page: page })
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

    public async getServers(id: string) {
        try {
            const res = ApiClient.GetApi<ServerResponse>(`${ApiUrl.servers}${id}`)
            return res
        } catch (error) {
            console.log('getServers', error);
        }
    }

    public async getStreams(id: string, server: string) {
        try {
            const res = ApiClient.GetApi<StreamResponse>(`${ApiUrl.streams}${id}`, { "server": server })
            return res
        } catch (error) {
            console.log('getStreams', error);
        }
    }
}