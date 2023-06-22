import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import News from './pages/news';

import Helyettesites from './pages/helyettesites';
import ClassSelection from './pages/classSelection';

import Busz from './pages/busz';

import Profile from './pages/profile';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/ht" element={<Helyettesites />} />
        <Route path="/b" element={<Busz />} />
        <Route path="/p" element={<Profile />} />
      </Routes>

    </Router>
  );
}