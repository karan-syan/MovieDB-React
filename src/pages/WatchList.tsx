import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import MovieBox from "../components/MovieBox";
import { getWatchListData } from "../firebase/watchListData";
import { maxWidthScreen } from "../utils/constants";
import { WatchListDataType } from "../utils/type";

const WatchList = () => {
  const [movieDate, setMovieData] = useState<WatchListDataType[]>([]);
  useEffect(() => {
    getWatchListData().then((res) => {
      setMovieData(res);
    });
  }, []);

  return (
    <Wrapper>
      {movieDate.map((item, index) => {
        const { id, img, varient } = item;
        return (
          <MovieBox id={id} posterPath={img} varient={varient} key={index} />
        );
      })}
    </Wrapper>
  );
};

export default WatchList;
const Wrapper = styled(Box)(() => ({
  width: "100%",
  maxWidth: maxWidthScreen,
  margin: "0px auto",
  display: "flex",
  flexWrap: "wrap",
}));
