import { SkeletonTheme } from "react-loading-skeleton";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MoviesDetails from "./pages/MoviesDetails";
import PeopleDetails from "./pages/PeopleDetails";
import Search from "./pages/Search";
import TvShows from "./pages/TvShows";
import TvDetails from "./pages/TvDetails";
import Login from "./pages/SignUp";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
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
        </Routes>
      </SkeletonTheme>
    </>
  );
}

export default App;
