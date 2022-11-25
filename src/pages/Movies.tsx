import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import InfiniteScroll from "react-infinite-scroll-component";
import { CallCrouselSlider, CallMovies } from "../redux/action/ActionCallApi";
import {
  upcoming_movie_url,
  popular_movie_url,
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
import { delay } from "redux-saga/effects";

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
      default:
        console.error("Wrong param type");
        break;
    }
  }

  return (
    <div className="w-full">
      <Header />
      <Crousel item={MoviesSlider.Data} />
      <div className="flex justify-center mb-3">
        <ButtonGroup />
      </div>
      <div className="flex flex-wrap justify-evenly">
        <InfiniteScroll
          dataLength={MoviesData.Data.length}
          next={() => {
            pg = pg + 1;
            FetchData(false, pg);
          }}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {MoviesData.Data.map((item, index) => {
            return <MovieBox id={item.id} img={item.poster_path} key={index} />;
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
}
