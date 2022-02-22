import React from "react";

const AnimeGrid = ({ isLoading, animeList }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      <h1>{typeof animeList}</h1>
    </section>
  );
};

export default AnimeGrid;
