import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Filter from "../components/Filter";
import InfiniteScrolling from "../components/InfiniteScrolling";
import Name from "../components/Name";
import { ApplicationState } from "../redux/root/rootReducer";
import { CallSearch } from "../redux/Search/action";
import { maxWidthScreen } from "../utils/constants";

export default function Search() {
  const dispatch = useDispatch();
  const [val, setval] = useState<string>("");
  const MoviesData = useSelector(
    (state: ApplicationState) => state.Search.Searched
  );
  const [query, setQuery] = useSearchParams();

  function FetchData(newData: boolean, pg: number) {
    dispatch(
      CallSearch.request({
        NewData: newData,
        page: pg,
        query: query.get("query"),
        url: "multi",
      })
    );
  }
  useEffect(() => {
    if (!query.has("filter")) {
      query.set("filter", "multi");
      setQuery(query);
    }
    if (query.has("query") && query.has("filter")) {
      dispatch(
        CallSearch.request({
          NewData: true,
          page: 1,
          query: query.get("query"),
          url: query.get("filter"),
        })
      );
    }
  }, [dispatch, query.get("query"), query.get("filter")]);
  return (
    <Root>
      <Wrapper style={{}}>
        <NameWrapper>
          <Name />
        </NameWrapper>
        <SearchFieldWrapper>
          <input
            className="h-full bg-transparent w-11/12 focus:outline-none"
            placeholder="Search"
            value={val}
            onKeyUp={(e) => {
              if (val !== null && val !== "" && e.keyCode === 13) {
                query.set("query", encodeURIComponent(val.trim()));
                setQuery(query);
              }
            }}
            onChange={(e) => {
              setval(e.target.value);
            }}
          />
          <div className="flex items-center justify-between ml-1 pl-3">
            <BiSearch
              className="text-xl sm:text-xl mr-2 md:mr-5"
              onClick={() => {
                if (val !== null && val !== "") {
                  query.set("query", encodeURIComponent(val.trim()));
                  setQuery(query);
                }
              }}
            />
            <Filter />
          </div>
        </SearchFieldWrapper>
      </Wrapper>
      {query.has("query") ? (
        MoviesData.Data.length === 0 ? (
          <div
            className="flex justify-center items-center"
            style={{ height: "92.5vh" }}
          >
            <h1 className="opacity-40">No data found</h1>
          </div>
        ) : (
          <div className="flex flex-wrap justify-evenly pt-3">
            <InfiniteScrolling fetchData={FetchData} moviesData={MoviesData} />
          </div>
        )
      ) : null}
    </Root>
  );
}

const Root = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  maxWidth: maxWidthScreen,
  margin: "0px auto",
  float: "none",
}));
const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingInline: "0.75rem",
  fontWeight: "700",
  height: "7.5vh",
  backgroundColor: theme.palette.primary.main,
}));
const NameWrapper = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));
const SearchFieldWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100%",
  paddingLeft: "0.5rem",
  [theme.breakpoints.up("sm")]: {
    width: "83%",
  },
}));
