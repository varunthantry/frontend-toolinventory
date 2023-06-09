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

export function LoginFormManager(props) {
  const { switchToUser, switchToAdmin } = useContext(AccountContext);
  let navigate = useNavigate();

  const notifyLoginManager = () => {
    
    toast("Logged In Successfully as Manager 👍");
      setTimeout(()=>{
        navigate("/Manager")
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
      <SubmitButton type="submit" onClick={notifyLoginManager}>Signin</SubmitButton>
      <ToastContainer />

      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        {/* Don't have an accoun?{" "} */}
        <BoldLink href="#" onClick={switchToUser}>
          Sign-in as User
        </BoldLink>
        <BoldLink href="#" onClick={switchToAdmin}>
          Sign-in as Admin
        </BoldLink>
      </MutedLink>
      
    </BoxContainer>
  );
}