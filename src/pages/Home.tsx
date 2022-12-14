import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BarLoader } from "react-spinners";
import Crousel from "../components/Crousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListRow from "../components/ListRow";
import { auth } from "../firebase/firebaseConfig";
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
    console.log(auth.currentUser);
  }, []);

  return (
    <div
      className="flex justify-center items-center"
      style={{
        width: "100%",
        height: "100vh",
        maxWidth: "1600px",
        margin: "0px auto",
        float: "none",
      }}
    >
      {TvRecommend.loading && CrouselSlider.loading ? (
        <BarLoader color="#36d7b7" />
      ) : (
        <div>
          <Header />
          <div
            className="flex overflow-auto w-full flex-col"
            style={{ height: "92.5vh" }}
          >
            <Crousel item={CrouselSlider.Data} />
            <ListRow item={PopularMovies.Data} title={"Popular Movies"} />
            <ListRow item={TvTrending.Data} title={"Trending Tv Shows"} />
            <ListRow item={PopularShows.Data} title={"Popular Tv Shows"} />
            <ListRow item={UpcomingMovie.Data} title={"Upcoming Movies"} />
            <ListRow item={TvRecommend.Data} title={"Animated Series"} />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
