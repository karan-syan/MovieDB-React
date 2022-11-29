import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import ButtonGroup from "../components/ButtonGroup";
import Crousel from "../components/Crousel";
import Header from "../components/Header";
import MovieBox from "../components/MovieBox";
import { CallCrouselSlider, CallMovies } from "../redux/action/ActionCallApi";
import { ApplicationState } from "../redux/root/rootReducer";
import {
  Now_playing,
  Popular,
  Top_rated,
  Trending,
  Upcoming,
} from "../utils/constants";
import {
  now_playing_movie_url,
  popular_movie_url,
  top_rated_movie_url,
  trending_movie_url,
  upcoming_movie_url,
} from "../utils/url";

let pg = 1;
export default function Movies() {
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();
  const MoviesSlider = useSelector(
    (state: ApplicationState) => state.movie.CrouselSlider
  );
  const MoviesData = useSelector(
    (state: ApplicationState) => state.movie.Movies
  );
  const myparams = window.location.search;
  const urlparams = new URLSearchParams(myparams);

  useEffect(() => {
    if (!urlparams.has("type")) {
      setQuery({ type: Popular });
    }
    dispatch(
      CallCrouselSlider.request({
        url: popular_movie_url,
        page: 1,
        NewData: true,
      })
    );

    if (urlparams.has("type")) {
      console.log("i am being ", urlparams.get("type"));
      FetchData(true, 1);
    }
  }, [dispatch, urlparams.get("type")]);

  function dispatchFun(url: string, newdata: boolean, page: number) {
    dispatch(
      CallMovies.request({
        url: url,
        page: page,
        NewData: newdata,
      })
    );
  }

  function FetchData(newdata: boolean, page: number) {
    switch (urlparams.get("type")) {
      case Popular:
        dispatchFun(popular_movie_url, newdata, page);
        break;

      case Top_rated:
        dispatchFun(top_rated_movie_url, newdata, page);
        break;

      case Now_playing:
        dispatchFun(now_playing_movie_url, newdata, page);
        break;

      case Upcoming:
        dispatchFun(upcoming_movie_url, newdata, page);
        break;
      case Trending:
        dispatchFun(trending_movie_url, newdata, page);
        break;
      default:
        console.error("Wrong param type");
        break;
    }
  }

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className="flex justify-center items-center"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {MoviesData.loading && MoviesSlider.loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <div className={`${visible ? "sticky top-0 z-10" : ""}`}>
            <Header />
          </div>
          <div
            style={{
              width: "100vw",
            }}
          >
            <Crousel item={MoviesSlider.Data} />
          </div>
          <div
            className="flex justify-center py-2 mb-3 sticky z-20"
            style={{
              top: visible ? "7.5vh" : "0vh",
              width: "100vw",
              // background: "#08101c",
              backgroundImage: "linear-gradient(to right, #00040a,#08101c)",
            }}
          >
            <ButtonGroup varient="movie" />
          </div>
          <div className="flex flex-wrap justify-evenly overflow-y-auto">
            <InfiniteScroll
              dataLength={MoviesData.Data.length}
              next={() => {
                pg = pg + 1;
                FetchData(false, pg);
              }}
              hasMore={true}
              loader={<PropagateLoader color="#36d7b7" />}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {MoviesData.Data.map((item, index) => {
                return <MovieBox item={item} key={index} />;
              })}
            </InfiniteScroll>
          </div>
        </div>
      )}
    </div>
  );
}
