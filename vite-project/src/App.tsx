import { Fragment, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState({ on: true, color: "palegreen" });
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
    </Fragment>
  );
}

export default App;
