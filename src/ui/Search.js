import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const getText = (e) => {
    setText(e.target.value);
    getQuery(e.target.value);
  };

  return (
    <section className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="from-control"
          placeholder="Search Characters"
          value={text}
          onChange={(e) => getText(e)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
