import { useNavigate } from "react-router-dom";
import { IMovie_distructing } from "../utils/ApiDistruct";
import { IMovie } from "../utils/type";
import { MOVIE_DB_IMG_URL } from "../utils/url";

export default function MovieBox({ item }: { item: IMovie }) {
  const navigate = useNavigate();
  const { I_name, poster_path, id } = IMovie_distructing(item);

  return (
    <div
      className="text-bg_clr p-1 w-1/3 snap-center rounded-sm sm:rounded-xl inline-block overflow-hidden md:w-1/5 cursor-pointer h-auto text-xl lg:w-1/6"
      onClick={() => {
        I_name
          ? navigate(`/tv/details/${id}`)
          : navigate(`/movie/details/${id}`);
      }}
    >
      <img
        className="rounded-lg sm:rounded-2xl hover:scale-110 transition-all duration-500"
        src={`${MOVIE_DB_IMG_URL}${poster_path}`}
        alt="..."
      />
    </div>
  );
}
