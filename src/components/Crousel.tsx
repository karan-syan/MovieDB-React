// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Box, createTheme, styled, Typography } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Carousel from "react-material-ui-carousel";
import { useNavigate } from "react-router-dom";
import { firebaseConfig } from "../firebaseConfig";
import { IMovie } from "../utils/type";
import { MOVIE_DB_IMG_URL } from "../utils/url";

export default function Crousel({ item }: { item: IMovie[] }) {
  const navigate = useNavigate();
  const app = initializeApp(firebaseConfig);
  const user = getAuth(app).currentUser;
  const theme = createTheme();
  return (
    <Carousel
      autoPlay={true}
      duration={450}
      IndicatorIcon={
        <HorizontalRuleIcon
          sx={{
            fontSize: "1.3rem",
            [theme.breakpoints.up("sm")]: {
              fontSize: "2rem",
            },
          }}
        />
      }
      animation={"slide"}
      stopAutoPlayOnHover
    >
      {item.slice(0, 13).map((item, i) => {
        const {
          release_date,
          backdrop_path,
          id,
          overview,
          first_air_date,
          name,
          title,
        } = item;
        return (
          <Root
            key={id}
            onClick={() => {
              if (user) {
                name
                  ? navigate(`/tv/details/${id}`)
                  : navigate(`/movie/details/${id}`);
              } else {
                navigate("/signin");
              }
            }}
          >
            <DetailContainer>
              <Title>{title ? title : name}</Title>
              <Date>{release_date ? release_date : first_air_date}</Date>
              <Overview>{overview}</Overview>
            </DetailContainer>
            <ImgOverLay />
            <Img
              src={`${MOVIE_DB_IMG_URL}${backdrop_path}`}
              draggable={false}
              alt={title ? title : name}
            />
          </Root>
        );
      })}
    </Carousel>
  );
}

const Root = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  cursor: "pointer",
}));
const DetailContainer = styled(Box)(({ theme }) => ({
  display: "none",
  flexDirection: "column",
  justifyContent: "center",
  width: "50%",
  fontSize: "0.875rem",
  fontWeight: "200",
  background: theme.palette.secondary.main,
  paddingLeft: "40px",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    paddingRight: "0.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.125rem",
  },
}));
const ImgOverLay = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "20%",
  display: "none",
  left: "40%",
  height: "100%",
  zIndex: 1,
  backgroundImage: `linear-gradient(to right, ${theme.palette.secondary.main}, transparent)`,
  [theme.breakpoints.up("md")]: {
    display: "inline-block",
  },
}));
const Img = styled("img")(({ theme }) => ({
  display: "block",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "60%",
  },
}));
const Title = styled(Typography)(({ theme }) => ({
  marginBottom: "0.25rem",
  fontSize: "1rem",
  fontWeight: "800",
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.25rem",
  },
}));
const Date = styled(Typography)(({ theme }) => ({
  marginBottom: "0.5rem",
  opacity: "0.5",
  fontSize: "0.75rem",
  fontWeight: "800",
  [theme.breakpoints.up("lg")]: {
    fontSize: "1rem",
  },
}));
const Overview = styled(Typography)(({ theme }) => ({
  opacity: "0.5",
  marginBottom: "0.25rem",
  width: "91%",
  overflow: "hidden",
  display: "-webkit-box",
  "-webkit-box-orient": "vertical",
  "-webkit-line-clamp": "3",
}));
