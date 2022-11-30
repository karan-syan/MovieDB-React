import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BarLoader, PropagateLoader } from "react-spinners";
import Crousel from "../components/Crousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListRow from "../components/ListRow";
import {
  CallCrouselSlider,
  CallMoviePopular,
  CallMovieUpcoming,
  CallTvPopular,
  CallRecommend,
  CallTvTrending,
} from "../redux/action/ActionCallApi";
import { ApplicationState } from "../redux/root/rootReducer";
import {
  popular_movie_url,
  popular_tv_url,
  trending_tv_url,
  trending_url,
  upcoming_movie_url,
} from "../utils/url";

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
      CallRecommend.request({
        url: "tv",
        id: "46261",
        page: 1,
        NewData: true,
      })
    );
  }, [dispatch]);

  return (
    <div
      className="flex justify-center items-center"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {RecommendShows.loading && MoviesSlider.loading ? (
        <BarLoader color="#36d7b7" />
      ) : (
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
      )}
    </div>
  );
}
