import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import InfiniteScroll from "react-infinite-scroll-component";

import { CallCrouselSlider, CallMovies } from "../redux/action/ActionCallApi";
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
import MovieBox from "../components/MovieBox";

export default function Movies() {
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();
  const [pg, setpg] = useState<number>(1);
  const MoviesSlider = useSelector(
    (state: ApplicationState) => state.movie.CrouselSlider
  );
  const MoviesData = useSelector(
    (state: ApplicationState) => state.movie.Movies
  );
  const myparams = window.location.search;
  const urlparams = new URLSearchParams(myparams);

  function FetchData(newdata: boolean) {
    console.log("new data ", newdata, pg);
    switch (query.get("type")) {
      case Popular:
        dispatch(
          CallMovies.request({
            url: popular_movie_url,
            page: pg,
            NewData: newdata,
          })
        );
        break;

      case Top_rated:
        dispatch(
          CallMovies.request({
            url: top_rated_movie_url,
            page: pg,
            NewData: newdata,
          })
        );
        break;
      case Now_playing:
        dispatch(
          CallMovies.request({
            url: now_playing_movie_url,
            page: pg,
            NewData: newdata,
          })
        );
        break;

      case Upcoming:
        dispatch(
          CallMovies.request({
            url: upcoming_movie_url,
            page: pg,
            NewData: newdata,
          })
        );
        break;
      default:
        console.error("Wrong param type");
        break;
    }
  }

  useEffect(() => {
    setpg(1);
    console.log("movies");
    dispatch(
      CallCrouselSlider.request({
        url: popular_movie_url,
        page: 1,
        NewData: true,
      })
    );
    console.log(urlparams.get("type"));
    console.log(pg);
    if (urlparams.has("type")) {
      FetchData(true);
    } else {
      setQuery({ type: Popular });
    }
  }, [dispatch, urlparams.get("type")]);

  return (
    <div className="w-full">
      <Header />
      <Crousel item={MoviesSlider.Data} />
      <div className="flex justify-center mb-3">
        <ButtonGroup />
      </div>
      <div className="flex flex-wrap justify-evenly">
        <InfiniteScroll
          dataLength={MoviesData.Data.length} //This is important field to render the next data
          next={() => {
            setpg(pg + 1);
            FetchData(false);
          }}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // below props only if you need pull down functionality
        >
          {MoviesData.Data.map((item, index) => {
            return <MovieBox id={item.id} img={item.poster_path} key={index} />;
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
}
