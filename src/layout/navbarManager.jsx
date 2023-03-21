// import React from 'react'

// export default function NavbarManager() {
//   return (

      
//       <nav class="navbar navbar-expand-lg bg-body-tertiary">
//         <div class="container-fluid">
//             <a class="navbar-brand" href="#">Navbar</a>
//             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarNavDropdown">
//             <ul class="navbar-nav">
//                 <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="#">Home</a>
//                 </li>
//                 <li class="nav-item">
//                 <a class="nav-link" href="#">Features</a>
//                 </li>
//                 <li class="nav-item">
//                 <a class="nav-link" href="#">Pricing</a>
//                 </li>
//                 <li class="nav-item dropdown">
//                 <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Dropdown link
//                 </a>
//                 <ul class="dropdown-menu">
//                     <li><a class="dropdown-item" href="#">Action</a></li>
//                     <li><a class="dropdown-item" href="#">Another action</a></li>
//                     <li><a class="dropdown-item" href="#">Something else here</a></li>
//                 </ul>
//                 </li>
//             </ul>
//             </div>
//         </div>
//         </nav>
 
//   )
// }


import React, {useState} from 'react'
import AllOperator from './AllOperator'
import AllTool from './AllTool';


export default function NavbarManager(props) {

  const setManager = props.setManager;
  const addOperatorShow = props.addOperatoShow;
  const setAddOperatorShow = props.setAddOperatorShow;

  // const [addOperatoShow, setAddOperatorShow] = useState(true);

  const changestateOperator = () => {
    {setManager(<AllOperator setManager={setManager} />)}
    setAddOperatorShow(!addOperatorShow)
  }

  const changeStateTool = () => {
    {setManager(<AllTool setManager={setManager} />)}
  }
  

  
  return (
    <div class="container">
      <nav class=" navbar-expand-lg navbar-light bg-primary fixed-top    ">
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
            <a class="nav-link " aria-current="page" href="/Manager"><p class="text-white">Manager Home</p></a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={changeStateTool}><p class="text-white">Tools</p></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><p class="text-white">Ledger</p></a>
          </li>

          <li class="nav-item ">
            {/* <a class="nav-link" href="#"  onClick={() => {setManager(<AllOperator setManager={setManager} />)}}><p class="text-white">All Operator</p></a> */}
            <a class="nav-link" href="#"  onClick={changestateOperator}><p class="text-white">All Operator</p></a>
          </li>

          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Link
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
               
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}

        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}

