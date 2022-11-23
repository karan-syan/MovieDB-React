import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import {
  CallMoviePopular,
  CallMovieSLider,
  CallMovieUpcoming,
  CallTvLatest,
  CallTvPopular,
  CallTvRecommend,
  CallTvTrending,
} from "../redux/action/ActionCallApi";
import {
  latest_movie_url,
  popular_movie_url,
  popular_tv_url,
  trending_movie_url,
  trending_tv_url,
  trending_url,
  upcoming_movie_url,
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

  const UpcomingMovies = useSelector(
    (state: ApplicationState) => state.movie.UpcomingMovie
  );

  const TrendingShows = useSelector(
    (state: ApplicationState) => state.trend.TvTrending
  );

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
    dispatch(
      CallMovieUpcoming.request({
        url: upcoming_movie_url,
      })
    );
    dispatch(
      CallTvTrending.request({
        url: trending_tv_url,
      })
    );
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div
        className="flex overflow-auto w-full flex-col"
        style={{ height: "92.5vh" }}
      >
        <Crousel item={MoviesSlider.Data} />
        <ListRow item={TrendingShows.Data} title={"Trending Tv Shows"} />
        <ListRow item={PopularMovies.Data} title={"Popular Movies"} />
        <ListRow item={PopularShows.Data} title={"Popular Tv Shows"} />
        <ListRow item={UpcomingMovies.Data} title={"Upcoming Movies"} />
        <Footer />
      </div>
    </div>
  );
}
