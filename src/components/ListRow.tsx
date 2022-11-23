import React from "react";
import { MOVIE_DB_IMG_URL } from "../util/constants";
import { MovieApiInteface, TvApiInteface } from "../util/type";
import { MdOutlineDoubleArrow } from "react-icons/md";
import MovieBox from "./MovieBox";

export default function ListRow({
  item,
  title,
}: {
  item: MovieApiInteface[] | TvApiInteface[];
  title: string;
}) {
  return (
    <div
      className="flex flex-col text-bg_clr my-5 mx-3"
      style={{ fontFamily: "Oswald" }}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-extrabold ml-4 sm:text-2xl lg:text-4xl ">
          {title}
        </h1>
        <button className="flex items-center justify-center text-xs sm:text-base lg:text-lg">
          <h1>See More</h1>
          <MdOutlineDoubleArrow className="mt-1" />
        </button>
      </div>
      <div className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide">
        {item.map((val, index) => {
          return <MovieBox key={index} id={val.id} img={val.poster_path} />;
        })}
      </div>
    </div>
  );
}
