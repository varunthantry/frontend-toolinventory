import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { AccountContext } from "./accountContext";
import { LoginFormUser } from "./loginform";
import LoginFormAdmin from "./loginformAdmin";
import { LoginFormManager } from "./loginformManager";
// import { motion } from "framer-motion";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(241, 196, 15);
  ${"" /* background: #EDC7B7; */}
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
    ${
    "" /* #EDC7B7 20%,
    #EDC7B7 100% */
  }
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BigHeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin-top: 0;
  padding-top: 0;
`;

const HeaderText = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [active, setActive] = useState("signinUser");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToManager = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signinManager");
    }, 400);
  };

  const switchToUser = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signinUser");
    }, 400);
  };

  const switchToAdmin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signinAdmin");
    }, 400);
  };

  const contextValue = { switchToManager, switchToUser, switchToAdmin };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          <BigHeaderText>Tool Inventory</BigHeaderText>
          {active === "signinUser" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>Sign-in </SmallText>
            </HeaderContainer>
          )}
          {active === "signinManager" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back Manager</HeaderText>
              <SmallText>Sign-in to continue as Manager!</SmallText>
            </HeaderContainer>
          )}
          {active === "signinAdmin" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back Admin</HeaderText>
              <SmallText>Sign-in to continue as Admin!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signinUser" && <LoginFormUser />}
          {active === "signinManager" && <LoginFormManager />}
          {active === "signinAdmin" && <LoginFormAdmin />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
