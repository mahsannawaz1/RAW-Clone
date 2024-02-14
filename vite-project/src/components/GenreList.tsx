import React, { Fragment } from "react";
import { GenreType } from "../App";
import Genre from "./Genre";

interface Props {
  genreList: GenreType[];
}

const GenreList = ({ genreList }: Props) => {
  return (
    <Fragment>
      <h3 className="mb-3">Genres</h3>
      {genreList.length > 0 &&
        genreList.map(({ name, image_background }) => (
          <Genre key={name} name={name} image={image_background} />
        ))}
    </Fragment>
  );
};

export default GenreList;
