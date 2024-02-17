
import { GenreType } from "../interfaces/GenreType";
import { PlatformType } from "../interfaces/PlatformType";
import ApiClient, { config } from "./ApiClient"


class GameService{

    getAllGenres(){
        return ApiClient.get(`/genres?key=${config.API_KEY}`)
    }
    getAllPlatforms(){
        return ApiClient.get(`/platforms/lists/parents?key=${config.API_KEY}`)
    }
    getFilteredGames(selectedGenre:GenreType,currentPlatform:PlatformType,orderBy:string){
        let URL =
      selectedGenre.id !== 0
        ? `/games?key=${config.API_KEY}&genres=${selectedGenre.id}`
        : `/games?key=${config.API_KEY}`;
    URL =
      currentPlatform.id !== 0
        ? URL + `&parent_platforms=${currentPlatform.id}`
        : URL;
    URL = orderBy ? URL + `&ordering=${orderBy}` : URL;

    return ApiClient.get(URL)
    }
}

export default new GameService();