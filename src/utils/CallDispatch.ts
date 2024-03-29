import { CallCrouselSlider } from "../redux/Crousel/action";
import { CallDetails } from "../redux/Detail/action";
import { CallMoviePopular, CallMovieUpcoming } from "../redux/Movie/action";
import { CallCast } from "../redux/People/action";
import { CallRecommend } from "../redux/Recommend/action";
import store from "../redux/store";
import { CallTvPopular, CallTvTrending } from "../redux/Tv/action";
import {
  popular_movie_url,
  popular_tv_url,
  trending_tv_url,
  trending_url,
  upcoming_movie_url,
} from "./url";

export const HomePageDispatch = () => {
  return Promise.all([
    store.dispatch(
      CallCrouselSlider.request({
        url: trending_url,
        page: 1,
        NewData: true,
      })
    ),
    store.dispatch(
      CallMoviePopular.request({
        url: popular_movie_url,
        page: 1,
        NewData: true,
      })
    ),
    store.dispatch(
      CallTvPopular.request({
        url: popular_tv_url,
        page: 1,
        NewData: true,
      })
    ),
    store.dispatch(
      CallMovieUpcoming.request({
        url: upcoming_movie_url,
        page: 1,
        NewData: true,
      })
    ),
    store.dispatch(
      CallTvTrending.request({
        url: trending_tv_url,
        page: 1,
        NewData: true,
      })
    ),
    store.dispatch(
      CallRecommend.request({
        url: "tv/46261/recommendations",
        page: 1,
        NewData: true,
      })
    ),
  ]);
};

export const DetailDispatch = (id: string, varient: "tv" | "movie") => {
  store.dispatch(
    CallDetails.request({
      url: `/${varient}/${id}`,
    })
  );
  store.dispatch(
    CallCast.request({
      url: `/${varient}/${id}/credits`,
    })
  );
  store.dispatch(
    CallRecommend.request({
      url: `${varient}/${id}/recommendations`,
      page: 1,
      NewData: true,
    })
  );
};
