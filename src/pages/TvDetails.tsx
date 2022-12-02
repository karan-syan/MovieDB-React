import { useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import CastCircle from "../components/CastCircle";
import DetailsHeader from "../components/DetailsHeader";
import ListRow from "../components/ListRow";
import Name from "../components/Name";
import {
  CallCast,
  CallMovies,
  CallRecommend,
  CallTvDetails,
} from "../redux/action/ActionCallApi";
import { ApplicationState } from "../redux/root/rootReducer";
import { TvDetails_Distructing } from "../utils/ApiDistruct";
import { MOVIE_DB_IMG_URL } from "../utils/url";

export default function TvDetails() {
  const dispatch = useDispatch();
  const elementForScroll = useRef<HTMLDivElement>(null);

  const tvshows = useSelector(
    (state: ApplicationState) => state.details.TvDetails
  );
  const Recommended = useSelector(
    (state: ApplicationState) => state.tv.TvRecommend
  );
  const tvCast = useSelector((state: ApplicationState) => state.details.TvCast);
  const { id } = useParams();
  useEffect(() => {
    dispatch(
      CallTvDetails.request({
        url: "/tv",
        id: id,
      })
    );
    dispatch(
      CallMovies.request({
        url: "tv",
        id: id,
        NewData: true,
        page: 1,
      })
    );
    dispatch(
      CallCast.request({
        url: "/tv",
        id: id,
        afterIdurl: "/credits",
      })
    );
    dispatch(
      CallRecommend.request({
        url: "tv",
        id: id,
        page: 1,
        NewData: true,
      })
    );
    elementForScroll.current?.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);

  const {
    Poster_Path,
    TvName,
    backdrop_path,
    first_air_date,
    genres,
    original_language,
    status,
    overview,
    production_companies,
    type,
    tagline,
    networks,
    spoken_languages,
    voteAvg,
    episode_run_time,
    number_of_episodes,
    seasons,
  } = TvDetails_Distructing(tvshows.Data);

  return (
    <div
      className="flex justify-center items-center"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {tvshows.loading ? (
        <BarLoader color="#36d7b7" />
      ) : (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundImage: "url(" + MOVIE_DB_IMG_URL + backdrop_path + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
          }}
        >
          <div
            className=" w-full h-full"
            style={{ backdropFilter: "blur(10px) brightness(60%)" }}
          >
            <DetailsHeader />
            <div
              className="flex flex-col md:flex-row md:justify-between md:items-center overflow-y-auto md:overflow-y-hidden"
              style={{ height: "92.5vh" }}
            >
              <div className="md:w-1/4">
                <img
                  alt=""
                  className="w-6/12 mx-auto my-auto rounded-xl md:w-full md:ml-7 md:rounded-3xl drop-shadow-2xl shadow-2xl"
                  src={MOVIE_DB_IMG_URL + Poster_Path}
                />
              </div>
              <div
                className="flex mt-5 justify-center pb-6 md:w-2/3 flex-col items-center md:h-full md:overflow-auto md:justify-start md:items-start"
                ref={elementForScroll}
              >
                <h1 className="text-xl md:text-3xl font-extrabold text-center">
                  {TvName}
                </h1>
                <h1 className="text-sm italic w-4/5 text-center md:w-full md:text-start opacity-60">
                  {tagline}
                </h1>
                <h1 className="text-sm md:text-base opacity-70">
                  {original_language} | {status} | {first_air_date}
                </h1>
                <h1 className="text-sm md:text-base opacity-70 flex items-center">
                  Ep {number_of_episodes} |
                  <IoTime className="mx-1" />
                  {episode_run_time} min | {voteAvg} | {type}
                </h1>
                <button className="bg-pink-400 flex items-center px-2 py-1 rounded-3xl md:text-base">
                  WatchList
                  <BsBookmarkHeartFill className="ml-2" />
                </button>
                <div className="mx-2 mt-2">
                  <h1 className="text-lg">Synopsis:</h1>
                  <h1 className="opacity-70 text-sm">{overview}</h1>
                </div>
                <div className="w-full  mt-2 ">
                  <h1 className="text-lg mx-2">Production Companies:</h1>
                  <h1 className="mx-2 opacity-70 text-sm">
                    {production_companies.map((item) => item.name + " ")}
                  </h1>
                  <div className="w-full  mt-2 ">
                    <h1 className="text-lg mx-2">Genres:</h1>
                    <h1 className="mx-2 opacity-70 text-sm">
                      {genres.map((item) => item.name + ", ")}
                    </h1>
                  </div>
                  <div className="w-full  mt-2 ">
                    <h1 className="text-lg mx-2">Spoken Language:</h1>
                    <h1 className="mx-2 opacity-70 text-sm">
                      {spoken_languages.map((item) => item.english_name)}
                    </h1>
                  </div>
                  <div className="w-full  mt-2 ">
                    <h1 className="text-lg mx-2">Networks:</h1>
                    <div className="mx-2 opacity-70 text-sm whitespace-nowrap items-end overflow-x-auto">
                      {networks.map((item) => {
                        return (
                          <div className="rounded-full inline-block mx-2 w-1/5 h-1/5 bottom-0">
                            <img
                              src={MOVIE_DB_IMG_URL + item.logo_path}
                              alt=""
                            />
                            <h1 className="text-center">{item.name}</h1>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <h1 className="text-lg mx-2">Casts:</h1>
                    <div className="overflow-auto whitespace-nowrap">
                      {tvCast.Data.map((item, index) => {
                        return <CastCircle item={item} key={index} />;
                      })}
                    </div>
                  </div>
                  <h1 className="text-lg mx-2">Seasons:</h1>
                  <div className="overflow-auto whitespace-nowrap snap-mandatory snap-x">
                    {seasons.map((item, index) => {
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
                                {item.name} of {TvName} premiered on{" "}
                                {item.air_date}
                              </h1>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {Recommended.Data.length === 0 ? null : (
                    <div className="w-full mt-2">
                      <h1 className="text-lg mx-2">Recommended:</h1>
                      <ListRow item={Recommended.Data} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
