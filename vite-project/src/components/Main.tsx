import { Fragment } from "react";
import GenreList from "./GenreList";
import GameList from "./GameList";
import { GenreType, GameType, PlatformType } from "../App";

interface Props {
  genreList: GenreType[];
  platformList: PlatformType[];
  gameList: GameType[];
}

const Main = ({ genreList, platformList, gameList }: Props) => {
  return (
    <Fragment>
      <div className="d-flex gap-8">
        <GenreList genreList={genreList} />
        <GameList platformList={platformList} gameList={gameList} />
      </div>
    </Fragment>
  );
};

export default Main;
