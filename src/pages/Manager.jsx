import React from 'react'
import { useState } from 'react';
import ManagerApproval from '../layout/ManagerApproval'
import NavbarManager from '../layout/navbarManager'
import AddManager from '../layout/AddManager';
// import EditManager from '../layout/EditManager';

export default function Manager() {

  const [manager, setManager] = useState(<ManagerApproval />);
  const [addOperatorShow, setAddOperatorShow] = useState(false);

  return (
    <div>
      <div>
        <NavbarManager setManager={setManager} setAddOperatorShow={setAddOperatorShow} 
        addOperatorShow={addOperatorShow} />
      </div>

      <div>
        {/* <button class="ml-2 btn btn-danger btn-sm pt-4 mt-5 mx-5" onClick={() => setManager(<AddManager />)}>
            Add New Operator
        </button> */}

        {addOperatorShow && (
          <button class="ml-2 btn btn-danger btn-sm pt-4 mt-5 mx-5" onClick={() => setManager(<AddManager />)}>
            Add New Operator
          </button>
      ) }

      </div>
        

        <div class=" my-4">
          {/* <ManagerApproval /> */}
          {manager}
        </div>
    </div>
  )
}
