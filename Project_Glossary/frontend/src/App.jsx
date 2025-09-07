import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CloudServices from "./components/CloudServices";
import ServiceRouter from "./components/ServiceRouter";
import SearchPage from "./components/SearchPage";
import ServiceCreate from "./components/ServiceCreate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CloudServices />} />
        <Route path="/service/:serviceName" element={<ServiceRouter />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/create" element={<ServiceCreate />} />
      </Routes>
    </Router>
  );
}

export default App;
