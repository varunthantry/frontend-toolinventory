// import React from 'react'
// import { getAllTool } from '../services/AllToolService';
// import { Link} from 'react-router-dom';
// // import EditManager from './EditOperator';
// // import AddManager from './AddManager';
// import EditTool from './EditTool';
// import AddTool from './AddTool';

// export default function AllTool(props) {
//     const setManager = props.setManager;
//     const data = getAllTool();

//     return (
//         <div>

//             <div>

//             <button class="ml-2 btn btn-danger btn-sm pt-4 mt-5 mx-5"
//             onClick={() => setManager(<AddTool setManager={setManager} />)}
//              >
//                 <b>Add New Tool</b>
//             </button>
//             </div>

//             <h3 class='heading pt-5 text-black'>Tools</h3>
//         <div className='py-4 mx-5'>
//           <table className="table  shadow bg-white rounded-7">
//               <thead>
//                   <tr>
//                   <th scope="col">#</th>
//                   <th scope="col"><h3>Tool Name</h3></th>
//                   <th scope="col"><h3>Units</h3></th>
//                   <th scope="col"><h3>Action</h3></th>

//                   </tr>
//               </thead>
//               <tbody>

//                       {
//                           data.map((dat, index)=>(
//                               <tr>
//                                   <th scope="row" key={index}><b>{dat.id}</b></th>
//                                   <td><b>{dat.name}</b></td>
//                                   <td><b>{dat.unit}</b></td>

//                                   <td>

//                                       {/* <Link className='btn btn-outline-primary mx-2'
//                                       to={`/edituser/${user.id}`}
//                                       >Edit</Link>
//                                       <button className='btn btn-danger mx-2'
//                                       onClick={()=>deleteUser(user.id)}>Delete</button> */}

//                                       <Link className='btn btn-outline-primary mx-2'
//                                        onClick={() => {setManager(<EditTool setManager={setManager} />)}}
//                                       >Edit</Link>
//                                       <button className='btn btn-danger mx-2'
//                                       >Delete</button>

//                                   </td>

//                               </tr>
//                           ))
//                       }

//               </tbody>
//           </table>
//       </div>
//       </div>
//   )
// }

import React, { useState, useEffect } from "react";
import "./css/cards.css";
import CardsManagerMachines from "./ToolCardsManagerMachines";
import { Grid } from "@mui/material";
// import { getSelectTools } from "../services/AllSelectTools";
import { getAllMachineSelect } from "../services/AllToolService";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function SelectTools() {
  let navigate = useNavigate();

  //   const data = getSelectTools();

  const [loginloader, setloginloader] = useState(true);

  const [datamachine, setDataMachine] = useState([]);

  useEffect(() => {
    !localStorage.getItem("token") ? navigate("/") : navigate("/Manager");

    setloginloader(false);
    getAllMachineSelect()
      .then((res) => {
        setDataMachine(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      }).finally(()=>{
        setloginloader(true);

      })
  }, []);

  const dataAvialable = datamachine.length;
  //  console.log("ssss", dataAvialable)

  return (

   
        <div>

    {loginloader ? (
      <div>
      {dataAvialable === 0 ? (<h3 class="heading pt-5 text-black">No Data Available</h3>) : (
          <Grid container spacing={4} className="car">
            {datamachine.map((data, id) => (
              <Grid item xs={12} sm={6} md={4} key={data.id}>
                <CardsManagerMachines
                  machine_id={data.id}
                  machine_name={data.name}
                  description={data.description}
                  //   tool_used={data.tool_used}
                  //   image={data.image}
                  available={data.available}
                />
              </Grid>
            ))}
          </Grid>
          )}

          </div>

          ) : (
          <Loader />
          )}
        </div>
    
    
  );
}
