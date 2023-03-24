import React from 'react'
import { getAllTool } from '../services/AllToolService';
import { Link} from 'react-router-dom';
// import EditManager from './EditOperator';
// import AddManager from './AddManager';
import EditTool from './EditTool';
import AddTool from './AddTool';

export default function AllTool(props) {
    const setManager = props.setManager;
    const data = getAllTool();
    
    return (
        <div>
            
            <div>

            <button class="ml-2 btn btn-danger btn-sm pt-4 mt-5 mx-5" 
            onClick={() => setManager(<AddTool setManager={setManager} />)}
             >
                <b>Add New Tool</b>
            </button>
            </div>
        
            <h3 class='heading pt-5 text-black'>Tools</h3>
        <div className='py-4 mx-5'>
          <table className="table  shadow bg-white rounded-7">
              <thead>
                  <tr>
                  <th scope="col">#</th>
                  <th scope="col"><h3>Tool Name</h3></th>
                  <th scope="col"><h3>Units</h3></th>
                  <th scope="col"><h3>Action</h3></th>
                  
                  </tr>
              </thead>
              <tbody>
  
                      {
                          data.map((dat, index)=>(
                              <tr>
                                  <th scope="row" key={index}><b>{dat.id}</b></th>
                                  <td><b>{dat.name}</b></td>
                                  <td><b>{dat.unit}</b></td>
                                 
                              
                                  <td>
                                  
                                      {/* <Link className='btn btn-outline-primary mx-2'
                                      to={`/edituser/${user.id}`}
                                      >Edit</Link>
                                      <button className='btn btn-danger mx-2'
                                      onClick={()=>deleteUser(user.id)}>Delete</button> */}
  
                                      <Link className='btn btn-outline-primary mx-2' 
                                       onClick={() => {setManager(<EditTool setManager={setManager} />)}} 
                                      >Edit</Link>
                                      <button className='btn btn-danger mx-2'
                                      >Delete</button>
                                      
                                  </td>
  
                              </tr>
                          ))
                      }
                  
              </tbody>
          </table>
      </div>
      </div>
  )
}
