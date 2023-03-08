import { Box, styled, Typography } from "@mui/material";
import { MOVIE_DB_IMG_URL } from "../utils/url";
import HorizontalScrollBtnWrapper from "./HorizontalScrollBtnWrapper";

interface season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export default function SeasonList({
  item,
  TvName,
}: {
  item: season[];
  TvName: string;
}) {
  return (
    <Root>
      <Title>Seasons:</Title>
      <HorizontalScrollBtnWrapper
        alignItem="stretch"
        item={
          <>
            {item.map((item, index) => (
              <Wrapper key={index}>
                <ImgWrapper>
                  <Img alt="" src={`${MOVIE_DB_IMG_URL}${item.poster_path}`} />
                </ImgWrapper>
                <TextWrapper>
                  <Typography>Name: {item.name}</Typography>
                  <Typography>Season: {item.season_number}</Typography>
                  <Typography>Total Episodes: {item.episode_count}</Typography>
                  <PremieredText>
                    {item.name} of {TvName} premiered on {item.air_date}
                  </PremieredText>
                </TextWrapper>
              </Wrapper>
            ))}
          </>
        } />
    </Root>
  );
}

const Root = styled(Box)(() => ({
  width: "100%",
  marginTop: "0.5rem",
  position: "relative",
  display: "flex",
  flexDirection: "column"
}));
const Img = styled("img")(({ theme }) => ({
  width: "100%",
  borderRadius: "10px",
  objectFit: "cover",
  height: "100%",
}));
const Title = styled(Typography)(() => ({
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
  fontSize: "1.125rem",
}));
const Wrapper = styled(Box)(() => ({
  marginRight: "0.5rem",
  marginLeft: "0.5rem",
  scrollSnapAlign: "start",
  flexShrink: "0",
  display: "flex",
  width: "100%",
  margin: "0",
  alignItems: "center",
}));

const ImgWrapper = styled(Box)(({ theme }) => ({
  width: "32%",
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
  flexShrink: "0",
  [theme.breakpoints.up("md")]: {
    width: "20%",
  },
  display: "flex",
  alignItems: "center",
  height: "100%",
}));
const TextWrapper = styled(Box)(() => ({
  fontSize: "0.75rem",
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
}));
const PremieredText = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));
