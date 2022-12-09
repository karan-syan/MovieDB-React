import React from "react";
import { MOVIE_DB_IMG_URL } from "../utils/url";

export default function PosterCard({ Poster_Path }: { Poster_Path: string }) {
  return (
    <div className="md:w-1/4">
      <img
        alt=""
        className="w-6/12 mx-auto rounded-xl md:w-full md:ml-7 md:rounded-3xl drop-shadow-2xl shadow-2xl"
        src={MOVIE_DB_IMG_URL + Poster_Path}
      />
    </div>
  );
}
