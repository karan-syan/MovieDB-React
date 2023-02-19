import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { Box, Button, styled, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import CastList from "../components/CastList";
import Context from "../components/Context";
import ListRow from "../components/ListRow";
import NetworkList from "../components/NetworkList";
import PosterCard from "../components/PosterCard";
import SeasonList from "../components/SeasonList";
import {
  addWatchListData,
  checkWatchListData,
  removeWatchListData,
} from "../firebase/watchListData";
import { ApplicationState } from "../redux/root/rootReducer";
import { DetailDispatch } from "../utils/CallDispatch";
import { maxWidthScreen } from "../utils/constants";
import { MOVIE_DB_IMG_URL } from "../utils/url";
interface Props {
  varient: "tv" | "movie";
}
export default function Detail(props: Props) {
  const { varient } = props;
  const elementForScroll = useRef<HTMLDivElement>(null);
  const [watchListBtn, setWatchListBtn] = useState<boolean>(false);
  const details = useSelector(
    (state: ApplicationState) => state.details.Details
  );
  const Recommended = useSelector(
    (state: ApplicationState) => state.tv.TvRecommend
  );
  const tvCast = useSelector((state: ApplicationState) => state.details.TvCast);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      DetailDispatch(id, varient);
    }
    elementForScroll.current?.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    handleWatchListBtn();
  }, [id]);

  const {
    backdrop_path,
    episode_run_time,
    first_air_date,
    genres,
    name,
    networks,
    number_of_episodes,
    original_language,
    overview,
    poster_path,
    budget,
    release_date,
    revenue,
    title,
    production_companies,
    seasons,
    spoken_languages,
    status,
    tagline,
    type,
    runtime,
    vote_average,
  } = details.Data;

  async function handleWatchListBtn() {
    if (details.Data) {
      if (await checkWatchListData(details.Data.id)) {
        setWatchListBtn(true);
      }
    }
  }
  const handleWatchListBtnClick = () => {
    if (details.Data) {
      if (watchListBtn) {
        removeWatchListData(details.Data.id, poster_path, varient);
        setWatchListBtn(false);
      } else {
        addWatchListData(details.Data.id, poster_path, varient);
        setWatchListBtn(true);
      }
    }
  };
  return (
    <>
      {details.loading ? (
        <BarLoader color="#36d7b7" />
      ) : (
        <Root backdropPath={backdrop_path}>
          <Container>
            <PosterCard Poster_Path={poster_path} />
            <ContentWrapper ref={elementForScroll}>
              <Title>{name || title}</Title>
              <TagLine>{tagline}</TagLine>
              <h1 className="text-sm md:text-base opacity-70">
                {original_language} | {status} |{" "}
                {first_air_date || release_date}
              </h1>
              <h1 className="text-sm md:text-base opacity-70 flex items-center">
                Ep {number_of_episodes} |
                <IoTime className="mx-1" />
                {episode_run_time || runtime} min | {vote_average} | {type}
              </h1>
              <WatchlistButton
                variant="contained"
                onClick={handleWatchListBtnClick}
              >
                WatchList &nbsp;
                {watchListBtn ? <BookmarkAddedIcon /> : <BsBookmarkHeartFill />}
              </WatchlistButton>
              <Box sx={{ width: "100%" }}>
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
                {budget && (
                  <Context
                    title="Budget"
                    subtitle={
                      budget === 0 ? "N/A" : "$ " + budget.toLocaleString()
                    }
                  />
                )}
                {revenue && (
                  <Context
                    title="Revenue"
                    subtitle={
                      revenue === 0 ? "N/A" : "$ " + revenue.toLocaleString()
                    }
                  />
                )}
                {networks && <NetworkList item={networks} />}
                <CastList data={tvCast.Data} />
              </Box>
              {seasons && <SeasonList item={seasons} TvName={name || ""} />}
              {Recommended.Data.results.length === 0 ? null : (
                <Recommendation>
                  <Heading>Recommended:</Heading>
                  <ListRow item={Recommended.Data} />
                </Recommendation>
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
const WatchlistButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingInline: "1rem",
  paddingBlock: "0.25rem",
  backgroundColor: "#F472B6",
  color: "white",
  borderRadius: "1.5rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
  ":hover": {
    backgroundColor: "#863B62",
  },
}));
const Recommendation = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: "0.5rem",
}));
const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "1.125rem",
  marginInline: "0.5rem",
}));
