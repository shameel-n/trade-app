import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

class HomePg extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h3 className="head">Welcome to abctrading.com !!</h3>
        <br />

        <p className="magic">Happy Trading</p>
        <div className="bttn">
          <Link to="about" className="btn btn-info btn-lg">
            Learn more
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePg;
