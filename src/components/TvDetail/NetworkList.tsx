import React from "react";
import { MOVIE_DB_IMG_URL } from "../../utils/url";
interface network {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}

export default function NetworkList({ item }: { item: network[] }) {
  return (
    <div className="w-full  mt-2 ">
      <h1 className="text-lg mx-2">Networks:</h1>
      <div className="mx-2 opacity-70 text-sm whitespace-nowrap items-end overflow-x-auto">
        {item.map((item, index) => {
          return (
            <div
              className="rounded-full inline-block mx-2 w-1/5 h-1/5 bottom-0"
              key={index}
            >
              <img src={MOVIE_DB_IMG_URL + item.logo_path} alt="" />
              <h1 className="text-center">{item.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
