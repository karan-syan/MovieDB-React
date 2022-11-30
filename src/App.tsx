import { SkeletonTheme } from "react-loading-skeleton";
import { Route, Routes } from "react-router-dom";
import Genres from "./pages/Genres";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MoviesDetails from "./pages/MoviesDetails";
import PeopleDetails from "./pages/PeopleDetails";
import Search from "./pages/Search";
import TvShows from "./pages/TvShows";
import Trending from "./pages/Trending";
import TvDetails from "./pages/TvDetails";

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#f3f3f3" highlightColor="#ecebeb">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/shows" element={<TvShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/movie/details/:id" element={<MoviesDetails />} />
          <Route path="/tv/details/:id" element={<TvDetails />} />
          <Route path="/people/:id" element={<PeopleDetails />} />
        </Routes>
      </SkeletonTheme>
    </>
  );
}

export default App;
