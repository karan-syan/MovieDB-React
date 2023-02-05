import { Box, styled, Typography } from "@mui/material";
import { IMovie } from "../utils/type";
import MovieBox from "./MovieBox";

export default function ListRow({
  item,
  title,
}: {
  item: IMovie[];
  title?: string;
}) {
  return (
    <Root>
      {title && (
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
      )}
      <Container>
        {item.map((val, index) => {
          if (val.poster_path !== null && val.poster_path !== "") {
            return <MovieBox key={index} item={val} />;
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
  marginInline: "0.75rem",
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
    marginTop: "1rem",
    height: "0.5rem",
  },
  flexWrap: "nowrap",
}));
