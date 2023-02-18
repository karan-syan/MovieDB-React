import { Box, styled, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import PaginatedData from "../components/PaginatedData";
import { ApplicationState } from "../redux/root/rootReducer";
import { CallSearch } from "../redux/Search/action";
import { maxWidthScreen } from "../utils/constants";

export default function Search() {
  const dispatch = useDispatch();
  const { search } = useParams();
  const MoviesData = useSelector(
    (state: ApplicationState) => state.Search.Searched
  );
  const [query, setQuery] = useSearchParams();

  function FetchData(newData: boolean, pg: number) {
    if (search) {
      console.log(newData, pg, MoviesData.Data.results.length);
      dispatch(
        CallSearch.request({
          NewData: newData,
          page: pg,
          query: search,
          url: "multi",
        })
      );
    }
  }
  useEffect(() => {
    if (!query.has("filter")) {
      query.set("filter", "multi");
      setQuery(query);
    }
    if (search && query.has("filter")) {
      dispatch(
        CallSearch.request({
          NewData: true,
          page: 1,
          query: search,
          url: query.get("filter"),
        })
      );
    }
  }, [dispatch, query, search, setQuery]);
  return (
    <Root>
      {MoviesData.Data.results.length === 0 ? (
        <Container>
          <Typography sx={{ opacity: "0.7" }}>No data found</Typography>
        </Container>
      ) : (
        <Wrapper>
          <PaginatedData fetchData={FetchData} moviesData={MoviesData} />
        </Wrapper>
      )}
    </Root>
  );
}

const Root = styled(Box)(() => ({
  width: "100%",
  maxWidth: maxWidthScreen,
}));
const Wrapper = styled(Box)(() => ({
  width: "100%",
  maxWidth: maxWidthScreen,
  margin: "0px auto",
}));
const Container = styled(Box)(() => ({
  height: "92,5vh",
  maxWidth: maxWidthScreen,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
