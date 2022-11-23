import React, { useEffect } from "react";
import Header from "../components/Header";
import { CallMovieApi } from "../redux/action/ActionCallApi";
import { upcoming_movie_url } from "../util/url";
import { useDispatch, useSelector } from "react-redux";
import Crousel from "../components/Crousel";
import { ApplicationState } from "../redux/root/rootReducer";

export default function Movies() {
  const dispatch = useDispatch();
  const slider = useSelector((state: ApplicationState) => state.BaseApiReducer);
  useEffect(() => {
    dispatch(CallMovieApi(upcoming_movie_url));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Crousel item={slider} />
    </div>
  );
}
