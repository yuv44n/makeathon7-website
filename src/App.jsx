import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from './components/Footer/Footer';

import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import AboutUs from "./pages/AboutUs";
import Tracks from "./pages/Tracks";
import Sponsors from "./pages/Sponsors";
import AppPolicy from "./pages/AppPolicy";
import HamburgerMenu from './components/Hamburger/HamburgerMenu';
import { Ham } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Router>
        <HamburgerMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/policy" element={<AppPolicy />} />
        </Routes>
    </Router>
  );
}

export default App;
