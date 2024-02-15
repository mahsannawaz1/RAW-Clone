import React, { Fragment } from "react";
import "./Game.css";

const Game = () => {
  return (
    <Fragment>
      <div className="games-grid gap-4 w-100 mt-4">
        <div className="card p-0 border-0 bg">
          <img
            className="card-img-top"
            src="https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
            alt="Card image cap"
          />
          <div className="card-body ">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card   p-0 border-0 bg">
          <img
            className="card-img-top"
            src="https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
            alt="Card image cap"
          />
          <div className="card-body ">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card   p-0 border-0 bg">
          <img
            className="card-img-top"
            src="https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
            alt="Card image cap"
          />
          <div className="card-body ">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card   p-0 border-0 bg">
          <img
            className="card-img-top"
            src="https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
            alt="Card image cap"
          />
          <div className="card-body ">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Game;
