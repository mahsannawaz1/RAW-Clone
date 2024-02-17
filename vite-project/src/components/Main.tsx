import { Fragment } from "react";
import GenreList from "./GenreList";
import GameList from "./GameList";
import { GenreType } from "../interfaces/GenreType";
import { PlatformType } from "../interfaces/PlatformType";
import { GameType } from "../interfaces/GameType";

interface Props {
  genreList: GenreType[];
  platformList: PlatformType[];
  gameList: GameType[];
  selectedGenre: GenreType;
  handleChangeGenre: (obj: GenreType) => void;
  currentPlatform: PlatformType;
  handleChangePlatform: (obj: PlatformType) => void;
  handleChangeOrderBy: (str: string) => void;
}

const Main = ({
  genreList,
  platformList,
  gameList,
  handleChangeGenre,
  selectedGenre,
  currentPlatform,
  handleChangePlatform,
  handleChangeOrderBy,
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
          handleChangePlatform={handleChangePlatform}
          currentPlatform={currentPlatform}
          handleChangeOrderBy={handleChangeOrderBy}
        />
      </div>
    </Fragment>
  );
};

export default Main;
