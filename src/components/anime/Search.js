import React, { useState, useContext } from "react";
import AnimeContext from "../../context/animeContext/AnimeContext";

const Search = () => {
  const { debounceChangeHandler } = useContext(AnimeContext);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    debounceChangeHandler(text);
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
          className="from-control bl"
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
