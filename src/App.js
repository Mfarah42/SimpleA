import React, { useState, useEffect, useMemo, useContext } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import AnimeGrid from "./components/anime/AnimeGrid";
import Search from "./components/anime/Search";
import { debounce } from "lodash";
import "./App.css";
import AnimeContext, {
  AnimeProvider,
} from "./context/animeContext/AnimeContext";

function App() {
  // const [animeList, setAnimeList] = useState([]);
  // const [characters, setCharacters] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [query, setQuery] = useState("");
  // const { animeList, isLoading } = useContext(AnimeContext);

  // useEffect(() => {
  //   const fetchAnime = async () => {
  //     setIsLoading(true);
  //     const result = await axios(
  //       `https://api.jikan.moe/v4/anime?q=${query}&order_by=score&&sort=desc`
  //     );
  //     setAnimeList(result.data.data);
  //     setIsLoading(false);
  //   };
  //   fetchAnime();
  // }, [query]);

  // const getQuery = (q) => {
  //   setQuery(q);
  // };
  // const debounceChangeHandler = useMemo(() => debounce(getQuery, 200), []);
  return (
    <AnimeProvider>
      <div>
        <Header />
        <Home />
        {/* <Search getQuery={debounceChangeHandler} /> */}
      </div>
    </AnimeProvider>
  );
}

export default App;
