import React, { useContext } from "react";
import AnimeCard from "./AnimeCard";
import AnimeContext from "../../context/animeContext/AnimeContext";

const AnimeGrid = () => {
  const { animeList, isLoading } = useContext(AnimeContext);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {animeList.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </section>
  );
};

export default AnimeGrid;
