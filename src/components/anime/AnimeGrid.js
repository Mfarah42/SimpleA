import React, { useContext } from "react";
import AnimeCard from "./AnimeCard";
import AnimeContext from "../../context/animeContext/AnimeContext";
import Spinner from "../layout/Spinner";

const AnimeGrid = () => {
  const { animeList, isLoading } = useContext(AnimeContext);

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {animeList.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </section>
  );
};

export default AnimeGrid;
