import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import Invator from './components/invator'
import Settings from './components/settings'

function App() {
  return (
    <div> 
      <Router>
      <Invator />
        <Routes>
          <Route path="/" element={<Invator />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
