import React, { useState, useContext, useMemo } from "react";
import AnimeContext from "../../context/animeContext/AnimeContext";
import { debounce } from "lodash";

const Search = () => {
  const { fetchAnime } = useContext(AnimeContext);

  const [text, setText] = useState("");
  const debounceChangeHandler = useMemo(
    () => debounce(fetchAnime, 1200),
    [fetchAnime]
  );
  const handleChange = (e) => {
    setText(e.target.value);
    fetchAnime(debounceChangeHandler);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("Text not entered");
    }
  };

  return (
    <section className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="from-control"
          placeholder="Search Anime"
          value={text}
          onChange={handleChange}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
