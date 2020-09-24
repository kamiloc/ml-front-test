import React from "react";
import SearchBar from "components/searchbar";

import logo from "assets/images/logo_ml.png";

export default function Layout({ children }) {
  return (
    <div className="app">
      <header className="app__header">
        <div className="app__header__wrap">
          <a href="/">
            <img className="app__header__logo" src={logo} alt="Logo Mercado Libre" />
          </a>

          <SearchBar />
        </div>
      </header>
      <div className="app__container">{children}</div>
    </div>
  );
}
