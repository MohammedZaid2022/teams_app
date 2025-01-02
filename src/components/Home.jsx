import React from "react";
import { Link } from "react-router-dom"; // For navigation

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to My Basic App</h1>
        <p>This is a simple React application built with Vite.</p>
        <ul>
          <li>React Framework: Vite</li>
          <li>Purpose: A demo app with basic details</li>
          <li>Author: Developer</li>
        </ul>
      </header>

      <footer>
        <p>
          <Link to="/privacy">Privacy Policy</Link> | 
          <Link to="/terms">Terms of Use</Link>
        </p>
      </footer>
    </div>
  );
};

export default Home;
