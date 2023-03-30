import React,{useState} from 'react'
import { getLedgerDetails } from '../services/LedgerService';
import SearchIcon from '@mui/icons-material/Search';

export default function Ledger() {

    const [searchTerm, setSearchTerm] = useState("");
  const data = getLedgerDetails();
  return (

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
        <h3 class='heading pt-3 text-black'>Tool Ledger</h3>
        <div className='py-4 mx-5'>
            <table className="table  shadow bg-white rounded-7">
                <thead>
                    <tr>
                    <th scope="col"><h3>Operator Id</h3></th>
                    <th scope="col"><h3>Operator Name</h3></th>
                    <th scope="col"><h3>Machine Name</h3></th>
                    <th scope="col"><h3>Tool Type Name</h3></th>
                    <th scope="col"><h3>Tool Id</h3></th>
                    <th scope="col"><h3>Take DateTime</h3></th>
                    <th scope="col"><h3>Return DateTime</h3></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.filter((dat)=> {
                                if(searchTerm === ""){
                                    return dat
                                }else if(dat.operator_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return dat
                                }else if(dat.machine_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return dat
                                }else if(dat.tool_type_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return dat
                                }else if(dat.tool_id.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return dat
                                }
                                
                            }).map((dat, index)=>(
                            <tr>
                                <th scope="row" key={index}><b>{dat.operator_id}</b></th>
                                <td><b>{dat.operator_name}</b></td>
                                <td><b>{dat.machine_name}</b></td>
                                <td><b>{dat.tool_type_name}</b></td>
                                <td><b>{dat.tool_id}</b></td>
                                <td><b>{dat.start_time}</b></td>
                                <td><b>{dat.end_time}</b></td>
                            

                            </tr>
                        ))
                    }
                
                </tbody>
            </table>
        </div>
  </div>
  )
}
