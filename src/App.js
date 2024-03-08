import './App.css';
import React from 'react';
import Home from './components/Home';
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Home />
    </div>
    </BrowserRouter>
  );
}

export default App;
