import React, { useEffect } from "react";
import { useState } from "react";
import ManagerApproval from "../layout/ManagerApproval";
import NavbarManager from "../layout/navbarManager";
// import AddManager from '../layout/AddManager';
// import EditManager from '../layout/EditManager';
import "./css/style.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Manager() {
  let navigate = useNavigate();

  // const location = useLocation();
  // let name = new URLSearchParams(location.search).get("name");

  useEffect(() => {
    !localStorage.getItem("token") ? navigate("/") : navigate("/Manager");
  });

  const [manager, setManager] = useState(<ManagerApproval />);
  // const [addOperatorShow, setAddOperatorShow] = useState(false);

  return (
    <div>
      <div>
        {/* <NavbarManager setManager={setManager} setAddOperatorShow={setAddOperatorShow} 
        addOperatorShow={addOperatorShow} /> */}

        <NavbarManager setManager={setManager} />
      </div>

      {/* <div>


        {addOperatorShow && (
          <button class="ml-2 btn btn-danger btn-sm pt-4 mt-5 mx-5" onClick={() => setManager(<AddManager />)}>
            Add New Operator
          </button>
      ) }

      </div> */}

      <div class="pt-2 my-4">
        {/* <ManagerApproval /> */}
        {manager}
      </div>
    </div>
  );
}
