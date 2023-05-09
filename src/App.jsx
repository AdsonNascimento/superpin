import Home from './pages/Home.jsx'
import SobreSuperpin from './pages/SobreSuperpin.jsx'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<SobreSuperpin />} />
      {/* <Route path="/contact" component={Contact} />
          <Route component={NotFound} /> */}
    </Routes>
  );
}

export default App;