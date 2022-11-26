import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import {
  CallMoviePopular,
  CallCrouselSlider,
  CallMovieUpcoming,
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
} from "../utils/url";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Crousel from "../components/Crousel";
import { ApplicationState } from "../redux/root/rootReducer";
import Footer from "../components/Footer";
import ListRow from "../components/ListRow";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const dispatch = useDispatch();

  const [val, setval] = useState<number>(1);

  const MoviesSlider = useSelector(
    (state: ApplicationState) => state.movie.CrouselSlider
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

  const RecommendShows = useSelector(
    (state: ApplicationState) => state.tv.TvRecommend
  );

  useEffect(() => {
    dispatch(
      CallCrouselSlider.request({
        url: trending_url,
        page: 1,
        NewData: true,
      })
    );
    dispatch(
      CallMoviePopular.request({
        url: popular_movie_url,
        page: val,
        NewData: true,
      })
    );
    dispatch(
      CallTvPopular.request({
        url: popular_tv_url,
        page: 1,
        NewData: true,
      })
    );
    dispatch(
      CallMovieUpcoming.request({
        url: upcoming_movie_url,
        page: 1,
        NewData: true,
      })
    );
    dispatch(
      CallTvTrending.request({
        url: trending_tv_url,
        page: 1,
        NewData: true,
      })
    );
    dispatch(
      CallTvRecommend.request({
        url: "tv/46261/recommendations",
        page: 1,
        NewData: true,
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
        <ListRow item={PopularMovies.Data} title={"Popular Movies"} />
        <ListRow item={TrendingShows.Data} title={"Trending Tv Shows"} />
        <ListRow item={PopularShows.Data} title={"Popular Tv Shows"} />
        <ListRow item={UpcomingMovies.Data} title={"Upcoming Movies"} />
        <ListRow item={RecommendShows.Data} title={"Animated Series"} />
        <Footer />
      </div>
    </div>
  );
}
