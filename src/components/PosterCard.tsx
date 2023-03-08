import { Box, styled } from "@mui/material";
import React from "react";
import { MOVIE_DB_IMG_URL } from "../utils/url";

export default function PosterCard({ Poster_Path }: { Poster_Path: string }) {
  return (
    <Root>
      <Img alt="..." src={MOVIE_DB_IMG_URL + Poster_Path} />
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  width: "25%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));
const Img = styled("img")(({ theme }) => ({
  width: "50%",
  marginTop: "2rem",
  borderRadius: "0.75rem",
  filter: "drop-shadow(0 0 0.75rem #000)",
  [theme.breakpoints.up("md")]: {
    width: "100%",
    marginLeft: "1.75rem",
    borderRadius: "1.5rem",
  },
}));
