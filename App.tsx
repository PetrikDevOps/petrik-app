import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import News from './pages/news';

import Helyettesites from './pages/helyettesites';
import ClassSelection from './pages/classSelection';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/ht" element={<Helyettesites />} />
        <Route path="/cs" element={<ClassSelection />} />
      </Routes>

    </Router>
  );
}