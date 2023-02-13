import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { Box, styled, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import CastList from "../components/CastList";
import Context from "../components/Context";
import ListRow from "../components/ListRow";
import PosterCard from "../components/PosterCard";
import {
  addWatchListData,
  checkWatchListData,
  removeWatchListData,
} from "../firebase/watchListData";
import { CallMovieDetails } from "../redux/Movie/action";
import { CallCast } from "../redux/People/action";
import { CallRecommend } from "../redux/Recommend/action";
import { ApplicationState } from "../redux/root/rootReducer";
import { maxWidthScreen } from "../utils/constants";
import { MOVIE_DB_IMG_URL } from "../utils/url";
export default function MoviesDetails() {
  const dispatch = useDispatch();
  const elementForScroll = useRef<HTMLDivElement>(null);
  const [watchListBtn, setWatchListBtn] = useState<boolean>(false);

  const MovieDetails = useSelector(
    (state: ApplicationState) => state.details.MovieDetails
  );
  const Recommended = useSelector(
    (state: ApplicationState) => state.movie.MovieRecommend
  );
  const tvCast = useSelector((state: ApplicationState) => state.details.TvCast);
  const { id } = useParams();
  async function handleWatchListBtn() {
    if (await checkWatchListData(MovieDetails.Data.id)) {
      setWatchListBtn(true);
    }
  }
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
    handleWatchListBtn();
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
    <>
      {MovieDetails.loading ? (
        <BarLoader color="#36d7b7" />
      ) : (
        <Root backdropPath={backdrop_path}>
          <Container>
            <PosterCard Poster_Path={poster_path} />
            <ContentWrapper ref={elementForScroll}>
              <Title>{title}</Title>
              <TagLine>{tagline}</TagLine>
              <h1 className="text-sm md:text-base opacity-70">
                {original_language} | {status} | {release_date}
              </h1>
              <h1 className="text-sm md:text-base opacity-70 flex items-center">
                <IoTime className="mx-1" />
                {runtime} min | {vote_average} | {}
              </h1>
              <button
                className="bg-pink-400 flex items-center px-2 py-1 rounded-3xl md:text-base"
                onClick={() => {
                  if (watchListBtn) {
                    removeWatchListData(
                      MovieDetails.Data.id,
                      poster_path,
                      "movies"
                    );
                    setWatchListBtn(false);
                  } else {
                    addWatchListData(
                      MovieDetails.Data.id,
                      poster_path,
                      "movies"
                    );
                    setWatchListBtn(true);
                  }
                }}
              >
                WatchList
                {watchListBtn ? (
                  <BookmarkAddedIcon />
                ) : (
                  <BsBookmarkHeartFill className="ml-2" />
                )}
              </button>
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
            </ContentWrapper>
          </Container>
        </Root>
      )}
    </>
  );
}
const Root = styled(Box)<{ backdropPath: string }>(({ backdropPath }) => ({
  maxWidth: maxWidthScreen,
  margin: "0px auto",
  float: "none",
  backgroundImage: `url(${MOVIE_DB_IMG_URL + backdropPath})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backdropFilter: "blur(10px) brightness(60%)",
  backgroundRepeat: "repeat",
}));
const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  minHeight: "92.5vh",
  height: "100%",
  backdropFilter: "blur(10px) brightness(60%)",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "1.25rem",
  justifyContent: "center",
  paddingBottom: "0.75rem",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    width: "66.6%",
    justifyContent: "start",
    alignItems: "start",
  },
}));
const Title = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: 800,
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
    textAlign: "start",
  },
}));
const TagLine = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontStyle: "italic",
  opacity: "0.6",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    marginTop: "-0.5rem",
    textAlign: "start",
    fontSize: "1.25rem",
  },
}));
