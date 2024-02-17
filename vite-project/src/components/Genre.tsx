import { Fragment } from "react";
import "./Genre.css";
import { GenreType } from "../interfaces/GenreType";

interface Props {
  id: number;
  name: string;
  image: string;
  handleChangeGenre: (obj: GenreType) => void;
}

const Genre = ({ id, name, image, handleChangeGenre }: Props) => {
  return (
    <Fragment>
      <div className="d-flex align-items-center genre">
        <img src={image} alt="" className="genre-img rounded" />

        <p
          className="mx-2 genre-name"
          onClick={() => handleChangeGenre({ id: id, name: name })}
        >
          {name}
        </p>
      </div>
    </Fragment>
  );
};

export default Genre;
