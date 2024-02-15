import { Fragment } from "react";
import GenreList from "./GenreList";
import GameList from "./GameList";
import { GenreType, GameType, PlatformType } from "../App";

interface Props {
  genreList: GenreType[];
  platformList: PlatformType[];
  gameList: GameType[];
  selectedGenre: { id: number; name: string };
  handleChangeGenre: (obj: GenreType) => void;
}

const Main = ({
  genreList,
  platformList,
  gameList,
  handleChangeGenre,
  selectedGenre,
}: Props) => {
  return (
    <Fragment>
      <div className="d-flex gap-8">
        <GenreList
          genreList={genreList}
          handleChangeGenre={handleChangeGenre}
        />
        <GameList
          platformList={platformList}
          gameList={gameList}
          selectedGenre={selectedGenre}
        />
      </div>
    </Fragment>
  );
};

export default Main;
