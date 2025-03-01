import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import AboutUs from './pages/AboutUs';
import Tracks from './pages/Tracks';
import Sponsors from './pages/Sponsors';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
    </Router>
  );
}

export default App;