import React from 'react'
import { useState } from 'react';
import ManagerApproval from '../layout/ManagerApproval'
import NavbarManager from '../layout/navbarManager'
// import AddManager from '../layout/AddManager';
// import EditManager from '../layout/EditManager';
import "./css/style.css"

export default function Manager() {

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
  )
}
