import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import MovieBox from "../components/MovieBox";
import Name from "../components/Name";
import { CallSearch } from "../redux/action/ActionCallApi";
import { ApplicationState } from "../redux/root/rootReducer";

let pg = 1;
export default function Search() {
  const dispatch = useDispatch();
  const [val, setval] = useState<string>("");
  const MoviesData = useSelector(
    (state: ApplicationState) => state.Search.Searched
  );
  const [query, setQuery] = useSearchParams();
  const myparams = window.location.search;
  const urlparams = new URLSearchParams(myparams);
  function FetchData() {
    console.log("1234");
    dispatch(
      CallSearch.request({
        NewData: false,
        page: pg,
        query: urlparams.get("query"),
        url: "multi",
      })
    );
  }
  useEffect(() => {
    if (urlparams.has("query")) {
      pg = 1;
      console.log("123");
      dispatch(
        CallSearch.request({
          NewData: true,
          page: pg,
          query: urlparams.get("query"),
          url: "multi",
        })
      );
    }
  }, [dispatch, urlparams.get("query")]);
  return (
    <div>
      <div
        className="flex items-center justify-between px-3 font-bold"
        style={{ height: "7.5vh", backgroundColor: "#000814" }}
      >
        <div className="hidden sm:block">
          <Name />
        </div>
        <div className="flex h-full w-full pl-2 sm:w-3/4">
          <input
            className="h-full bg-transparent w-11/12 focus:outline-none"
            placeholder="Search"
            value={val}
            onChange={(e) => {
              setval(e.target.value);
            }}
          />
          <div className="flex items-center justify-between ml-1 pl-3">
            <BiSearch
              className="text-xl sm:text-xl"
              onClick={() => {
                if (val !== null && val !== "") {
                  setQuery({ query: encodeURIComponent(val.trim()) });
                }
              }}
            />
          </div>
        </div>
      </div>
      {urlparams.has("query") ? (
        MoviesData.Data.length === 0 ? (
          <div
            className="flex justify-center items-center"
            style={{ height: "92.5vh" }}
          >
            <h1 className="opacity-40">No data found</h1>
          </div>
        ) : (
          <div className="flex flex-wrap justify-evenly pt-3">
            <InfiniteScroll
              dataLength={MoviesData.Data.length}
              next={() => {
                pg = pg + 1;
                FetchData();
              }}
              hasMore={true}
              loader={<h4></h4>}
            >
              {MoviesData.Data.map((item, index) => {
                if (item.poster_path) {
                  return <MovieBox item={item} key={index} />;
                }
              })}
            </InfiniteScroll>
          </div>
        )
      ) : null}
    </div>
  );
}
