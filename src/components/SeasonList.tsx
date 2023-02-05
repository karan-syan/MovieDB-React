import { Box, styled, Typography } from "@mui/material";
import { MOVIE_DB_IMG_URL } from "../utils/url";

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
      <Container>
        {item.map((item, index) => (
          <Wrapper key={index}>
            <ImgWrapper>
              <Img alt="" src={`${MOVIE_DB_IMG_URL}${item.poster_path}`} />
            </ImgWrapper>
            <TextWrapper>
              <Typography>Name: {item.name}</Typography>
              <Typography>Season: {item.season_number}</Typography>
              <Typography>Total Episodes: {item.episode_count}</Typography>
              <PremieredText className="hidden md:flex">
                {item.name} of {TvName} premiered on {item.air_date}
              </PremieredText>
            </TextWrapper>
          </Wrapper>
        ))}
      </Container>
    </Root>
  );
}

const Root = styled(Box)(() => ({
  marginTop: "0.5rem",
  width: "100%",
}));
const Img = styled("img")(() => ({
  objectFit: "fill",
  height: "100%",
  borderRadius: "10px",
}));
const Title = styled(Typography)(() => ({
  marginInline: "0.5rem",
  fontSize: "1.125rem",
}));
const Wrapper = styled(Box)(() => ({
  marginInline: "0.5rem",
  flexShrink: "0",
  display: "flex",
  width: "100%",
  margin: "0",
  alignItems: "center",
}));
const Container = styled(Box)(() => ({
  marginInline: "0.5rem",
  display: "flex",
  overflow: "auto",
  flexWrap: "nowrap",
  "::-webkit-scrollbar": {
    height: "0.5rem",
  },
}));

const ImgWrapper = styled(Box)(({ theme }) => ({
  width: "20%",
  marginInline: "0.5rem",
  flexShrink: "0",
  [theme.breakpoints.up("md")]: {
    width: "25%",
  },
  display: "flex",
  alignItems: "center",
  height: "100%",
}));
const TextWrapper = styled(Box)(() => ({
  fontSize: "0.75rem",
  marginInline: "0.5rem",
}));
const PremieredText = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));
