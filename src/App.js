import Login from "./pages/Login";
import React from 'react';
import Operator from "./pages/Operator";
// import Tool from "./pages/Tool";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Admin from "./pages/Admin";
import Ledger from "./layout/Ledger";
import ManagerApproval from "./layout/ManagerApproval";
import Modal from "./modal/Modal";
import Manager from "./pages/Manager";
import AllOperator from "./layout/AllOperator";
import EditManager from "./layout/EditManager";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Operator" element={<Operator />} />
          {/* <Route exact path="/Tool" element={<Tool />} /> */}
          <Route exact path="/Admin" element={<Admin />} />
          <Route exact path="/Ledger" element={<Ledger />} />
          <Route exact path="/Manager" element={<Manager />} />


          <Route exact path="/editManager" element={<EditManager />} />
          
          <Route exact path="/AllOperator" element={<AllOperator />} />
          <Route exact path="/ManagerApproval" element={<ManagerApproval />} />
          <Route exact path="/Modal" element={<Modal />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
