import React, { Fragment } from "react";
import "./Genre.css";
interface Props {
  name: string;
  image: string;
}

const Genre = ({ name, image }: Props) => {
  return (
    <Fragment>
      <div className="d-flex align-items-center genre">
        <img src={image} alt="" className="genre-img rounded" />

        <p className="mx-2 genre-name">{name}</p>
      </div>
    </Fragment>
  );
};

export default Genre;
