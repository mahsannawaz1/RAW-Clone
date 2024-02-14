import { Fragment } from "react";
import GenreList from "./GenreList";
import { GenreType } from "../App";

interface Props {
  genreList: GenreType[];
}

const Main = ({ genreList }: Props) => {
  return (
    <Fragment>
      <GenreList genreList={genreList} />
    </Fragment>
  );
};

export default Main;
