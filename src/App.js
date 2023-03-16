import Login from "./pages/Login";
import React from 'react';
import ManagerHome from "./pages/ManagerHome";
import OperatorHome from "./pages/OperatorHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/OperatorHome" element={<OperatorHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
