import React from "react";

function Header(props) {
  return (
    <header>
      <h1>Semana Omnistack</h1>
      {props.children}
    </header>
  );
}

export default Header;
