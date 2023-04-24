import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { AccountContext } from "./accountContext";
import { LoginFormUser } from "./loginform";
import LoginFormAdmin from "./loginformAdmin";
import { LoginFormManager } from "./loginformManager";
import Carousel from 'react-bootstrap/Carousel';
import "../css/style.css";
// import MyContext from './MyContext';
// import { useContext } from "react";

// import { motion } from "framer-motion";

const BoxContainer = styled.div`
  width: 380px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  margin-left:15em;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 650px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -320px;
  left: -70px;
  ${"" /* background: #EDC7B7; background: linear-gradient(
    58deg,
    #0652DD
  );*/}
  background-color: rgb(240, 202, 53);
  
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top:45px;
`;

const BigHeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: white;
  z-index: 10;
  margin-top: 0;
  padding-top: 0;
`;

const HeaderText = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.24;
  color: black;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: black;
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

//   var div = document.getElementsByClassName('box');
//   // var div2 = document.getElementsByClassName('requiredimages');
//   let con = 0;

// function getRandomColor() {
//     return con++%3;
// }

// function changeColor(){
//   div[0].style.background = colors[getRandomColor()];
//   // div2[0].style. = colors[getRandomColor()];
// }

// setInterval(changeColor,5000);

// let img = ["firstslide.png", "secondslide.png", "thirdslide.png"];
// let colors = ["","#648ad0","#3d5581"];
// // let con = 0;
// // console.log(con);

  // const [bgColor, setBgColor] = useState('#0652dd'); // set default background color
  // // const { myState, setMyState } = useContext(MyContext);
  // const handleCarouselChange = (index) => {
  //   // change background color based on carousel index
  //   const colors = ['#E3FD40', '#D5C004', '#C9EF5D'];
  //   setBgColor(colors[index]);
  //   // setMyState(colors[index]);
  // };
  




  const contextValue = { switchToManager, switchToUser, switchToAdmin };

  return (
    <AccountContext.Provider value={contextValue}>
      <div className="parent" >
      <div className="first">
       
      <Carousel /*indicators={false} interval={null} onSelect={handleCarouselChange}*/ fade interval={4000} indicators={false}>
      <Carousel.Item >
        <img
          className="requiredimages w-100 d-block carousel "
          src="firstslide.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="requiredimages w-100 d-block carousel"
          src="secondslide.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="requiredimages w-100 d-block carousel "
          src="thirdslide.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    </div>
    <div className="second">
      <BoxContainer /*style={{ backgroundColor: bgColor }}*/ >
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
            className="box"
            id="full"
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
      </div>
    </div>
    </AccountContext.Provider>
  );
  
}

