import { Fragment, useRef } from "react";
import "./GameList.css";
import { PlatformType, GameType } from "../App";
import Game from "./Game";

interface Props {
  platformList: PlatformType[];
  gameList: GameType[];
  selectedGenre: { id: number; name: string };
  currentPlatform: PlatformType;
  handleChangePlatform: (obj: PlatformType) => void;
}

const GameList = ({
  platformList,
  gameList,
  selectedGenre,
  currentPlatform,
  handleChangePlatform,
}: Props) => {
  const platformRef = useRef<HTMLSelectElement>(null);
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
          <div className="dropdown-orderBy">
            <select className="p-2 d-flex" name="" id="">
              <option>Order By: Relevance</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
