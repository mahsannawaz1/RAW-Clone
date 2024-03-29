import { Fragment } from "react";
import "./Game.css";

import Platform from "./Platform";
import { GameType } from "../interfaces/GameType";
interface Props {
  game: GameType;
}

const Game = ({
  game: { name, metacritic, background_image, parent_platforms },
}: Props) => {
  return (
    <Fragment>
      <div className="card p-0 border-0 bg">
        {background_image ? (
          <img
            className="card-img-top game-img"
            src={background_image}
            alt="Card image cap"
          />
        ) : (
          <div className="card-img-top bg game-img"></div>
        )}

        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2">
              {parent_platforms.map(({ platform: { id, slug } }) => (
                <Platform key={id} platformName={slug ?? ""} />
              ))}
            </div>
            <div className="metacritic px-1">{metacritic ?? "No Critics"}</div>
          </div>
          <h3 className="mt-1 mb-0">{name}</h3>
        </div>
      </div>
    </Fragment>
  );
};

export default Game;
