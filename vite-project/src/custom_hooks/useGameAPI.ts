import { useState } from "react";
import { GenreType } from "../interfaces/GenreType";
import { PlatformType } from "../interfaces/PlatformType";
import { GameType } from "../interfaces/GameType";
import GameService from "../services/GameService";
import { useQuery } from "@tanstack/react-query";

const useGameAPI = ()=>{
  const [search, setSearch] = useState("");
  const [clicked,setClicked] = useState(false)
    const { data:gens } = useQuery<GenreType[],Error,GenreType[]>({
      queryKey:['genres'],
      queryFn: GameService.getAllGenres
    })
    const genres = gens || []

    const {data:plats} = useQuery<PlatformType[],Error,PlatformType[]>({
      queryKey:['platforms'],
      queryFn:GameService.getAllPlatforms
    })
    const platforms = plats || []




    // const [genres, setGenres] = useState<GenreType[]>([]);
    // const [platforms, setPlatforms] = useState<PlatformType[]>([]);
    // const [games, setGames] = useState<GameType[]>([]);
    const [selectedGenre, setGenre] = useState<GenreType>({ id: 0, name: "" });
    const [currentPlatform, setPlatform] = useState<PlatformType>({
      id: 0,
      name: "",
    });
    const [orderBy, setOrderBy] = useState("");



    const { data:gms } = useQuery<GameType[],Error,GameType[]>({
      queryKey:['games',{"genre":selectedGenre.name,"platform":currentPlatform.name,"orderBy":orderBy},clicked],
      queryFn: ()=>{
        return GameService.getFilteredGames(selectedGenre,currentPlatform,orderBy,search)
      } 
    })
    const games = gms || []
    
  
    // useEffect(() => {
    //   GameService.getAllGenres()
    //     .then(({ data: { results } }) => setGenres(results))
    //     .catch((err) => console.log(err.message));
    // }, []);
  
    // useEffect(() => {
    //   GameService.getAllPlatforms()
    //     .then(({ data: { results } }) => setPlatforms(results))
    //     .catch((err) => console.log(err.message));
    // }, []);
  
    // useEffect(() => {
    //   setGames([]);
    //   GameService.getFilteredGames(selectedGenre, currentPlatform, orderBy)
    //     .then(({ data: { results } }) => {
    //       setGames(results);
    //     })
    //     .catch((err) => console.log(err.message));
    // }, [selectedGenre, currentPlatform, orderBy]);

    return { genres,platforms,games,selectedGenre,currentPlatform,setGenre,setPlatform,orderBy,setOrderBy,search,setSearch,clicked,setClicked }
}
export default useGameAPI;