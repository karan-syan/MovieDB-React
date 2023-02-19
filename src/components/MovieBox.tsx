import { Box, styled } from "@mui/material";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import { setRecentData } from "../firebase/recentData";
import { MOVIE_DB_IMG_URL } from "../utils/url";
interface Props {
  id: number;
  posterPath: string;
  varient: "movies" | "shows";
}
export default function MovieBox(props: Props) {
  const navigate = useNavigate();
  const { id, posterPath, varient } = props;
  const imgRef = useRef<HTMLImageElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  return (
    <Root
      onClick={() => {
        if (varient === "shows") {
          setRecentData(id, posterPath, "tv");
          navigate(`/tv/details/${id}`);
        } else {
          setRecentData(id, posterPath, "movie");
          navigate(`/movie/details/${id}`);
        }
      }}
    >
      <Img
        ref={imgRef}
        src={`${MOVIE_DB_IMG_URL}${posterPath}`}
        alt={id.toString()}
        onLoad={() => {
          if (imgRef.current && loaderRef.current) {
            imgRef.current.style.display = "flex";
            loaderRef.current.style.display = "none";
          }
        }}
      />
      <ImgLoader ref={loaderRef}>
        <CircleLoader color="#36d7b7" />
      </ImgLoader>
    </Root>
  );
}
const Root = styled(Box)(({ theme }) => ({
  width: "32.5%",
  marginInline: "0.3%",
  flexShrink: "0",
  display: "inline-block",
  marginBottom: "0.3rem",
  overflow: "hidden",
  cursor: "pointer",
  borderRadius: "0.125rem",
  [theme.breakpoints.up("sm")]: {
    borderRadius: "0.75rem",
  },
  [theme.breakpoints.up("md")]: {
    width: "19.25%",
    marginBottom: "0.6rem",
  },
}));

const Img = styled("img")(({ theme }) => ({
  borderRadius: "0.5rem",
  width: "100%",
  objectFit: "cover",
  display: "none",
  height: "100%",
  transition: "all 500ms",
  ":hover": {
    transform: "scale(1.1)",
  },
}));
const ImgLoader = styled(Box)(({ theme }) => ({
  borderRadius: "0.5rem",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: theme.palette.secondary.main,
}));
