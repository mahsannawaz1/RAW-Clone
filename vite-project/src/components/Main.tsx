import { Fragment } from "react";
import GenreList from "./GenreList";
import GameList from "./GameList";
import { GenreType, GameType, PlatformType } from "../App";

interface Props {
  genreList: GenreType[];
  platformList: PlatformType[];
  gameList: GameType[];
  selectedGenre: GenreType;
  handleChangeGenre: (obj: GenreType) => void;
  currentPlatform: PlatformType;
  handleChangePlatform: (obj: PlatformType) => void;
}

const Main = ({
  genreList,
  platformList,
  gameList,
  handleChangeGenre,
  selectedGenre,
  currentPlatform,
  handleChangePlatform,
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
        />
      </div>
    </Fragment>
  );
};

export default Main;
