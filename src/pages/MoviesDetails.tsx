import { Input } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import CastList from "../components/CastList";
import Comment from "../components/comment/Comment";
import CommentData from "../components/comment/CommentData";
import Context from "../components/Context";
import DetailsHeader from "../components/DetailsHeader";
import ListRow from "../components/ListRow";
import PosterCard from "../components/PosterCard";
import { uploadplaylist } from "../firebase/firestore";
import { CallMovieDetails } from "../redux/Movie/action";
import { CallCast } from "../redux/People/action";
import { CallRecommend } from "../redux/Recommend/action";
import { ApplicationState } from "../redux/root/rootReducer";
import { MOVIE_DB_IMG_URL } from "../utils/url";
export default function MoviesDetails() {
  const dispatch = useDispatch();
  const elementForScroll = useRef<HTMLDivElement>(null);
  const [playlistname, setplaylistname] = useState<string>("");
  const MovieDetails = useSelector(
    (state: ApplicationState) => state.details.MovieDetails
  );
  const Recommended = useSelector(
    (state: ApplicationState) => state.movie.MovieRecommend
  );
  const tvCast = useSelector((state: ApplicationState) => state.details.TvCast);
  const { id } = useParams();
  useEffect(() => {
    dispatch(
      CallMovieDetails.request({
        url: `movie/${id}`,
      })
    );
    dispatch(
      CallRecommend.request({
        url: `movie/${id}/recommendations`,
        NewData: true,
        page: 1,
      })
    );
    dispatch(
      CallCast.request({
        url: `movie/${id}/credits`,
      })
    );
    elementForScroll.current?.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);

  const {
    poster_path,
    backdrop_path,
    release_date,
    genres,
    original_language,
    status,
    overview,
    runtime,
    budget,
    revenue,
    production_companies,
    tagline,
    spoken_languages,
    title,
    vote_average,
  } = MovieDetails.Data;
  return (
    <div
      className="flex justify-center items-center"
      style={{
        width: "100%",
        height: "100vh",
        maxWidth: "1920px",
        margin: "0px auto",
        float: "none",
      }}
    >
      {MovieDetails.loading ? (
        <BarLoader color="#36d7b7" />
      ) : (
        <div
          style={{
            maxWidth: "1920px",
            margin: "0px auto",
            float: "none",
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
              className="flex flex-col md:flex-row md:justify-between overflow-y-auto md:overflow-y-hidden"
              style={{ height: "92.5vh" }}
            >
              <PosterCard Poster_Path={poster_path} />
              <div
                className="flex mt-5 justify-center pb-3 md:w-2/3 flex-col items-center md:h-full md:overflow-auto md:justify-start md:items-start"
                ref={elementForScroll}
              >
                <h1 className="text-xl md:text-3xl font-extrabold text-center">
                  {title}
                </h1>
                <h1 className="text-sm italic w-4/5 text-center md:w-full md:text-start opacity-60">
                  {tagline}
                </h1>
                <h1 className="text-sm md:text-base opacity-70">
                  {original_language} | {status} | {release_date}
                </h1>
                <h1 className="text-sm md:text-base opacity-70 flex items-center">
                  <IoTime className="mx-1" />
                  {runtime} min | {vote_average} | {}
                </h1>
                <div className="flex">
                  <button
                    className="bg-pink-400 flex items-center px-2 py-1 rounded-3xl md:text-base"
                    onClick={() => {
                      if (playlistname != "")
                        uploadplaylist(
                          playlistname,
                          id || "",
                          poster_path,
                          "movies"
                        );
                    }}
                  >
                    Add
                    <BsBookmarkHeartFill className="ml-2" />
                  </button>
                  <Input
                    className="ml-2"
                    inputProps={{ style: { color: "white" } }}
                    type={"text"}
                    value={playlistname}
                    onChange={(e) => {
                      setplaylistname(e.target.value);
                    }}
                  />
                </div>
                <div className="w-full">
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
                  <Context
                    title="Budget"
                    subtitle={
                      budget === 0 ? "N/A" : "$ " + budget.toLocaleString()
                    }
                  />
                  <Context
                    title="Revenue"
                    subtitle={
                      revenue === 0 ? "N/A" : "$ " + revenue.toLocaleString()
                    }
                  />
                </div>
                <CastList data={tvCast.Data} />
                {Recommended.Data.length === 0 ? null : (
                  <div className="w-full mt-2">
                    <h1 className="text-lg mx-2">Recommended:</h1>
                    <ListRow item={Recommended.Data} />
                  </div>
                )}
                <div className="flex flex-col w-full">
                  <Comment />
                </div>
                <div className="flex flex-col w-full">
                  <CommentData />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
