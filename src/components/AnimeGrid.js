import React from "react";
import AnimeInfo from "./AnimeInfo";

const AnimeGrid = ({ isLoading, animeList }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {animeList.map((anime) => (
        <AnimeInfo key={anime.mal_id} anime={anime} />
      ))}
    </section>
  );
};

export default AnimeGrid;
