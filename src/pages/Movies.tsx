import React, { useEffect } from "react";
import Header from "../components/Header";
import {} from "../redux/action/ActionCallApi";
import {
  upcoming_movie_url,
  popular_movie_url,
  latest_movie_url,
} from "../util/url";
import { useDispatch, useSelector } from "react-redux";
import Crousel from "../components/Crousel";
import { ApplicationState } from "../redux/root/rootReducer";

export default function Movies() {
  const dispatch = useDispatch();
  // const slider = useSelector(
  //   (state: ApplicationState) => state.MovieApiReducer_1
  // );
  // useEffect(() => {
  //   dispatch(CallMovieApi_1(upcoming_movie_url));
  //   dispatch(CallMovieApi_2(popular_movie_url));
  //   dispatch(CallMovieApi_3(latest_movie_url));
  //   dispatch(CallMovieApi_4(upcoming_movie_url));
  // }, [dispatch]);

  return (
    <div>
      <Header />
      {/* <Crousel item={slider} /> */}
    </div>
  );
}
