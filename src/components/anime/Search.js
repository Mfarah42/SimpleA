import React, { useState, useContext, useEffect } from "react";
import AnimeContext from "../../context/animeContext/AnimeContext";

const Search = () => {
  const { debounceChangeHandler } = useContext(AnimeContext);

  const [text, setText] = useState("");

  useEffect(() => {
    console.log("UseEffect Called");
    debounceChangeHandler("");
  }, []);

  const handleChange = (e) => {
    console.log("HandleChange Called");
    setText(e.target.value);
    debounceChangeHandler(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Search is empty");
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
      {text === "" && <h1 className="title center">Top Anime</h1>}
    </section>
  );
};

export default Search;
