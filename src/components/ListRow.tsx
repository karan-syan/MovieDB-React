import { Box, styled, Typography } from "@mui/material";
import { IMovie } from "../utils/type";
import HorizontalScrollBtnWrapper from "./HorizontalScrollBtnWrapper";
import MovieBox from "./MovieBox";
interface Props {
  item: IMovie;
  title?: string;
}
export default function ListRow({ item, title }: Props) {
  const { results } = item;
  return (
    <Root>
      {title && (
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
      )}
      <HorizontalScrollBtnWrapper item={
        <>
          {
            results.map((val, index) => {
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
            })
          }
        </>
      } />
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