import { Fragment, useRef } from "react";
import "./GameList.css";

import Game from "./Game";
import { PlatformType } from "../interfaces/PlatformType";
import { GameType } from "../interfaces/GameType";

interface Props {
  platformList: PlatformType[];
  gameList: GameType[];
  selectedGenre: { id: number; name: string };
  currentPlatform: PlatformType;
  handleChangePlatform: (obj: PlatformType) => void;

  handleChangeOrderBy: (str: string) => void;
}

const GameList = ({
  platformList,
  gameList,
  selectedGenre,
  currentPlatform,
  handleChangePlatform,

  handleChangeOrderBy,
}: Props) => {
  const platformRef = useRef<HTMLSelectElement>(null);
  const orderByRef = useRef<HTMLSelectElement>(null);
  return (
    <Fragment>
      <div className="col-10 px-0">
        <h1>
          {currentPlatform.name} {selectedGenre.name} Games
        </h1>
        <div className="d-flex dropdowns gap-3 mt-2">
          <div className="dropdown-platform">
            <select
              ref={platformRef}
              onChange={() => {
                const platform = platformList.find(
                  (platform) =>
                    platform.id === parseInt(platformRef.current!.value)
                );

                handleChangePlatform({
                  id: platform?.id ?? 0,
                  name: platform?.name ?? "",
                });
              }}
              className="p-2 d-flex"
              name=""
              id=""
            >
              <option hidden>Platforms</option>
              {platformList.length !== 0 &&
                platformList.map(({ id, name }) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
            </select>
          </div>
          <div className="dropdown-orderBy d-flex align-items-center">
            <label htmlFor="" className="font-weight-bold">
              Order by:
            </label>
            <select
              ref={orderByRef}
              onChange={(event) => handleChangeOrderBy(event.target.value)}
              className="p-2 d-flex"
              name=""
              id=""
            >
              <option value="">Relevance</option>
              <option value="-date">Date Added</option>
              <option value="name">Name</option>
              <option value="-released">Released Date</option>
              <option value="-metacritic">Popularity</option>
              <option value="-rating">Average Rating</option>
            </select>
          </div>
        </div>
        <div className="games-grid gap-4 w-100 mt-4">
          {gameList.length !== 0 ? (
            gameList.map((game) => <Game key={game.id} game={game} />)
          ) : (
            <Fragment>
              <div className="card p-0 border-0  bg">
                <div className="card-img-top bg-card game-img"></div>
                <div className="card-body">
                  <div className="fake-row mb-2"></div>
                  <div className="fake-row mb-2"></div>
                  <div className="fake-row"></div>
                </div>
              </div>
              <div className="card p-0 border-0  bg">
                <div className="card-img-top bg-card game-img"></div>
                <div className="card-body">
                  <div className="fake-row mb-2"></div>
                  <div className="fake-row mb-2"></div>
                  <div className="fake-row"></div>
                </div>
              </div>
              <div className="card p-0 border-0  bg">
                <div className="card-img-top bg-card game-img"></div>
                <div className="card-body">
                  <div className="fake-row mb-2"></div>
                  <div className="fake-row mb-2"></div>
                  <div className="fake-row"></div>
                </div>
              </div>
              <div className="card p-0 border-0  bg">
                <div className="card-img-top bg-card game-img"></div>

                <div className="card-body">
                  <div className="fake-row mb-2"></div>
                  <div className="fake-row mb-2"></div>
                  <div className="fake-row"></div>
                </div>
              </div>
              <div className="card p-0 border-0  bg">
                <div className="card-img-top bg-card game-img"></div>

                <div className="card-body">
                  <div className="fake-row mb-2"></div>
                  <div className="fake-row mb-2"></div>
                  <div className="fake-row"></div>
                </div>
              </div>
              <div className="card p-0 border-0  bg">
                <div className="card-img-top bg-card game-img"></div>

                <div className="card-body">
                  <div className="fake-row mb-2"></div>
                  <div className="fake-row mb-2"></div>
                  <div className="fake-row"></div>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default GameList;
