import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import {
  CallMoviePopular,
  CallMovieSLider,
  CallTvLatest,
  CallTvPopular,
  CallTvRecommend,
} from "../redux/action/ActionCallApi";
import {
  latest_movie_url,
  popular_movie_url,
  popular_tv_url,
  trending_movie_url,
  trending_url,
} from "../util/url";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Crousel from "../components/Crousel";
import { ApplicationState } from "../redux/root/rootReducer";
import Footer from "../components/Footer";
import ListRow from "../components/ListRow";

export default function Home() {
  const dispatch = useDispatch();

  const MoviesSlider = useSelector(
    (state: ApplicationState) => state.movie.MovieSlider
  );
  const PopularMovies = useSelector(
    (state: ApplicationState) => state.movie.PopularMovies
  );

  const PopularShows = useSelector(
    (state: ApplicationState) => state.tv.PopularShows
  );

  const [val, setval] = useState<number>(PopularMovies.Data.length);

  useEffect(() => {
    console.log(PopularMovies.Data.length);
  }, [PopularMovies.Data.length]);

  useEffect(() => {
    dispatch(
      CallMovieSLider.request({
        url: trending_url,
      })
    );
    dispatch(
      CallMoviePopular.request({
        url: popular_movie_url,
      })
    );
    dispatch(
      CallTvPopular.request({
        url: popular_tv_url,
      })
    );
    // dispatch(
    //   CallTvRecommend.request({
    //     url: Reccomo,
    //   })
    // );
  }, [dispatch]);

  return (
    <div className="bg-gradient-to-r from-bg_clr_2 to-bg_clr">
      <Header />
      <div
        className="flex overflow-auto w-full flex-col"
        style={{ height: "92.5vh" }}
      >
        <Crousel item={MoviesSlider.Data} />
        <h1>{val}</h1>
        <button
          onClick={() => {
            setval(PopularMovies.Data.length);
          }}
        >
          click
        </button>
        <ListRow item={PopularMovies.Data} title={"Popular Movies"} />
        <ListRow item={PopularShows.Data} title={"Popular Tv Shows"} />
        {/* <ListRow item={PopularShows.Data} title={"Popular Tv Shows"} /> */}
        <Footer />
      </div>
    </div>
  );
}
