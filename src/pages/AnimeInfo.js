import React, { useEffect, useContext } from "react";
import AnimeContext from "../context/animeContext/AnimeContext";
import { useParams } from "react-router-dom";

const AnimeInfo = () => {
  const { fetchAnime, anime } = useContext(AnimeContext);
  const params = useParams();
  useEffect(() => {
    fetchAnime(params.id);
  }, []);
  return (
    <div>
      <h1>ANIME PAGE</h1>
    </div>
  );
};
export default AnimeInfo;
