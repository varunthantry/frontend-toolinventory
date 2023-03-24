import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import AllManager from './AllManager';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar(props) {
  let navigate = useNavigate();

  const setAdmin = props.setAdmin;
  const setShowAdd = props.setShowAdd;

  const changeStateAdmin = () => {
    setAdmin(<AllManager setAdmin={setAdmin} />)
    setShowAdd(true);
  }

  const notifyLogoutAdmin = () => {

    toast("Logged Out Successfully 👍");
    setTimeout(()=>{
      navigate("/")
    },2000);

  }

  return (
    <div class="container">
    <nav class=" navbar-expand-lg navbar-light bg-white fixed-top rounded-7 my-1 mx-1">
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
            <li class="nav-item active">
              {/* <a class="nav-link " aria-current="page" href="/Admin"><p class="text-black">Home</p></a> */}

              <button type="submit" class="nav-link btn navi mx-1 my-4 text-black" onClick={changeStateAdmin}>
              <HomeIcon /> 
              <b class="navbutton">Home</b></button>
            </li>
           
            <li class="nav-item">
              {/* <a class="nav-link" href="/Admin"><p class="text-black">All Manager</p></a> */}

              <button type="submit" class="nav-link btn navi mx-1 my-4 text-black" onClick={changeStateAdmin}>
              <PersonIcon />
              <b class="navbutton">Manager</b></button>
            </li>
           
          </ul>

          <ul class="navbar-nav">
            <li class="nav-item mx-1">
                <h5 class="nav-link text-black" href="#"><AccountCircleIcon /> Admin_Ayush</h5>
                {/* <b class="nav mx-1 my-4 text-black"><AccountCircleIcon />Varun</b> */}
            </li>
            <li class="nav-item">
                <button type="submit" class="nav-link btn navi text-black" onClick={notifyLogoutAdmin}>
                <LogoutIcon />
                {/* <b class="navbutton">Logout</b> */}
                </button>
                <ToastContainer />
            </li>
        </ul>

        </div>
      </div>
    </nav>
  </div>
  )
}
