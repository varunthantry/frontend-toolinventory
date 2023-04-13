import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
// import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SelectTools from "./SelectTools";
import ToolRequestOperator from "./ToolRequestOperator";
import { getUserMe } from "../services/LoginService";

export default function NavbarOperator(props) {
  let navigate = useNavigate();
  const setOperator = props.setOperator;

  const [name, setName] = useState("Operator");

  const notifyLogoutAdmin = () => {
    // toast("Logged Out Successfully 👍");
    // setTimeout(()=>{
    //   navigate("/")
    // },2000);

    localStorage.clear();
    navigate("/");
    toast.info("Logged Out");
  };

  useEffect(() => {
    getUserMe()
      .then((res) => {
        setName(res?.name);
      })
      .catch((err) => {
        console.log("r", err);
      });
  });

  const changeStateRequest = () => {
    setOperator(<SelectTools />);
  };

  const changeStateReturn = () => {
    setOperator(<ToolRequestOperator />);
  };

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
                <button
                  type="submit"
                  class="nav-link btn navi mx-1 my-4 text-black"
                  onClick={changeStateReturn}
                >
                  <HomeIcon />
                  <b class="navbutton">Home</b>
                </button>
              </li>

              <li class="nav-item">
                <button
                  type="submit"
                  class="nav-link btn navi mx-1 my-4 text-black"
                  onClick={changeStateReturn}
                >
                  <b class="navbutton">Return Tool</b>
                </button>
              </li>

              <li class="nav-item">
                <button
                  type="submit"
                  class="nav-link btn navi mx-1 my-4 text-black"
                  onClick={changeStateRequest}
                >
                  <b class="navbutton">Request Tool</b>
                </button>
              </li>
            </ul>

            <ul class="navbar-nav">
              <li class="nav-item mx-1">
                <h5 class="nav-link text-black" href="#">
                  <AccountCircleIcon /> {name}
                </h5>
              </li>
              <li class="nav-item">
                <button
                  type="submit"
                  class="nav-link btn navi text-black"
                  onClick={notifyLogoutAdmin}
                >
                  <LogoutIcon />
                </button>
                <ToastContainer />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
