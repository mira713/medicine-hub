import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/covid">
        <div className="text_inside_first_header_row">COVID19</div>
      </Link>
    </div>
  );
};

export default Navbar;
