import React, { Fragment } from "react";
import { GenreType } from "../App";
import Genre from "./Genre";

interface Props {
  genreList: GenreType[];
  handleChangeGenre: (obj: GenreType) => void;
}

const GenreList = ({ genreList, handleChangeGenre }: Props) => {
  return (
    <Fragment>
      <div className="col">
        <div className="d-flex align-items-center mt-4">
          <h3 className="mb-3">Genres</h3>
        </div>
        {genreList.length > 0 &&
          genreList.map(({ id, name, image_background }) => (
            <Genre
              key={id}
              id={id}
              name={name}
              image={image_background ?? ""}
              handleChangeGenre={handleChangeGenre}
            />
          ))}
      </div>
    </Fragment>
  );
};

export default GenreList;
