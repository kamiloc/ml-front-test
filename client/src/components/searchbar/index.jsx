import React, { useState } from "react";
import queryString from "query-string";

import "./index.scss";

export default function SearchBar() {
  const { search } = queryString.parse(window.location.search);
  const [searchTerm, setSearchTerm] = useState(search || "");

  const handleChangeInput = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  return (
    <form className="searchbar" action="/items">
      <input
        name="search"
        className="searchbar__input"
        type="text"
        value={searchTerm}
        placeholder="Nunca dejes de buscar"
        onChange={handleChangeInput}
      />
      <button className="searchbar__button"></button>
    </form>
  );
}
