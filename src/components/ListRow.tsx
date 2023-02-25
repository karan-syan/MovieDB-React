import { Box, styled, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { IMovie } from "../utils/type";
import { LeftScrollBtn } from "./LeftScrollBtn";
import MovieBox from "./MovieBox";
import { RightScrollBtn } from "./RightScrollBtn";
interface Props {
  item: IMovie;
  title?: string;
}
export default function ListRow({ item, title }: Props) {
  const { results } = item;
  const scrollRef = useRef<HTMLInputElement>(null);
  const [rightBtnVis, SetRightBtnVis] = useState<boolean>(true);
  const [LeftBtnVis, SetLeftBtnVis] = useState<boolean>(false);

  const scroll = (scrollTo: "left" | "right") => {
    if (scrollRef.current) {
      if (scrollTo === "right") {
        scrollRef.current.scrollLeft += scrollRef.current.clientWidth;
      } else {
        scrollRef.current.scrollLeft -= scrollRef.current.clientWidth;
      }
      if (
        scrollRef.current.scrollWidth <=
        scrollRef.current.offsetWidth + scrollRef.current.scrollLeft + 10
      ) {
        SetRightBtnVis(false);
      } else {
        SetRightBtnVis(true);
        scrollRef.current.scrollLeft
          ? SetLeftBtnVis(true)
          : SetLeftBtnVis(false);
      }
    }
  };

  return (
    <Root>
      {title && (
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
      )}
      <RightScrollBtn scroll={scroll} visibity={rightBtnVis} />
      <LeftScrollBtn scroll={scroll} visibity={LeftBtnVis} />
      <Container ref={scrollRef}>
        {results.map((val, index) => {
          const varient = val.name ? "tv" : "movie";
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
      </Container>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "1.25rem",
  position: "relative",
  fontFamily: "Roboto Condensed",
  marginBottom: "2rem",
  marginLeft: "0.75rem",
  marginRight: "0.75rem",
}));
const TitleWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "800",
  marginLeft: "1rem",
  marginBottom: "0.75rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.875rem",
  },
}));

const Container = styled(Box)(({ theme }) => ({
  overflowX: "auto",
  display: "flex",
  scrollBehavior: "smooth",
  "::-webkit-scrollbar": {
    height: "0.5rem",
  },
  flexWrap: "nowrap",
}));
