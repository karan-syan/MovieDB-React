import React, { useEffect } from "react";
import Header from "../components/Header";
import { CallTvApi } from "../redux/action/ActionCallApi";
import { popular_movie_url, upcoming_movie_url } from "../util/url";
import { useDispatch, useSelector } from "react-redux";
import Crousel from "../components/Crousel";
import { ApplicationState } from "../redux/root/rootReducer";

export default function Shows() {
  const dispatch = useDispatch();
  const slider = useSelector((state: ApplicationState) => state.BaseApiReducer);
  useEffect(() => {
    dispatch(CallTvApi(upcoming_movie_url));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Crousel item={slider} />
    </div>
  );
}
