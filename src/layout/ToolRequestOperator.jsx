import React from 'react';
import { Link} from 'react-router-dom'
import { getToolRequest } from '../services/ToolRequestService';

export default function ToolRequestOperator() {

    const data = getToolRequest();

    return (
        <div>
        <h3 class='heading pt-5 text-black'>Return Tool</h3>
            <div className='py-4 mx-5'>
                <table className="table heading shadow bg-white rounded-7">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"><h3>Machine Name</h3></th>
                            <th scope="col"><h3>Tool Name</h3></th>
                            <th scope="col"><h3>Units</h3></th>
                            <th scope="col"><h3>Return Requests</h3></th>
                        </tr>
                    </thead>
                    <tbody>
    
                            {
                                data.map((dat, index)=>(
                                    <tr>
                                        <th scope="row" key={index}><b>{index}</b></th>
                                        <td><b>{dat.machine_name}</b></td>
                                        <td><b>{dat.tool_name}</b></td>
                                        <td><b>{dat.unit}</b></td>
                                    
                                        <td>
    
                                            <Link className='btn btn-outline-primary mx-2'
                                            >Return</Link>
                                            {/* <button className='btn btn-danger mx-2'
                                            >Delete</button> */}
                                            
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
