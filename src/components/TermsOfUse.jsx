import React from "react";
import { Link } from "react-router-dom"; // Use react-router for navigation

const TermsOfUse = () => {
  return (
    <div className="terms-page">
      <h1>Terms of Use</h1>
      <p>By using this app, you agree to the following terms:</p>
      <ul>
        <li>Users must comply with the app's usage guidelines.</li>
        <li>The app is provided "as is" without any guarantees.</li>
      </ul>

      <footer>
        <Link to="/">Back to Home</Link>
      </footer>
    </div>
  );
};

export default TermsOfUse;
