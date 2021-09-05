import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Security from "./components/pages/Security";

function App() {
  return (
    <Router>
      <div >
        <Security/>
      </div>
    </Router>
  );
}

export default App;
