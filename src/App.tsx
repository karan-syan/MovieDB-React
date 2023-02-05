import { Route, Routes, useLocation } from "react-router-dom";
import MovieShows from "./components/MovieShows";
import Home from "./pages/Home";
import MoviesDetails from "./pages/MoviesDetails";
import PeopleDetails from "./pages/PeopleDetails";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TvDetails from "./pages/TvDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/shows" element={<MovieShows varient="tv" />} />
        <Route path="/movies" element={<MovieShows varient="movie" />} />
        <Route path="/movie/details/:id" element={<MoviesDetails />} />
        <Route path="/tv/details/:id" element={<TvDetails />} />
        <Route path="/people/:id" element={<PeopleDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
