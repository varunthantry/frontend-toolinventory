// import React from 'react'

// export default function NavbarManager() {
//   return (

//       <nav class="navbar navbar-expand-lg bg-body-tertiary">
//         <div class="container-fluid">
//             <a class="navbar-brand" href="#">Navbar</a>
//             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarNavDropdown">
//             <ul class="navbar-nav">
//                 <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="#">Home</a>
//                 </li>
//                 <li class="nav-item">
//                 <a class="nav-link" href="#">Features</a>
//                 </li>
//                 <li class="nav-item">
//                 <a class="nav-link" href="#">Pricing</a>
//                 </li>
//                 <li class="nav-item dropdown">
//                 <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Dropdown link
//                 </a>
//                 <ul class="dropdown-menu">
//                     <li><a class="dropdown-item" href="#">Action</a></li>
//                     <li><a class="dropdown-item" href="#">Another action</a></li>
//                     <li><a class="dropdown-item" href="#">Something else here</a></li>
//                 </ul>
//                 </li>
//             </ul>
//             </div>
//         </div>
//         </nav>

//   )
// }

import React, { useState, useEffect } from "react";
import AllOperator from "./AllOperator";
import AllTool from "./AllTool";
import Ledger from "./Ledger";
import "../pages/css/style.css";
// import HomeIcon from '@mui/icons-material/Home';
import ConstructionIcon from "@mui/icons-material/Construction";
import BookIcon from "@mui/icons-material/Book";
import PersonIcon from "@mui/icons-material/Person";
import ManagerApproval from "./ManagerApproval";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllToolType from "./AllToolType";
import { getUserMe } from "../services/LoginService";
import Loader from "../Loader/Loader";
// import Searchbar from './Searchbar';

export default function NavbarManager(props) {
  let navigate = useNavigate();

  const setManager = props.setManager;
  // const name = props.name;
  // console.log("ererer", name);

  // const addOperatorShow = props.addOperatoShow;
  // const setAddOperatorShow = props.setAddOperatorShow;

  // const [addOperatoShow, setAddOperatorShow] = useState(true);

  const [name, setName] = useState("Manager");

  const [loader, setLoader] = useState(true);

  const changeStatehome = () => {
    setManager(<ManagerApproval />);
  };

  const changeStateOperator = () => {
    setManager(<AllOperator setManager={setManager} />);
    // setAddOperatorShow(!addOperatorShow)
  };

  const changeStateTool = () => {
    setManager(<AllTool setManager={setManager} />);
  };

  const changeStateLedger = () => {
    setManager(<Ledger setManager={setManager} />);
  };

  const changeStatetooltype = () => {
    setManager(<AllToolType setManager={setManager} />);
  };

  const notifyLogoutManager = () => {
    localStorage.clear();
    toast.info("Logged Out");
    navigate("/");
    
  };

  useEffect(() => {

    // setLoader(false);
    getUserMe()
      .then((res) => {
        setName(res?.name);
      })
      .catch((err) => {
        console.log("r", err);
      })
      // .finally(()=>{
      //   setLoader(true);

      // })
  });

  return (
    <div class="container">

{/* {loader ? ( */}
      <nav class=" navbar-expand-lg navbar-light bg-white fixed-top rounded-7 my-1 mx-1 ">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse " id="navbarExample01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li class="nav-item active">
          
            <button type="submit" class="nav-link btn navi mx-1 my-4 text-black" onClick={changeStatehome}>
            <HomeIcon /> 
            <b class="navbutton">Home</b></button>
           
          </li> */}

              <li class="nav-item">
                {/* <a class="nav-link dd" href="#" onClick={changeStateTool}><p class="text-black">
            <ConstructionIcon />
            Tools</p></a> */}

                <button
                  type="submit"
                  class="nav-link btn navi mx-1 my-4 text-black"
                  onClick={changeStateTool}
                >
                  <ConstructionIcon />
                  <b class="navbutton">Tools</b>
                </button>
              </li>

              <li class="nav-item">
                {/* <a class="nav-link" href="#" onClick={changeStateLedger}><p class="text-black">
            <BookIcon />Ledger</p></a> */}

                <button
                  type="submit"
                  class="nav-link btn navi mx-1 my-4 text-black"
                  onClick={changeStateLedger}
                >
                  <BookIcon />
                  <b class="navbutton">Ledger</b>
                </button>
              </li>

              <li class="nav-item ">
                {/* <a class="nav-link" href="#"  onClick={changestateOperator}><p class="text-black">
            <PersonIcon />Operator</p></a> */}

                <button
                  type="submit"
                  class="nav-link btn navi mx-1 my-4 text-black"
                  onClick={changeStateOperator}
                >
                  <PersonIcon />
                  <b class="navbutton">Operator</b>
                </button>
              </li>

              <li class="nav-item">
                {/* <a class="nav-link" href="#"  onClick={() => {setManager(<AllOperator setManager={setManager} />)}}><p class="text-white">All Operator</p></a> */}
                {/* <a class="nav-link" href="#"  onClick={changeStatehome}><p class="text-black">
            <PersonIcon />tool Request</p></a> */}

                <button
                  type="submit"
                  class="nav-link btn navi mx-1 my-4 text-black"
                  onClick={changeStatehome}
                >
                  <HomeRepairServiceIcon />
                  <b class="navbutton">Tool Request</b>
                </button>
              </li>

              <li class="nav-item">
                <button
                  type="submit"
                  class="nav-link btn navi mx-1 my-4 text-black"
                  onClick={changeStatetooltype}
                >
                  <b class="navbutton">Tool Type</b>
                </button>
              </li>

              {/* <li class="nav-item">
              <div class='nav-link navi mx-1 my-4 text-black rounded-7'>
             <Searchbar />
             
             </div>
            </li> */}
            </ul>

            <ul class="navbar-nav">
              <li class="nav-item mx-1">
                <h5 class="nav-link text-black" href="#">
                  <AccountCircleIcon /> {name}
                </h5>
                {/* <b class="nav mx-1 my-4 text-black"><AccountCircleIcon />Varun</b> */}
              </li>
              <li class="nav-item">
                <button
                  type="submit"
                  class="nav-link btn navi text-black"
                  onClick={notifyLogoutManager}
                >
                  <LogoutIcon />
                  {/* <b class="navbutton">Logout</b> */}
                </button>
                <ToastContainer />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ) : (
       <Loader />
      )} */}
    </div>
  );
}
