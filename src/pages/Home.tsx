import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BarLoader } from "react-spinners";
import Crousel from "../components/Crousel";
import Footer from "../components/Footer";
import ListRow from "../components/ListRow";
import { ApplicationState } from "../redux/root/rootReducer";
import { HomePageDispatch } from "../utils/CallDispatch";
export default function Home() {
  const { CrouselSlider, PopularMovies, UpcomingMovie } = useSelector(
    (state: ApplicationState) => state.movie
  );

  const { PopularShows, TvRecommend } = useSelector(
    (state: ApplicationState) => state.tv
  );

  const { TvTrending } = useSelector((state: ApplicationState) => state.trend);

  useEffect(() => {
    HomePageDispatch();
  }, []);

  return (
    <>
      {TvRecommend.loading && CrouselSlider.loading ? (
        <BarLoader color="#36d7b7" style={{ width: "100%" }} />
      ) : (
        <Wrapper>
          <Crousel item={CrouselSlider.Data} />
          <ListRow item={PopularMovies.Data} title={"Popular Movies"} />
          <ListRow item={TvTrending.Data} title={"Trending Tv Shows"} />
          <ListRow item={PopularShows.Data} title={"Popular Tv Shows"} />
          <ListRow item={UpcomingMovie.Data} title={"Upcoming Movies"} />
          <ListRow item={TvRecommend.Data} title={"Animated Series"} />
          <Footer />
        </Wrapper>
      )}
    </>
  );
}
const Wrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  overflow: "auto",
}));
