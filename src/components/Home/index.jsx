import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Shine Mathew</p>
          <p>Software Developer</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/sm.jpg`}
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;
