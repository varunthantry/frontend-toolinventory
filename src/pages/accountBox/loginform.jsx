import React, { useContext, useEffect, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import MyContext from './MyContext';

import { getUserLogin, getUserMe } from "../../services/LoginService";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import "../css/login.css"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Loader from "../../Loader/Loader";

export function LoginFormUser(props) {
  const [loginloader, setloginloader] = useState(true);

  const { switchToManager, switchToAdmin } = useContext(AccountContext);

  let navigate = useNavigate();

  const [login, setlogin] = useState({});

  useEffect(() => {
    let isLogin = false;
    localStorage.getItem("token") ? (isLogin = true) : (isLogin = false);

    if (isLogin) {
      getUserMe()
        .then((res) => {
          localStorage.setItem("currentUser", res);

          if (res.role === "OPERATOR") {
            navigate("/Operator");
          } else if (res.role === "ADMIN") {
            navigate("/Admin");
          } else if (res.role === "MANAGER") {
            navigate("/Manager");
          }
        })
        .catch((err) => {
          console.log("r", err);
        });
    }
  }, []);

  const onInputChange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };

  const getUserDetails = () => {
    getUserMe()
      .then((res) => {
        localStorage.setItem("currentUser", res);

        console.log(res?.name);

        toast.info("Login Successfully 👍");
        setloginloader(true);
        if (res.role === "OPERATOR") {
          navigate("/Operator");
        } else if (res.role === "ADMIN") {
          navigate("/Admin");
        } else if (res.role === "MANAGER") {
          // navigate(`/Manager?name=${res?.name}`);
          navigate(`/Manager`);
        }
      })
      .catch((err) => {
        console.log("r", err);
        toast.info("Login Error");
      });
  };

  const notifyOperatorLogin = () => {
    setloginloader(false);

    getUserLogin(login)
      .then((res) => {
        localStorage.setItem("token", res?.accessToken);

        console.log(res?.accessToken);

        getUserDetails();
      })
      .catch((err) => {
        console.log("erroor login", err);
        toast.info("Login Error");
        navigate("/")
      }).finally(() => {
        setloginloader(true);
      })
  };

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  // const [emailinput, setEmailInput] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const EmailValidation = (e) => {
      // setEmailInput(e.target.value)
     
      const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      if (regEx.test(e.target.value)) {
        setEmailMessage("");
        
        
      } else {
        setEmailMessage("Email is Not Valid");
       
      } 
  }
  // const [myState, setMyState] = useState('#0652dd');

  return (
    <div>
      {loginloader ? (
        <form>
          <BoxContainer>
            <FormContainer>
              <Input
                type={"email"}
                name="username"
                placeholder="Username"
                value={login?.username}
                onChange={(e) => {onInputChange(e); EmailValidation(e)}}
              />
              
              <Input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={login?.password}
                onChange={(e) => onInputChange(e)}
              />
              <label className="eyebutton" onClick={handleShow}>{show ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}</label>
              <o class="text-danger emailerror">{emailMessage}</o>
            </FormContainer>
            <Marginer direction="vertical" margin={5} />

          
            <Marginer direction="vertical" margin="1.6em" />
            <SubmitButton type="button" onClick={notifyOperatorLogin}>
              Signin
            </SubmitButton>
            <ToastContainer />
            <Marginer direction="vertical" margin="1em" />


            {/* <MutedLink href="#">
        
          <BoldLink href="#" onClick={switchToManager}>
           Sign-in as Manager
         </BoldLink> 

            <BoldLink href="#" onClick={switchToAdmin}>
           Sign-in as Admin
         </BoldLink> 
         </MutedLink> */}

          </BoxContainer>
        </form>
      ) : (
        <Loader />
      )}
    </div>

    // <form>
    //   <BoxContainer>
    //     <FormContainer>
    //       <Input
    //         type={"text"}
    //         name="username"
    //         placeholder="Username"
    //         value={login?.username}
    //         onChange={(e) => onInputChange(e)}
    //       />
    //       <Input
    //         type={"password"}
    //         name="password"
    //         placeholder="Password"
    //         value={login?.password}
    //         onChange={(e) => onInputChange(e)}
    //       />
    //     </FormContainer>
    //     <Marginer direction="vertical" margin={5} />

    //     {/* <MutedLink href="#">Forget your password?</MutedLink> */}
    //     <Marginer direction="vertical" margin="1.6em" />
    //     <SubmitButton type="button" onClick={notifyOperatorLogin}>
    //       Signin
    //     </SubmitButton>
    //     <ToastContainer />
    //     <Marginer direction="vertical" margin="1em" />
    //     <MutedLink href="#">
    //       {/* Don't have an accoun?{" "} */}
    //       {/* <BoldLink href="#" onClick={switchToManager}>
    //       Sign-in as Manager
    //     </BoldLink> */}

    //       {/* <BoldLink href="#" onClick={switchToAdmin}>
    //       Sign-in as Admin
    //     </BoldLink> */}
    //     </MutedLink>
    //   </BoxContainer>
    // </form>
  );
}
