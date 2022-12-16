import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { BarLoader, PropagateLoader } from "react-spinners";
import ButtonGroup from "../components/ButtonGroup";
import Crousel from "../components/Crousel";
import Header from "../components/Header";
import MovieBox from "../components/MovieBox";
import { CallCrouselSlider } from "../redux/Crousel/action";
import { CallMovies } from "../redux/Main/action";
import { ApplicationState } from "../redux/root/rootReducer";
import { Popular } from "../utils/constants";
import { popular_movie_url } from "../utils/url";

let pg = 1;
export default function Movies() {
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();
  const { CrouselSlider, Movies } = useSelector(
    (state: ApplicationState) => state.movie
  );

  useEffect(() => {
    if (!query.has("type")) {
      setQuery({ type: Popular });
    }
    dispatch(
      CallCrouselSlider.request({
        url: popular_movie_url,
        page: 1,
        NewData: true,
      })
    );

    if (query.has("type")) {
      FetchData(true, 1);
    }
  }, [dispatch, query.get("type")]);

  function FetchData(newdata: boolean, page: number) {
    dispatch(
      CallMovies.request({
        url: `movie/${query.get("type")}`,
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
    <div className="flex justify-center items-center">
      {Movies.loading && CrouselSlider.loading ? (
        <BarLoader color="#36d7b7" />
      ) : (
        <div
          style={{
            width: "100%",
            maxWidth: "1600px",
            margin: "0px auto",
            float: "none",
          }}
        >
          <div className="overflow-auto">
            <div className={`${visible ? "sticky top-0 z-10" : ""}`}>
              <Header />
            </div>
            <div
              style={{
                width: "100%",
                maxWidth: "1600px",
                margin: "0px auto",
                float: "none",
              }}
            >
              <Crousel item={CrouselSlider.Data} />
            </div>
            <div
              className="flex justify-center py-2 mb-3 sticky z-20"
              style={{
                maxWidth: "1600px",
                margin: "0px auto",
                float: "none",
                top: visible ? "7.5vh" : "0vh",
                width: "100vw",
                backgroundImage: "linear-gradient(to right, #00040a,#08101c)",
              }}
            >
              <ButtonGroup varient="movie" />
            </div>
            <InfiniteScroll
              dataLength={Movies.Data.length}
              next={() => {
                pg = pg + 1;
                FetchData(false, pg);
              }}
              hasMore={true}
              loader={<PropagateLoader color="#36d7b7" />}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {Movies.Data.map((item, index) => {
                return (
                  <MovieBox
                    id={item.id.toString()}
                    img={item.poster_path}
                    varient={"movies"}
                    key={index}
                  />
                );
              })}
            </InfiniteScroll>
          </div>
        </div>
      )}
    </div>
  );
}
