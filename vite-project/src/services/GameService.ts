
import { GenreType } from "../interfaces/GenreType";
import { PlatformType } from "../interfaces/PlatformType";
import ApiClient, { config } from "./ApiClient"


class GameService{

    getAllGenres(){
        
        return ApiClient.get(`/genres?key=${config.API_KEY}`).then(({ data:{results} })=>results)
    }
    getAllPlatforms(){
        return ApiClient.get(`/platforms/lists/parents?key=${config.API_KEY}`).then(({ data:{results} })=>results)
    }
    getFilteredGames(selectedGenre:GenreType,currentPlatform:PlatformType,orderBy:string,searchQuery:string){
        let URL =
      selectedGenre.id !== 0
        ? `/games?key=${config.API_KEY}&genres=${selectedGenre.id}`
        : `/games?key=${config.API_KEY}`;
    URL =
      currentPlatform.id !== 0
        ? URL + `&parent_platforms=${currentPlatform.id}`
        : URL;
    URL = orderBy ? URL + `&ordering=${orderBy}` : URL;

    URL = searchQuery ? URL + `&search=${searchQuery}` : URL;
    

    return ApiClient.get(URL).then(({ data:{results} })=>results)
    }
}

export default new GameService();