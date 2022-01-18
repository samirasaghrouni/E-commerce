import React from "react";
import { Link } from "react-router-dom";
import TER from "../assets/TER.jpg";
import "../styles/Home.css";

function Home() {
  return (
  
    <div className="row">
      <div className="headerContainer" class="col">
        <h1> Dar Ellaoula </h1>
        <p> This is any informal space open
           </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
      <div className="col"
style={{ backgroundImage: `url(${TER})` }}

></div>
    </div>
  );
}

export default Home;