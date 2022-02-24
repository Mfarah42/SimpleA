import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimeProvider } from "./context/animeContext/AnimeContext";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import AnimeInfo from "./pages/AnimeInfo";
import "./App.css";

function App() {
  return (
    <AnimeProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/anime/:title" element={<AnimeInfo />} />
          </Routes>
        </div>
      </Router>
    </AnimeProvider>
  );
}
export default App;
