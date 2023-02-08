import { Box, styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { CallCrouselSlider } from "../redux/Crousel/action";
import { CallMovies } from "../redux/Main/action";
import { ApplicationState } from "../redux/root/rootReducer";
import { maxWidthScreen, Popular } from "../utils/constants";
import { popular_movie_url, popular_tv_url } from "../utils/url";
import ButtonGroup from "./ButtonGroup";
import Crousel from "./Crousel";
import InfiniteScrolling from "./InfiniteScrolling";
import ScroolToTopButton from "./ScroolToTopButton";

interface Props {
  varient: "movie" | "tv";
}

const MovieShows = (props: Props) => {
  const { varient } = props;
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();
  const crouselSlider = useSelector(
    (state: ApplicationState) => state.tv.CrouselSlider
  );
  const moviesData = useSelector((state: ApplicationState) => state.tv.Tvs);
  const btnGroupRef = useRef<HTMLDivElement>(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (btnGroupRef.current) {
      if (currentScrollPos < prevScrollPos) {
        btnGroupRef.current.style.top = "7.4vh";
      } else {
        btnGroupRef.current.style.top = "0";
      }
    }
    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (!query.has("type")) {
      setQuery({ type: Popular });
    }
    dispatch(
      CallCrouselSlider.request({
        url: varient === "tv" ? popular_tv_url : popular_movie_url,
        page: 1,
        NewData: true,
      })
    );

    if (query.has("type")) {
      fetchData(true, 1);
    }
  }, [dispatch, query.get("type")]);

  function fetchData(newdata: boolean, page: number) {
    dispatch(
      CallMovies.request({
        url: `${varient}/${query.get("type")}`,
        page: page,
        NewData: newdata,
      })
    );
  }
  return (
    <>
      <Root>
        {moviesData.loading && crouselSlider.loading ? (
          <BarLoader color="#36d7b7" />
        ) : (
          <Wrapper>
            <CrouselWrapper>
              <Crousel item={crouselSlider.Data} />
            </CrouselWrapper>
            <ButtonGroupWrapper ref={btnGroupRef}>
              <ButtonGroup varient={varient} />
            </ButtonGroupWrapper>
            <InfiniteScrolling moviesData={moviesData} fetchData={fetchData} />
          </Wrapper>
        )}
        <ScroolToTopButton />
      </Root>
    </>
  );
};

export default MovieShows;
const Root = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const Wrapper = styled(Box)(() => ({
  width: "100%",
  maxWidth: maxWidthScreen,
  margin: "0px auto",
}));
const CrouselWrapper = styled(Box)(() => ({
  width: "100%",
  maxWidth: maxWidthScreen,
  margin: "0px auto",
  float: "none",
}));
const ButtonGroupWrapper = styled(Box)(() => ({
  backgroundImage: "linear-gradient(to right, #00040a, #08101c)",
  justifyContent: "center",
  paddingInline: "0.5rem",
  marginBottom: "0.75rem",
  position: "sticky",
  zIndex: "20",
  transition: "all 0.3s",
}));
