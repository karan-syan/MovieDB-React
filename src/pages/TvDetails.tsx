import { url } from "inspector";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoTime } from "react-icons/io5";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import Name from "../components/Name";
import { CallTvDetails } from "../redux/action/ActionCallApi";
import { ApplicationState } from "../redux/root/rootReducer";
import { MOVIE_DB_IMG_URL } from "../utils/url";
import { BiSearch } from "react-icons/bi";
import { iteratorSymbol } from "immer/dist/internal";

export default function TvDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tvshows = useSelector(
    (state: ApplicationState) => state.details.TvDetails
  );
  const { id } = useParams();
  useEffect(() => {
    dispatch(
      CallTvDetails.request({
        url: "/tv",
        id: id,
      })
    );
  }, [id]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage:
          "url(" + MOVIE_DB_IMG_URL + tvshows.Data.backdrop_path + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <div
        className=" w-full h-full"
        style={{ backdropFilter: "blur(10px) brightness(60%)" }}
      >
        <div className="flex justify-between" style={{ height: "7.5vh" }}>
          <Name />
          <div className="flex items-center justify-between mx-2 ml-10 px-2 py-2 sm:mx-0 md:mx-3">
            <BiSearch
              className="text-xl sm:text-xl"
              onClick={() => {
                navigate("/search");
              }}
            />
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row md:justify-between md:items-center overflow-y-auto md:overflow-y-hidden"
          style={{ height: "92.5vh" }}
        >
          <div className="md:w-1/4">
            <img
              className="w-6/12 mx-auto my-auto rounded-xl md:w-full md:ml-7 md:rounded-3xl drop-shadow-2xl shadow-2xl"
              src={MOVIE_DB_IMG_URL + tvshows.Data.poster_path}
            />
          </div>
          <div className="flex mt-5 justify-center md:w-2/6 flex-col items-center md:overflow-y-auto md:justify-start md:items-start">
            <h1 className="text-xl md:text-3xl font-extrabold">
              {tvshows.Data.name}
            </h1>
            <h1 className="text-sm md:text-base opacity-70">
              {tvshows.Data.original_language} | {tvshows.Data.status} |{" "}
              {tvshows.Data.first_air_date}
            </h1>
            <h1 className="text-sm md:text-base opacity-70 flex items-center">
              Ep {tvshows.Data.last_episode_to_air.episode_number} |
              <IoTime className="mx-1" />
              {tvshows.Data.episode_run_time} min
            </h1>
            <button className="bg-pink-400 flex items-center px-2 py-1 rounded-3xl md:text-base">
              WatchList
              <BsBookmarkHeartFill className="ml-2" />
            </button>
            <div className="mx-2 mt-2">
              <h1 className="text-lg">Synopsis:</h1>
              <h1 className="opacity-70 text-sm">{tvshows.Data.overview}</h1>
            </div>
            <div className="w-full  mt-2 ">
              <h1 className="text-lg mx-2">Production Companies:</h1>
              <h1 className="mx-2 opacity-70 text-sm">
                {tvshows.Data.production_companies.map(
                  (item, index) => item.name + " "
                )}
              </h1>
              <div className="w-full  mt-2 ">
                <h1 className="text-lg mx-2">Genres:</h1>
                <h1 className="mx-2 opacity-70 text-sm">
                  {tvshows.Data.genres.map((item) => item.name + ", ")}
                </h1>
              </div>
              <div className="w-full  mt-2 ">
                <h1 className="text-lg mx-2">Spoken Language:</h1>
                <h1 className="mx-2 opacity-70 text-sm">
                  {tvshows.Data.spoken_languages.map(
                    (item) => item.english_name
                  )}
                </h1>
              </div>
              <div className="w-full  mt-2 ">
                <h1 className="text-lg mx-2">Networks:</h1>
                <div className="mx-2 opacity-70 text-sm flex items-end overflow-x-auto">
                  {tvshows.Data.networks.map((item) => {
                    return (
                      <div className="rounded-full mx-2 w-1/5 h-1/5 bottom-0">
                        <img src={MOVIE_DB_IMG_URL + item.logo_path} />
                        <h1 className="text-center">{item.name}</h1>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:overflow-y-auto"></div>
        </div>
      </div>
    </div>
  );
}
