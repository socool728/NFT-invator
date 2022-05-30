import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Invator from './components/invator'

function App() {
  return (
    <div> 
      <Router>
      <Invator />
        {/* <Routes>
          <Route path="/" element={<Invator />} />
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
