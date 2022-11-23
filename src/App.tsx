import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Genres from "./pages/Genres";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Search from "./pages/Search";
import Shows from "./pages/Shows";
import Trending from "./pages/Trending";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/genres" element={<Genres />} />
      </Routes>
    </>
  );
}

export default App;
