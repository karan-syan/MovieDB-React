import { useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import CastCircle from "../components/CastCircle";
import ListRow from "../components/ListRow";
import Name from "../components/Name";
import SeasonList from "../components/SeasonList";
import {
  CallCast,
  CallMovies,
  CallTvDetails,
} from "../redux/action/ActionCallApi";
import { ApplicationState } from "../redux/root/rootReducer";
import { MOVIE_DB_IMG_URL } from "../utils/url";

export default function TvDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const elementForScroll = useRef<HTMLDivElement>(null);

  const tvshows = useSelector(
    (state: ApplicationState) => state.details.TvDetails
  );
  const Recommended = useSelector((state: ApplicationState) => state.tv.Tvs);
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
    elementForScroll.current?.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);

  return (
    <div
      className="flex justify-center items-center"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {tvshows.loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
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
              <div
                className="flex mt-5 justify-center md:w-2/3 flex-col items-center md:h-full md:overflow-auto md:justify-start md:items-start"
                ref={elementForScroll}
              >
                <h1 className="text-xl md:text-3xl font-extrabold text-center">
                  {tvshows.Data.name}
                </h1>
                <h1 className="text-sm italic w-4/5 text-center md:w-full md:text-start opacity-60">
                  {tvshows.Data.tagline}
                </h1>
                <h1 className="text-sm md:text-base opacity-70">
                  {tvshows.Data.original_language} | {tvshows.Data.status} |{" "}
                  {tvshows.Data.first_air_date}
                </h1>
                <h1 className="text-sm md:text-base opacity-70 flex items-center">
                  Ep {tvshows.Data.number_of_episodes} |
                  <IoTime className="mx-1" />
                  {tvshows.Data.episode_run_time} min |{" "}
                  {tvshows.Data.vote_average} | {tvshows.Data.type}
                </h1>
                <button className="bg-pink-400 flex items-center px-2 py-1 rounded-3xl md:text-base">
                  WatchList
                  <BsBookmarkHeartFill className="ml-2" />
                </button>
                <div className="mx-2 mt-2">
                  <h1 className="text-lg">Synopsis:</h1>
                  <h1 className="opacity-70 text-sm">
                    {tvshows.Data.overview}
                  </h1>
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
                    <div className="mx-2 opacity-70 text-sm whitespace-nowrap items-end overflow-x-auto">
                      {tvshows.Data.networks.map((item) => {
                        return (
                          <div className="rounded-full inline-block mx-2 w-1/5 h-1/5 bottom-0">
                            <img src={MOVIE_DB_IMG_URL + item.logo_path} />
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
                  <SeasonList tvshows={tvshows.Data} />
                  <div className="w-full mt-2">
                    <h1 className="text-lg mx-2">Recommended:</h1>
                    <ListRow item={Recommended.Data} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
