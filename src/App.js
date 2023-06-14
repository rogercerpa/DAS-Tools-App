import React from "react"
import Home from "./Pages/Home"
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
