import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import AboutUs from './pages/AboutUs';
import Tracks from './pages/Tracks';
import Sponsors from './pages/Sponsors';
import AppPolicy from './pages/AppPolicy';
import HamburgerMenu from './components/Hamburger/HamburgerMenu';
import { Ham } from 'lucide-react';

function App() {
  return (
    <Router>
        <HamburgerMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Navigate to="/" />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/tracks" element={<Navigate to="/" />} />
          {/* Redirect /sponsors to the home page */}
          <Route path="/sponsors" element={<Navigate to="/" />} />
          <Route path="/policy" element={<AppPolicy />} />
        </Routes>
    </Router>
  );
}

export default App;