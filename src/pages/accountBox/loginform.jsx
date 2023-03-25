import React, { useContext } from "react";
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function LoginFormUser(props) {
  const { switchToManager, switchToAdmin } = useContext(AccountContext);

  let navigate = useNavigate();

  const notifyOperatorLogin = () => {
 
    toast("Logged In Successfully as Operator 👍");
    setTimeout(()=>{
      navigate("/Operator")
    },2000);
    
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
    </FormContainer>
      <Marginer direction="vertical" margin={5} />
    
      {/* <MutedLink href="#">Forget your password?</MutedLink> */}
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={notifyOperatorLogin}>Signin</SubmitButton>
      <ToastContainer />
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        {/* Don't have an accoun?{" "} */}
        <BoldLink href="#" onClick={switchToManager}>
          Sign-in as Manager
        </BoldLink>
        
        <BoldLink href="#" onClick={switchToAdmin}>
          Sign-in as Admin
        </BoldLink>
      </MutedLink>
      
    </BoxContainer>
  );
}