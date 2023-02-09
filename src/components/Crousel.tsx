// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Box, createTheme, styled } from "@mui/material";
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
      // navButtonsAlwaysVisible
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
          <div
            className="flex w-full cursor-pointer"
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
            <div
              className="flex-col z-0 justify-center w-1/2 text-sm relative font-extralight hidden md:flex md:px-2 xl:text-lg"
              style={{ background: "#00040a", paddingLeft: "40px" }}
            >
              <h1 className="mb-1 text-base xl:text-xl font-extrabold">
                {title ? title : name}
              </h1>
              <h1 className="mb-2 opacity-50 text-xm xl:text-base">
                {release_date ? release_date : first_air_date}
              </h1>
              <h1 className="mb-1 line-clamp-3 w-11/12">{overview}</h1>
            </div>
            <div
              className="w-1/5 z-10 absolute hidden h-full md:inline-block"
              style={{
                left: "39.85%",
                backgroundImage:
                  "linear-gradient(to right, #00040a, rgba(255,0,0,0))",
              }}
            ></div>
            <img
              src={`${MOVIE_DB_IMG_URL}${backdrop_path}`}
              className="block w-full md:w-3/5 z-0"
              alt="..."
            />
          </div>
        );
      })}
    </Carousel>
  );
}

const CrouselImgContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  position: "relative",
  justifyContent: "center",
  height: "16vh",
  alignItems: "center",
  marginBottom: "10px",
  [theme.breakpoints.up("md")]: {
    height: "40vh",
  },
  [theme.breakpoints.up("lg")]: {
    height: "60vh",
  },
}));
const Banner = styled("img")(({ theme }) => ({
  minWidth: "60%",
  height: "100%",
  borderRadius: "30px",
  objectFit: "cover",
  position: "relative",
}));
const ImgOverLay = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "20%",
  display: "inline-block",
  left: "40%",
  height: "100%",
  zIndex: 1,
  backgroundImage: `linear-gradient(to right, ${theme.palette.background.default}, transparent)`,
}));
const Img = styled("img")(({ theme }) => ({
  borderRadius: "30px",
  margin: "5px",
  zIndex: "1",
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    marginLeft: "56px",
  },
  height: "80%",
  objectFit: "fill",
}));
const Container = styled(Box)(({ theme }) => ({
  width: "60%",
  height: "100%",
  background: `${theme.palette.background.default}`,
  // backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, transparent)`,
}));

// sx={{
//   display: "flex",
//   alignItems: "center",
//   flexDirection: "column",
//   width: "100%",
//   borderRadius: "30px",
//   marginBottom: "12px",
//   height: "19vh",
//   [theme.breakpoints.up("md")]: {
//     height: "43vh",
//   },
//   [theme.breakpoints.up("lg")]: {
//     height: "63vh",
//   },
// }}
