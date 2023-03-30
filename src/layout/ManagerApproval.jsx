import React, {useState} from 'react';
import Modal from '../modal/Modal';
import "../modal/Modal.css"
import { getAllManagerApproval } from '../services/AllManagerApproval';
// import Searchbar from './Searchbar';
import SearchIcon from '@mui/icons-material/Search';


const data = getAllManagerApproval();

const ManagerApproval = () => {

    const [searchTerm, setSearchTerm] = useState("");
    return (
    
    // <Modal />
    <div>
        <div class='nav-link navi mx-1 my-4 text-black rounded-7'>
             {/* <Searchbar /> */}

             <input type="text" placeholder="Search...." class="rounded-7" 
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}
             />
            <SearchIcon />
             
        </div>
        <h3 class='heading pt-3 text-black'>Tool Request</h3>
        
        <div className='py-4 mx-5'>
            <table className="table  shadow bg-white rounded-7">
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
                            data.filter((dat)=> {
                                if(searchTerm === ""){
                                    return dat
                                }else if(dat.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return dat
                                }else if(dat.unit.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return dat
                                }
                                
                            }).map((dat, index)=>(
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
    </div>
    )
};

export default ManagerApproval;