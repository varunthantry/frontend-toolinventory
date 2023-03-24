import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import EditManager from './EditOperator'
import { getAllManager } from '../services/UserService';
// import AddManager from './AddManager';

export default function AllManager(props) {

    let navigate = useNavigate;
    // const setAdmin = props.setAdmin;
    const data = getAllManager();
  return (
    <div>
        {/* <div>
            <button class="ml-2 btn btn-danger btn-sm pt-4 mt-5 mx-5" 
            onClick={() => setAdmin(<AddManager setAdmin={setAdmin} />)}>
                <b>Add New Manager</b>
            </button>

        </div> */}
        <div className='py-4 mx-5'>
            <table className="table heading shadow bg-white rounded-7">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"><h3>Manager Name</h3></th>
                        <th scope="col"><h3>Username</h3></th>
                        <th scope="col"><h3>Password</h3></th>
                        <th scope="col"><h3>Action</h3></th>
                    </tr>
                </thead>
                <tbody>

                        {
                            data.map((dat, index)=>(
                                <tr>
                                    <th scope="row" key={index}><b>{dat.id}</b></th>
                                    <td><b>{dat.name}</b></td>
                                    <td><b>{dat.username}</b></td>
                                    <td><b>{dat.password}</b></td>
                                
                                    <td>
                                    
                                        {/* <Link className='btn btn-outline-primary mx-2'
                                        to={`/edituser/${user.id}`}
                                        >Edit</Link>
                                        <button className='btn btn-danger mx-2'
                                        onClick={()=>deleteUser(user.id)}>Delete</button> */}

                                        <Link className='btn btn-outline-primary mx-2'
                                        // to="" onClick={() => {setAdd(<EditManager />)}}
                                        to="/editManager" onClick={() => navigate("/editManager")}
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
