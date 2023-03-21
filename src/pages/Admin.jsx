import React, {  useState } from 'react';
import AddManager from '../layout/AddManager';
import AllManager from '../layout/AllManager';
// import AllManager from '../layout/AllManager';
// import EditManager from '../layout/EditManager'
import Navbar from '../layout/navbarAdmin'
// import { getAllManager } from '../services/UserService';


export default function Admin() {
  
  const [addm, setAdd] = useState(<AllManager />);


  // useEffect(()=>{
  //   const data = getAllManager();
  //   setAdd(data)
  // },[])
 
  return (
    <div>
    
      <div>

        <Navbar />
      </div>
        <div>
          <button class="ml-2 btn btn-danger btn-sm pt-4 mt-5 mx-5" onClick={() => setAdd(<AddManager />)}>
              Add New Manager
          </button>

          {/* <button class="ml-2 btn btn-danger btn-sm pt-4 mt-5" onClick={() => setAdd(<EditManager />)}>
              Edit Manager Details
          </button> */}

        </div>

        <div class="my-4">
          {addm}
        </div>
        
    </div>
  )
}
