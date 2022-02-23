import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Header from "./components/layout/Header";
import AnimeGrid from "./components/anime/AnimeGrid";
import Search from "./components/anime/Search";
import { debounce } from "lodash";
import "./App.css";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchAnime = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://api.jikan.moe/v4/anime?q=${query}&order_by=score&&sort=desc`
      );
      setAnimeList(result.data.data);
      setIsLoading(false);
    };
    fetchAnime();
  }, [query]);

  const getQuery = (q) => {
    setQuery(q);
  };
  const debounceChangeHandler = useMemo(() => debounce(getQuery, 200), []);
  return (
    <div>
      <Router>
        <Header />
        <Search getQuery={debounceChangeHandler} />
        <AnimeGrid isLoading={isLoading} animeList={animeList} />
      </Router>
    </div>
  );
}

export default App;
