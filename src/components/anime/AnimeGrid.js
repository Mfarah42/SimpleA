import React from "react";
import AnimeInfoCard from "./AnimeInfoCard";

const AnimeGrid = ({ isLoading, animeList }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {animeList.map((anime) => (
        <AnimeInfoCard key={anime.mal_id} anime={anime} />
      ))}
    </section>
  );
};

export default AnimeGrid;
