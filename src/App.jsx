import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/PrivacyPolicy";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/terms" element={<TermsOfUse/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
