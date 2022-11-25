import React from "react";
import { MOVIE_DB_IMG_URL } from "../util/url";
import { IMovie } from "../util/type";
import { MdOutlineDoubleArrow } from "react-icons/md";
import MovieBox from "./MovieBox";

export default function ListRow({
  item,
  title,
}: {
  item: IMovie[];
  title: string;
}) {
  return (
    <div
      className="flex flex-col my-5 mx-3 mb-8"
      style={{ fontFamily: "Roboto Condensed" }}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-extrabold ml-4 sm:text-2xl lg:text-3xl mb-3">
          {title}
        </h1>
        <button className="flex items-center justify-center text-xs sm:text-base lg:text-lg">
          <h1>See More</h1>
          <MdOutlineDoubleArrow className="mt-1" />
        </button>
      </div>
      <div className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide">
        {item.map((val, index) => {
          return <MovieBox key={index} item={val} />;
        })}
      </div>
    </div>
  );
}
