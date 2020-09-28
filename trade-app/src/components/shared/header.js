import React from "react";
import { Link, NavLink } from "react-router-dom";
import Banner from "../../images/HeaderImage.png";
//import Logo from "../../images/EMovies.png";
import "./header.css";

class HeaderPg extends React.Component {
  render() {
    const mystyle2 = {
      paddingTop: "0px",
      paddingLeft: "10px",
      paddingRight: "10px",
      color: "darkslateblue",
      fontSize: "23px",
      fontFamily: "Quicksand",
    };

    return (
      <div>
        <img className="banner" src={Banner} alt="a"></img>
        <nav className="nvbar">
          <div className="routegrp1">
            <img src="" alt="abc"></img>
            <NavLink to="/" activeClassName="active" style={mystyle2}>
              Home
            </NavLink>
            {" | "}
            <Link to="/stocks" activeClassName="active" style={mystyle2}>
              Stocks
            </Link>
            {" | "}
            <Link to="/about" activeClassName="active" style={mystyle2}>
              About
            </Link>
            {" | "}
            <Link to="/contact" activeClassName="active" style={mystyle2}>
              Contact us
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderPg;
