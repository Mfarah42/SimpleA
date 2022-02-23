import React, { Fragment } from "react";
import Search from "../components/anime/Search";
import AnimeGrid from "../components/anime/AnimeGrid";

const Home = () => {
  return (
    <Fragment>
      <Search />
      <AnimeGrid />
    </Fragment>
  );
};

export default Home;
