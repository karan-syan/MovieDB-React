import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import MovieBox from "../components/MovieBox";
import { getRecentData } from "../firebase/recentData";
import { maxWidthScreen } from "../utils/constants";
import { RecentDataType } from "../utils/type";

const Recent = () => {
  const [movieDate, setMovieData] = useState<RecentDataType[]>([]);
  useEffect(() => {
    getRecentData().then((res) => {
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

export default Recent;
const Wrapper = styled(Box)(() => ({
  width: "100%",
  maxWidth: maxWidthScreen,
  margin: "0px auto",
  display: "flex",
  flexWrap: "wrap",
}));
