import { Fragment, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import ApiClient, { config } from "./services/ApiClient";
export interface GenreType {
  id: number;
  name: string;
  image_background: string;
}
export interface Platform {
  id: number;
  name: string;
}

function App() {
  const [darkMode, setDarkMode] = useState({ on: true, color: "palegreen" });
  const [genres, setGenres] = useState<GenreType[]>([]);
  const [platforms, setPlatforms] = useState<Platform[]>([]);

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
      <Main genreList={genres} platformList={platforms} />
    </Fragment>
  );
}

export default App;
