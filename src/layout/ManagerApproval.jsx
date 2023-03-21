import React from 'react';
import Modal from '../modal/Modal';
import "../modal/Modal.css"
import { getAllManagerApproval } from '../services/AllManagerApproval';

const data = getAllManagerApproval();

const ManagerApproval = () => {
    return (
    
    // <Modal />
    <div className='py-4 mx-5'>
        <table className="table border shadow">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col"><h3>Tool Name</h3></th>
                <th scope="col"><h3>Units</h3></th>
                <th scope="col"><h3>Approve/decline</h3></th>
                </tr>
            </thead>
            <tbody>

                    {
                        data.map((dat, index)=>(
                            <tr>
                                <th scope="row" key={index}><b>{index+1}</b></th>
                                <td><b>{dat.name}</b></td>
                                <td><b>{dat.unit}</b></td>
                            
                                <td>
                                
                                    {/* <Link className='btn btn-outline-primary mx-2'
                                    to={`/edituser/${user.id}`}
                                    >Edit</Link>
                                    <button className='btn btn-danger mx-2'
                                    onClick={()=>deleteUser(user.id)}>Delete</button> */}

                                    <Modal data={dat} />
                                    
                                </td>

                            </tr>
                        ))
                    }
                
            </tbody>
        </table>
    </div>

    )
};

export default ManagerApproval;