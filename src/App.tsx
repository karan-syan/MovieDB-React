import { Box, styled } from "@mui/material";
import { getAuth } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MovieShows from "./components/MovieShows";
import ScroolToTopButton from "./components/ScroolToTopButton";
import { app } from "./firebaseConfig";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import MoviesDetails from "./pages/MoviesDetails";
import PeopleDetails from "./pages/PeopleDetails";
import Recent from "./pages/Recent";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TvDetails from "./pages/TvDetails";
import WatchList from "./pages/WatchList";
import { setUser } from "./redux/User/action";
import { maxWidthScreen } from "./utils/constants";

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  window.addEventListener("scroll", () => {
    const currentScrollPos = window.scrollY;
    if (navRef.current) {
      if (currentScrollPos < prevScrollPos) {
        navRef.current.style.top = "0";
      } else {
        navRef.current.style.top = "-7.5vh";
      }
    }
    setPrevScrollPos(currentScrollPos);
  });

  useEffect(() => {
    getAuth(app).onAuthStateChanged((user) => {
      dispatch(setUser(user));
    });
  }, [dispatch]);

  return (
    <Wrapper>
      <HeaderWrapper ref={navRef}>
        <Header />
      </HeaderWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/shows" element={<MovieShows varient="tv" />} />
        <Route path="/movies" element={<MovieShows varient="movie" />} />
        <Route path="/movie/details/:id" element={<MoviesDetails />} />
        <Route path="/tv/details/:id" element={<TvDetails />} />
        <Route path="/people/:id" element={<PeopleDetails />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ScroolToTopButton />
    </Wrapper>
  );
}
export default App;

const Wrapper = styled(Box)(() => ({
  width: "100%",
  maxWidth: maxWidthScreen,
  margin: "0px auto",
}));
const HeaderWrapper = styled(Box)(() => ({
  position: "sticky",
  top: "0",
  width: "100%",
  zIndex: "999999",
  transition: "all 300ms",
}));
