import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { Route, Routes } from "react-router-dom";
import { auth } from "./firebase/firebaseConfig";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MoviesDetails from "./pages/MoviesDetails";
import PeopleDetails from "./pages/PeopleDetails";
import Playlist from "./pages/Playlist";
import PlaylistDetails from "./pages/PlaylistDetails";
import Recent from "./pages/Recent";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TvDetails from "./pages/TvDetails";
import TvShows from "./pages/TvShows";
import UserDetails from "./pages/UserDetails";
import store from "./redux/store";
import { CallUserDetail } from "./redux/user/action";

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) store.dispatch(CallUserDetail(user));
    });
  }, []);

  return (
    <>
      <SkeletonTheme baseColor="#f3f3f3" highlightColor="#ecebeb">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/shows" element={<TvShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/details/:id" element={<MoviesDetails />} />
          <Route path="/tv/details/:id" element={<TvDetails />} />
          <Route path="/people/:id" element={<PeopleDetails />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/userdetails" element={<UserDetails />} />
          <Route path="/recent" element={<Recent />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/playlist/detail/:id" element={<PlaylistDetails />} />
        </Routes>
      </SkeletonTheme>
    </>
  );
}

export default App;
