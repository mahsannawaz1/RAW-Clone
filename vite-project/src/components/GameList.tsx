import React, { Fragment } from "react";
import "./GameList.css";
import { Platform } from "../App";
import Game from "./Game";

interface Props {
  platformList: Platform[];
}

const GameList = ({ platformList }: Props) => {
  return (
    <Fragment>
      <div className="col-10 px-0">
        <h1>Selected Genre Games</h1>
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
        <Game />
      </div>
    </Fragment>
  );
};

export default GameList;