import React, { useEffect } from "react";
import Header from "../components/Header";
import { CallMovieApi, CallTvApi } from "../redux/action/ActionCallApi";
import { popular_movie_url, popular_tv_url } from "../util/url";
import { useDispatch, useSelector } from "react-redux";
import Crousel from "../components/Crousel";
import { ApplicationState } from "../redux/root/rootReducer";
import Footer from "../components/Footer";
import MovieBox from "../components/MovieBox";
import ListRow from "../components/ListRow";

export default function Home() {
  const dispatch = useDispatch();
  const slider = useSelector((state: ApplicationState) => state.BaseApiReducer);
  const TvshowsData = useSelector(
    (state: ApplicationState) => state.TvApiReducer
  );
  useEffect(() => {
    dispatch(CallMovieApi(popular_movie_url));
    dispatch(CallTvApi(popular_tv_url));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div
        className="flex overflow-auto w-full flex-col"
        style={{ height: "92.5vh" }}
      >
        <Crousel item={slider} />
        <ListRow item={slider} title={"Movies"} />
        <ListRow item={TvshowsData} title={"TV Shows"} />
        <ListRow item={slider} title={"Trending"} />
        <ListRow item={slider} title={"Upcoming"} />
        <Footer />
      </div>
    </div>
  );
}
