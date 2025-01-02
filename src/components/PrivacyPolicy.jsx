import React from "react";
import { Link } from "react-router-dom"; // Use react-router for navigation

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <h1>Privacy Policy</h1>
      <p>This is a dummy privacy policy for testing purposes. No personal data is collected by this app.</p>
      <p>By using this app, you agree to the collection of non-personally identifiable information for app functionality.</p>

      <footer>
        <Link to="/">Back to Home</Link>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
