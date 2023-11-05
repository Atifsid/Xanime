import { ApiClient } from "../client/ApiClient";

export default class AniListService {


  //     query {
  //     Page(page: 5, perPage: 5) {
  //         pageInfo{
  //             total
  //             currentPage
  //             lastPage
  //             hasNextPage
  //             perPage
  //         }
  //         media(type: ANIME, sort: TRENDING_DESC) {
  //             id
  //             title {
  //                 romaji
  //                 english
  //                 native
  //                 userPreferred
  //             }
  //         }
  //     }
  // }

  public async getTrending() {

    //         const query = `query {
    //     Page(page: 5, perPage: 5) {
    //         pageInfo{
    //             total
    //             currentPage
    //             lastPage
    //             hasNextPage
    //             perPage
    //         }
    //         media(type: ANIME, sort: TRENDING_DESC) {
    //             id
    //             title {
    //               romaji
    //               english
    //               native
    //               userPreferred
    //             }
    //         }
    //     }
    // }`

    const query = `query ($page: Int, $perPage: Int, $search: String) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total
      perPage
    }
    media(search: $search, type: ANIME, sort: FAVOURITES_DESC) {
      id
      title {
        romaji
        english
        native
      }
      type
      genres
    }
  }
}`

    const variables = `{ page: 1, perPage: 5, }`

    try {
      const res = await ApiClient.PostApi(`/`, { query, variables });
      return res;
    } catch (error) {
      return console.log('getTrending', error);
    }
  }
}