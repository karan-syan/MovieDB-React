import React, { useEffect } from "react";
import Header from "../components/Header";
import { CallMovieSLider } from "../redux/action/ActionCallApi";
import {
  upcoming_movie_url,
  popular_movie_url,
  latest_movie_url,
  now_playing_movie_url,
  top_rated_movie_url,
} from "../util/url";
import { useDispatch, useSelector } from "react-redux";
import Crousel from "../components/Crousel";
import { ApplicationState } from "../redux/root/rootReducer";
import ButtonGroup from "../components/ButtonGroup";
import { useParams, useSearchParams } from "react-router-dom";
import {
  Latest,
  Now_playing,
  Popular,
  Top_rated,
  Upcoming,
} from "../util/constants";

export default function Movies() {
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();
  const MoviesSlider = useSelector(
    (state: ApplicationState) => state.movie.MovieSlider
  );
  const myparams = window.location.search;
  const urlparams = new URLSearchParams(myparams);

  useEffect(() => {
    console.log("movies");
    // dispatch(
    //   CallMovieSLider.request({
    //     url: popular_movie_url,
    //     page: 1,
    //   })
    // );
    if (urlparams.has("type")) {
      switch (query.get("type")) {
        case Popular:
          dispatch(
            CallMovieSLider.request({
              url: popular_movie_url,
              page: 1,
            })
          );
          break;
        // case Latest:
        //   dispatch(
        //     CallMovieSLider.request({
        //       url: latest_movie_url,
        //       page: 1,
        //     })
        //   );
        //   break;

        case Top_rated:
          dispatch(
            CallMovieSLider.request({
              url: top_rated_movie_url,
              page: 1,
            })
          );
          break;
        case Now_playing:
          dispatch(
            CallMovieSLider.request({
              url: now_playing_movie_url,
              page: 1,
            })
          );
          break;

        case Upcoming:
          dispatch(
            CallMovieSLider.request({
              url: upcoming_movie_url,
              page: 1,
            })
          );
          break;

        default:
          console.error("Wrong param type");
          break;
      }
    } else {
      setQuery({ type: Popular });
    }
  }, [dispatch, urlparams.get("type")]);

  return (
    <div className="w-full">
      <Header />
      <Crousel item={MoviesSlider.Data} />
      <ButtonGroup />
    </div>
  );
}
