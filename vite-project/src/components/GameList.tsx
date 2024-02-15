import React, { Fragment, useEffect, useState } from "react";
import "./GameList.css";
import { PlatformType, GameType } from "../App";
import Game from "./Game";

interface Props {
  platformList: PlatformType[];
  gameList: GameType[];
  selectedGenre: { id: number; name: string };
}

const GameList = ({ platformList, gameList, selectedGenre }: Props) => {
  const [fakeCardVisibility, setfakeCardVisibility] = useState(true);
  useEffect(() => {
    fakeCardVisibility
      ? setfakeCardVisibility(false)
      : setfakeCardVisibility(true);
    console.log("call");
  }, [gameList]);
  return (
    <Fragment>
      <div className="col-10 px-0">
        <h1>{selectedGenre.name} Games</h1>
        <div className="d-flex dropdowns gap-3 mt-2">
          <div className="dropdown-platform">
            <select
              defaultValue="Platforms"
              className="p-2 d-flex"
              name=""
              id=""
            >
              <option hidden>Platforms</option>
              {platformList.length !== 0 &&
                platformList.map(({ id, name }) => (
                  <option key={id} value={name}>
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
          {gameList.length == 0 && (
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
          {gameList.length !== 0 &&
            gameList.map((game) => <Game key={game.id} game={game} />)}
        </div>
      </div>
    </Fragment>
  );
};

export default GameList;
