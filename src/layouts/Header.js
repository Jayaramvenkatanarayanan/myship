import React from "react";
import NavItems from "./NavItems";

function Header() {
  return (
    <>
      <header>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MyShipApp</title>
      </header>
      <NavItems />
    </>
  );
}

export default Header;
