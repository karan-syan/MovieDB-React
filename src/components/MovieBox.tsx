import { Box, styled } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import { firebaseConfig } from "../firebaseConfig";
import { IMovie_distructing } from "../utils/ApiDistruct";
import { IMovie } from "../utils/type";
import { MOVIE_DB_IMG_URL } from "../utils/url";

export default function MovieBox({ item }: { item: IMovie }) {
  const navigate = useNavigate();
  const { I_name, poster_path, id, title } = IMovie_distructing(item);
  const app = initializeApp(firebaseConfig);
  const user = getAuth(app).currentUser;
  const imgRef = useRef<HTMLImageElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  return (
    <Root
      onClick={() => {
        if (user) {
          I_name
            ? navigate(`/tv/details/${id}`)
            : navigate(`/movie/details/${id}`);
        } else {
          navigate("/signin");
        }
      }}
    >
      <Img
        ref={imgRef}
        src={`${MOVIE_DB_IMG_URL}${poster_path}`}
        alt={title}
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
  width: "32%",
  marginInline: "0.5%",
  flexShrink: "0",
  display: "inline-block",
  marginBottom: "0.5rem",
  overflow: "hidden",
  cursor: "pointer",
  borderRadius: "0.125rem",
  [theme.breakpoints.up("sm")]: {
    borderRadius: "0.75rem",
  },
  [theme.breakpoints.up("md")]: {
    width: "19%",
    marginBottom: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    marginBottom: "1.3rem",
    width: "15%",
  },
}));

const Img = styled("img")(({ theme }) => ({
  borderRadius: "0.5rem",
  width: "100%",
  objectFit: "cover",
  display: "none",
  height: "100%",
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
