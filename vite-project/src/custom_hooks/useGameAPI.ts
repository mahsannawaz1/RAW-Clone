import { useEffect, useState } from "react";
import { GenreType } from "../interfaces/GenreType";
import { PlatformType } from "../interfaces/PlatformType";
import { GameType } from "../interfaces/GameType";
import GameService from "../services/GameService";

const useGameAPI = ()=>{
    const [genres, setGenres] = useState<GenreType[]>([]);
    const [platforms, setPlatforms] = useState<PlatformType[]>([]);
    const [games, setGames] = useState<GameType[]>([]);
    const [selectedGenre, setGenre] = useState<GenreType>({ id: 0, name: "" });
    const [currentPlatform, setPlatform] = useState<PlatformType>({
      id: 0,
      name: "",
    });
    const [orderBy, setOrderBy] = useState("");
  
    useEffect(() => {
      GameService.getAllGenres()
        .then(({ data: { results } }) => setGenres(results))
        .catch((err) => console.log(err.message));
    }, []);
  
    useEffect(() => {
      GameService.getAllPlatforms()
        .then(({ data: { results } }) => setPlatforms(results))
        .catch((err) => console.log(err.message));
    }, []);
  
    useEffect(() => {
      setGames([]);
      GameService.getFilteredGames(selectedGenre, currentPlatform, orderBy)
        .then(({ data: { results } }) => {
          setGames(results);
        })
        .catch((err) => console.log(err.message));
    }, [selectedGenre, currentPlatform, orderBy]);

    return { genres,platforms,games,selectedGenre,currentPlatform,setGenre,setPlatform,setOrderBy }
}
export default useGameAPI;