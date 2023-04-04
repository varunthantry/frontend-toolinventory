// import Dropdown from 'react-bootstrap/Dropdown';
// import "./css/selecttool.css"

// function SelectTools() {

  
//   return (
//     <div className='container table down shadow  bg-light rounded-7 pt-5'>

//         <form>
//             <div class="form-group row">
//                 <Dropdown className="d-inline mx-2">
//                     <Dropdown.Toggle id="dropdown-autoclose-true">
//                     Select Machine
//                     </Dropdown.Toggle>

//                     <Dropdown.Menu>
//                     <Dropdown.Item href="#">Machine A</Dropdown.Item>
//                     <Dropdown.Item href="#">Machine B</Dropdown.Item>
//                     <Dropdown.Item href="#">Machine C</Dropdown.Item>
//                     </Dropdown.Menu>
//                 </Dropdown>

//                 <Dropdown className="d-inline mx-2" autoClose="inside">
//                     <Dropdown.Toggle id="dropdown-autoclose-inside">
//                     Select Tool
//                     </Dropdown.Toggle>

//                     <Dropdown.Menu>
//                     <Dropdown.Item href="#">tool 1</Dropdown.Item>
//                     <Dropdown.Item href="#">tool 2</Dropdown.Item>
//                     <Dropdown.Item href="#">tool 3</Dropdown.Item>
//                     </Dropdown.Menu>

                
//                 </Dropdown>
                
//                 <div >
//                     {/* <button type="submit" class="nav-link btn navi mx-5 my-4 text-black ">
//                     <b class="navbutton">Request Tool</b></button> */}

//                     <button type="submit" class="nav-link dd btn navi text-black" >
//                     <b class="navbutton">Request Tool</b></button>
//                 </div>
//             </div>
//           </form>  
//        </div>

    
//   )
// }

// export default SelectTools;



import React from 'react';
import "./css/cards.css";
import Cards from './Cards';
import { Grid} from '@mui/material';
import { getSelectTools } from '../services/AllSelectTools';
// import { useState, useEffect } from 'react';
// import { getMachines } from '../services/AllSelectTools';


export default function SelectTools() {

   const data = getSelectTools();

  //  const [data, setData] = useState([])
  //   useEffect(() =>{
  //           getMachines().then((res)=>{
  //               setData(res);
  //               console.log(res);
  //           }).catch((err)=>{
  //               console.log(err);
  //           })
  //   }, [])



  return (
    <div>

   <Grid container spacing={4} className="car">
    {data.map((data, id)=>(

        <Grid item xs={12} sm={6} md={4} key={data.id}>

            <Cards machine_name={data.name} description={data.description} tool_used={data.tool_used} image={data.image} available={data.available} />
        </Grid>

    ))
    }
    </Grid>
    </div>
    
  )
}