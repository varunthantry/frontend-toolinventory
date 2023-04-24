import React from 'react';
import styled from "styled-components";


import "../App.css"
import { AccountBox } from './accountBox';
import "./css/style.css"


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  padding: 60px;
  ${'' /* background-color: #EEE2DC; */}
  background-size:2500px 2500px;
  background-image: url("https://media.istockphoto.com/id/1372160671/photo/yellow-colored-abstract-textured-background-decorative-plaster-on-the-wall.jpg?s=612x612&w=0&k=20&c=rzd77MCzjwohR6w_Jdl_BmbmtuxW_Nx2lhMdpFb0xkQ=");
`;

function Login() {
  return  (
  <AppContainer >
    <AccountBox />
  </AppContainer>
  )
}

export default Login;


















// import React from 'react';
// import {
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBBtn,
//   MDBInput,
// }
// from 'mdb-react-ui-kit';
// import { MDBTypography } from 'mdb-react-ui-kit';
// import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

// function Login() {
//   return (
//     <MDBContainer fluid className="p-3 my-5">

//       <MDBRow>

//         <MDBCol col='10' md='6'>
//           <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
//         </MDBCol>

//         <MDBCol col='4' md='6'>
//           <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
//         Tools Inventory System
//       </MDBTypography>

//       <p className="lead fw-normal mb-0 me-3">Sign In</p><br/>
      
//           <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
//           <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
//           <MDBDropdown group>
//         <MDBDropdownToggle size='lg'>Role</MDBDropdownToggle>
//         <MDBDropdownMenu>
//           <MDBDropdownItem link>Operator</MDBDropdownItem>
//           <MDBDropdownItem link>Manager</MDBDropdownItem>
//           <MDBDropdownItem link>Admin</MDBDropdownItem>
//           <MDBDropdownItem divider />
//         </MDBDropdownMenu>
//       </MDBDropdown>
//     <br/>
//       <br/>
//           <MDBBtn className="mb-4 w-100" size="lg">Sign in</MDBBtn>

//         </MDBCol>

//       </MDBRow>
//        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

//         <div className="text-white mb-3 mb-md-0" >
//           Copyright © 2023. All rights reserved.
//         </div>
//         <div className="text-white mb-3 mb-md-0">
//           <p>Tools Inventory System</p>
//         </div>


//       </div>


//     </MDBContainer>
//   );
// }

// export default Login;