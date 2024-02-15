import React, { Fragment } from "react";
import { GenreType } from "../App";
import Genre from "./Genre";

interface Props {
  genreList: GenreType[];
}

const GenreList = ({ genreList }: Props) => {
  return (
    <Fragment>
      <div className="col">
        <div className="d-flex align-items-center mt-4">
          <h3 className="mb-3">Genres</h3>
        </div>
        {genreList.length > 0 &&
          genreList.map(({ name, image_background }) => (
            <Genre key={name} name={name} image={image_background} />
          ))}
      </div>
    </Fragment>
  );
};

export default GenreList;
