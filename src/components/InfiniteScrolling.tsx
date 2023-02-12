import { Box, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { BeatLoader } from "react-spinners";
import { IState } from "../utils/InitialState";
import MovieBox from "./MovieBox";

let pg = 1;
interface Props {
  moviesData: IState;
  fetchData: (newdata: boolean, pg: number) => void;
}

const InfiniteScrolling = (props: Props) => {
  const { moviesData, fetchData } = props;
  return (
    <InfiniteScroll
      dataLength={moviesData.Data.length}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
      next={() => {
        pg = pg + 1;
        fetchData(false, pg);
      }}
      hasMore={true}
      loader={
        <>
          <br />
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <BeatLoader color="#36d7b7" />
          </Box>
        </>
      }
      endMessage={
        <>
          <br />
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Typography textAlign={"center"} fontWeight={700}>
              Yay! You have seen it all
            </Typography>
          </Box>
        </>
      }
    >
      {moviesData.Data.map((val, index) => {
        const varient = val.name ? "shows" : "movies";
        if (val.poster_path !== null && val.poster_path !== "") {
          return (
            <MovieBox
              key={index}
              id={val.id}
              posterPath={val.poster_path}
              varient={varient}
            />
          );
        }
        return null;
      })}
    </InfiniteScroll>
  );
};

export default InfiniteScrolling;
