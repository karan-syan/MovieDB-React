import React from "react";
import { MOVIE_DB_IMG_URL } from "../../utils/url";

interface season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export default function SeasonList({
  item,
  TvName,
}: {
  item: season[];
  TvName: string;
}) {
  return (
    <div className="w-full  mt-2 ">
      <h1 className="text-lg mx-2">Seasons:</h1>
      <div className="overflow-auto whitespace-nowrap snap-mandatory snap-x">
        {item.map((item, index) => {
          return (
            <div
              key={index}
              className="inline-block mx-3 m-auto snap-center h-full"
            >
              <div className="flex items-center h-full">
                <div className=" w-1/4 md:w-1/5 h-full ">
                  <img
                    className=" object-cover h-full"
                    alt=""
                    src={`${MOVIE_DB_IMG_URL}${item.poster_path}`}
                  />
                </div>
                <div className="text-xs mx-2">
                  <h1>Name: {item.name}</h1>
                  <h1>Season: {item.season_number}</h1>
                  <h1>Total Episodes: {item.episode_count}</h1>
                  <h1 className="hidden md:flex">
                    {item.name} of {TvName} premiered on {item.air_date}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
