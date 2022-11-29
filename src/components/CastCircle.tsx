import React from "react";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";
import { ICast } from "../utils/type";
import { MOVIE_DB_IMG_URL } from "../utils/url";

export default function CastCircle({ item }: { item: ICast }) {
  const navigate = useNavigate();
  return (
    <div
      className="inline-block mx-2 text-center "
      onClick={() => {
        navigate(`/people/${item.id}`);
      }}
    >
      <Avatar
        size="100"
        round={true}
        src={`${MOVIE_DB_IMG_URL}${item.profile_path}`}
      />
      <h1 className="font-extrabold line-clamp-1">{item.name}</h1>
      <h1 className="opacity-60 text-xs line-clamp-1 ">{item.character}</h1>
    </div>
  );
}
