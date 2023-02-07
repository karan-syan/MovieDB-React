import { Typography } from "@mui/material";
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
          <br />
          <BeatLoader color="#36d7b7" />
        </>
      }
      endMessage={
        <Typography textAlign={"center"} fontWeight={700}>
          Yay! You have seen it all
        </Typography>
      }
    >
      {moviesData.Data.map((item, index) => {
        return <MovieBox item={item} key={index} />;
      })}
    </InfiniteScroll>
  );
};

export default InfiniteScrolling;
