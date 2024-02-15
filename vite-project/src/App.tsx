import { Fragment, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import ApiClient, { config } from "./services/ApiClient";
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

  useEffect(() => {
    ApiClient.get(`/genres?key=${config.API_KEY}`)
      .then(({ data: { results } }) => setGenres(results))
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    ApiClient.get(`/platforms/lists/parents?key=${config.API_KEY}`)
      .then(({ data: { results } }) => setPlatforms(results))
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    setGames([]);
    let URL =
      selectedGenre.id !== 0
        ? `/games?key=${config.API_KEY}&genres=${selectedGenre.id}`
        : `/games?key=${config.API_KEY}`;
    URL =
      currentPlatform.id !== 0 ? URL + `&platforms=${currentPlatform.id}` : URL;
    ApiClient.get(URL)
      .then(({ data: { results } }) => {
        setGames(results);
      })
      .catch((err) => console.log(err.message));
  }, [selectedGenre, currentPlatform]);

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
      />
    </Fragment>
  );
}

export default App;
