import React, { useContext } from "react";
import AnimeInfoCard from "./AnimeInfoCard";
import AnimeContext from "../../context/animeContext/AnimeContext";

const AnimeGrid = () => {
  const { animeList, isLoading } = useContext(AnimeContext);

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
