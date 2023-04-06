import React, { useEffect, useState } from "react";
import AddManager from "../layout/AddManager";
import AllManager from "../layout/AllManager";
// import AllManager from '../layout/AllManager';
// import EditManager from '../layout/EditManager'
import Navbar from "../layout/navbarAdmin";
// import { getAllManager } from '../services/UserService';
import "./css/style.css";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  let navigate = useNavigate();
  const [admin, setAdmin] = useState(<AllManager />);
  const [showAdd, setShowAdd] = useState(true);

  // useEffect(()=>{
  //   const data = getAllManager();
  //   setAdd(data)
  // },[])

  useEffect(() => {
    !localStorage.getItem("token") ? navigate("/") : navigate("/Admin");
  }, []);

  const changestate = () => {
    setAdmin(<AddManager setAdmin={setAdmin} setShowAdd={setShowAdd} />);
    setShowAdd(false);
  };

  return (
    <div>
      <div>
        <Navbar setAdmin={setAdmin} setShowAdd={setShowAdd} />
      </div>
      <div>
        {showAdd === true ? (
          <button
            class="ml-2 btn btn-danger btn-sm pt-4 mt-5 mx-5"
            // onClick={() => setAdmin(<AddManager setAdmin={setAdmin} />)}
            onClick={changestate}
          >
            <b>Add New Manager</b>
          </button>
        ) : (
          <h3 class="heading pt-5 mt-5 mx-5 text-black">Add Manager</h3>
        )}
      </div>

      <div class="my-4">{admin}</div>
    </div>
  );
}
