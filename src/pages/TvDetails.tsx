import { useEffect, useRef } from "react";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import CastList from "../components/CastList";
import Context from "../components/Context";
import DetailsHeader from "../components/DetailsHeader";
import ListRow from "../components/ListRow";
import PosterCard from "../components/PosterCard";
import NetworkList from "../components/TvDetail/NetworkList";
import SeasonList from "../components/TvDetail/SeasonList";
import { CallCast } from "../redux/People/action";
import { CallRecommend } from "../redux/Recommend/action";
import { ApplicationState } from "../redux/root/rootReducer";
import { CallTvDetails } from "../redux/Tv/action";
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
        url: `/tv/${id}`,
      })
    );
    dispatch(
      CallCast.request({
        url: `/tv/${id}/credits`,
      })
    );
    dispatch(
      CallRecommend.request({
        url: `tv/${id}/recommendations`,
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
              <PosterCard Poster_Path={Poster_Path} />
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
                <Context title="Synopsis" subtitle={overview} />
                <Context
                  title="Production Companies"
                  subtitle={production_companies
                    .map((item) => " " + item.name)
                    .toString()}
                />
                <Context
                  title="Genres"
                  subtitle={genres.map((item) => " " + item.name).toString()}
                />
                <Context
                  title="Spoken Language"
                  subtitle={spoken_languages
                    .map((item) => " " + item.english_name)
                    .toString()}
                />
                <NetworkList item={networks} />
                <CastList data={tvCast.Data} />
                <SeasonList item={seasons} TvName={TvName} />
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
      )}
    </div>
  );
}
