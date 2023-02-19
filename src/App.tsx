import { Box, styled } from "@mui/material";
import { getAuth } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import MovieShows from "./components/MovieShows";
import ScroolToTopButton from "./components/ScroolToTopButton";
import { app } from "./firebaseConfig";
import Detail from "./pages/Detail";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import PeopleDetails from "./pages/PeopleDetails";
import Profile from "./pages/Profile";
import Recent from "./pages/Recent";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import WatchList from "./pages/WatchList";
import { ApplicationState } from "./redux/root/rootReducer";
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
        <Route
          path="/movie/details/:id"
          element={
            <ProptectedRoute>
              <Detail varient="movie" />
            </ProptectedRoute>
          }
        />
        <Route
          path="/tv/details/:id"
          element={
            <ProptectedRoute>
              <Detail varient="tv" />
            </ProptectedRoute>
          }
        />
        <Route
          path="/people/:id"
          element={
            <ProptectedRoute>
              <PeopleDetails />
            </ProptectedRoute>
          }
        />
        <Route
          path="/recent"
          element={
            <ProptectedRoute>
              <Recent />
            </ProptectedRoute>
          }
        />
        <Route
          path="/watchlist"
          element={
            <ProptectedRoute>
              <WatchList />
            </ProptectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProptectedRoute>
              <Profile />
            </ProptectedRoute>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ScroolToTopButton />
    </Wrapper>
  );
}
export default App;

const ProptectedRoute = ({ children }: { children: JSX.Element }) => {
  const user = useSelector((state: ApplicationState) => state.user);
  const navigate = useNavigate();
  if (!user) {
    navigate("/signin");
  }
  // else (!user.emailVerified) {

  // }
  return children;
};

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
