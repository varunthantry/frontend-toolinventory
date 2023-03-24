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

export function LoginFormUser(props) {
  const { switchToManager, switchToAdmin } = useContext(AccountContext);

  let navigate = useNavigate();

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
    </FormContainer>
      <Marginer direction="vertical" margin={5} />
    
      {/* <MutedLink href="#">Forget your password?</MutedLink> */}
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={() => navigate("/Operator")}>Signin</SubmitButton>
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