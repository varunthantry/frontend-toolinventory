import React, { useContext } from 'react';
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
import { useNavigate } from 'react-router-dom';

export default function LoginFormAdmin() {
    const { switchToUser, switchToManager } = useContext(AccountContext);
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
        <SubmitButton type="submit" onClick={() => navigate("/Admin")}>Signin</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          {/* Don't have an accoun?{" "} */}
          <BoldLink href="#" onClick={switchToUser}>
            Sign-in as User
          </BoldLink>
          <BoldLink href="#" onClick={switchToManager}>
            Sign-in as Manager
          </BoldLink>
        </MutedLink>
        
      </BoxContainer>
    );
}
