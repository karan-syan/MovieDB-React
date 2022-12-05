import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import ButtonGroup from "../components/ButtonGroup";
import Crousel from "../components/Crousel";
import Header from "../components/Header";
import MovieBox from "../components/MovieBox";
import { CallCrouselSlider, CallMovies } from "../redux/action/ActionCallApi";
import { ApplicationState } from "../redux/root/rootReducer";
import { Popular } from "../utils/constants";
import { popular_tv_url } from "../utils/url";

let pg = 1;
export default function TvShows() {
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();
  const MoviesSlider = useSelector(
    (state: ApplicationState) => state.tv.CrouselSlider
  );
  const MoviesData = useSelector((state: ApplicationState) => state.tv.Tvs);

  useEffect(() => {
    if (!query.has("type")) {
      setQuery({ type: Popular });
    }
    dispatch(
      CallCrouselSlider.request({
        url: popular_tv_url,
        page: 1,
        NewData: true,
      })
    );

    if (query.has("type")) {
      console.log("i am being ", query.get("type"));
      FetchData(true, 1);
    }
  }, [dispatch, query.get("type")]);

  function FetchData(newdata: boolean, page: number) {
    dispatch(
      CallMovies.request({
        url: `tv/${query.get("type")}`,
        page: page,
        NewData: newdata,
      })
    );
  }

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className="flex justify-center items-center"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {MoviesData.loading && MoviesSlider.loading ? (
        <BarLoader color="#36d7b7" />
      ) : (
        <div
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <div>
            <div className={`${visible ? "sticky top-0 z-10" : ""}`}>
              <Header />
            </div>
            <div
              style={{
                width: "100vw",
              }}
            >
              <Crousel item={MoviesSlider.Data} />
            </div>
            <div
              className="flex justify-center py-2 mb-3 sticky z-20"
              style={{
                top: visible ? "7.4vh" : "0vh",
                backgroundImage: "linear-gradient(to right, #00040a,#08101c)",
              }}
            >
              <ButtonGroup varient="tv" />
            </div>
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
                return <MovieBox item={item} key={index} />;
              })}
            </InfiniteScroll>
          </div>
        </div>
      )}
    </div>
  );
}
