import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui two item menu">
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/new" className="item">
        Add a New Todo
      </Link>
    </div>
  );
};

export default Navbar;
