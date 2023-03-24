import React from 'react'
import { Link } from 'react-router-dom'
import { getAllOperator } from '../services/OperatorService'

import AddOperator from './AddOperator'
import EditOperator from './EditOperator'

export default function AllOperator(props) {

    const setManager = props.setManager;
    const data = getAllOperator();

  return (

    <div>
        <div>

        <button class="ml-2 btn btn-danger btn-sm pt-4 mt-5 mx-5" 
        onClick={() => setManager(<AddOperator setManager={setManager} />)}
        >
            <b>Add New Operator</b>
        </button>
        </div>

        <h3 class='heading pt-5 text-black'>Operators</h3>

        <div className='py-4 mx-5'>
            <table className="table  shadow bg-white rounded-7">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col"><h3>Operator Name</h3></th>
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
                                    onClick={() => setManager(<EditOperator setManager={setManager} />)}
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
