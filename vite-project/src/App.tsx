import { Fragment, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import GameService from "./services/GameService";
export interface GenreType {
  id: number;
  name: string;
  image_background?: string;
}
export interface PlatformType {
  id: number;
  name: string;
  slug?: string;
}

export interface GameType {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  metacritic: number;
  parent_platforms: [{ platform: PlatformType }];
}

function App() {
  const [darkMode, setDarkMode] = useState({ on: true, color: "palegreen" });
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

  return (
    <Fragment>
      <Navbar
        darkMode={darkMode}
        handleDarkMode={() =>
          darkMode.on
            ? setDarkMode({ on: false, color: "darkgrey" })
            : setDarkMode({ on: true, color: "palegreen" })
        }
      />
      <Main
        genreList={genres}
        platformList={platforms}
        gameList={games}
        handleChangeGenre={setGenre}
        selectedGenre={selectedGenre}
        handleChangePlatform={setPlatform}
        currentPlatform={currentPlatform}
        handleChangeOrderBy={setOrderBy}
      />
    </Fragment>
  );
}

export default App;
