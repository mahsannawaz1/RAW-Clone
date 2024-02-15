import { Fragment } from "react";
import GenreList from "./GenreList";
import { GenreType } from "../App";
import GameList from "./GameList";
import { Platform } from "../App";

interface Props {
  genreList: GenreType[];
  platformList: Platform[];
}

const Main = ({ genreList, platformList }: Props) => {
  return (
    <Fragment>
      <div className="d-flex gap-8">
        <GenreList genreList={genreList} />
        <GameList platformList={platformList} />
      </div>
    </Fragment>
  );
};

export default Main;
