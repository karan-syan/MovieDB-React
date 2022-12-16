import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddRecent } from "../firebase/firestore";
import { ApplicationState } from "../redux/root/rootReducer";
import { MOVIE_DB_IMG_URL } from "../utils/url";

export default function MovieBox({
  id,
  img,
  varient,
  time,
}: {
  id: string;
  img: string;
  time?: string;
  varient: "movies" | "shows";
}) {
  const navigate = useNavigate();
  const userdetails = useSelector(
    (state: ApplicationState) => state.Userdetails
  );
  return (
    <div
      className={`text-bg_clr p-1 w-1/3 snap-center rounded-sm sm:rounded-xl inline-block overflow-hidden md:w-1/5 cursor-pointer h-auto text-xl lg:w-1/6 ${
        time ? "mt-3" : ""
      }`}
      onClick={() => {
        if (userdetails) {
          AddRecent(id, img, varient);
          varient === "movies"
            ? navigate(`/movie/details/${id}`)
            : navigate(`/tv/details/${id}`);
        } else {
          navigate("/signin");
        }
      }}
    >
      <img
        className="rounded-lg sm:rounded-2xl hover:scale-110 transition-all duration-500"
        src={`${MOVIE_DB_IMG_URL}${img}`}
        alt="..."
      />
      {time ? (
        <h1 className="mt-3" style={{ marginLeft: "25%" }}>
          {time}
        </h1>
      ) : null}
    </div>
  );
}
