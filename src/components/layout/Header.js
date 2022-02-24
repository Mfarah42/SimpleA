import React from "react";
import onepieceLogo from "../../img/onepunch.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to={"/"}>
      <header className="center">
        <img src={onepieceLogo} alt="One Piece Logo" />
      </header>
    </Link>
  );
};

export default Header;
