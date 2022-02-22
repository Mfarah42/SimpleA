import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import AnimeGrid from "./components/AnimeGrid";
// import Search from "./ui/Search";
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
        `https://api.jikan.moe/v4/anime?q=one%20piece`
      );
      console.log(result.data.data[0]);
      console.log(typeof result.data.data);
      setAnimeList(result.data.data);
      setIsLoading(false);
    };
    fetchAnime();
  }, [query]);

  return (
    <div>
      <Header />
      <AnimeGrid isLoading={isLoading} animeList={animeList} />
    </div>
  );
}

export default App;
