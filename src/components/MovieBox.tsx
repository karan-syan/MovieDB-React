import { useNavigate } from "react-router-dom";
import { IMovie } from "../util/type";
import { MOVIE_DB_IMG_URL } from "../util/url";

export default function MovieBox({ item }: { item: IMovie }) {
  const navigate = useNavigate();

  return (
    <div
      className="text-bg_clr p-1 w-1/3 rounded-sm sm:rounded-xl inline-block overflow-hidden md:w-1/5 cursor-pointer h-auto text-xl lg:w-1/6"
      onClick={() => {
        item.name
          ? navigate(`/tv/details/:${item.id}`)
          : navigate(`/movie/details/:${item.id}`);
      }}
    >
      <img
        className="rounded-lg sm:rounded-2xl hover:scale-110 transition-all duration-500 "
        src={`${MOVIE_DB_IMG_URL}${item.poster_path}`}
        alt="..."
      />
    </div>
  );
}
