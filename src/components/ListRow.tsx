import { Box, styled, Typography } from "@mui/material";
import { IMovie } from "../utils/type";
import MovieBox from "./MovieBox";

export default function ListRow({
  item,
  title,
}: {
  item: IMovie;
  title?: string;
}) {
  const { results } = item;
  return (
    <Root>
      {title && (
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
      )}
      <Container>
        {results.map((val, index) => {
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
      </Container>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "1.25rem",
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
