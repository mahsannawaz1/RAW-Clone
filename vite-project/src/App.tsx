import { Fragment, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

import useGameAPI from "./custom_hooks/useGameAPI";

function App() {
  const [darkMode, setDarkMode] = useState({ isOn: true, color: "palegreen" });
  const {
    genres,
    platforms,
    games,
    selectedGenre,
    currentPlatform,
    setGenre,
    setPlatform,
    setOrderBy,
    search,
    setSearch,
    clicked,
    setClicked,
  } = useGameAPI();
  return (
    <Fragment>
      <Navbar
        clicked={clicked}
        setClicked={setClicked}
        search={search}
        setSearch={setSearch}
        darkMode={darkMode}
        handleDarkMode={() =>
          darkMode.isOn
            ? setDarkMode({ isOn: false, color: "darkgrey" })
            : setDarkMode({ isOn: true, color: "palegreen" })
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
