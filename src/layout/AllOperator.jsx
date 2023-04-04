import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getAllOperator, getDeleteOperator } from '../services/OperatorService';
import SearchIcon from '@mui/icons-material/Search';

import AddOperator from './AddOperator'
import EditOperator from './EditOperator'

export default function AllOperator(props) {

    const setManager = props.setManager;
    // const data = getAllOperator();

    const [data, setData] = useState([])
    
    useEffect(() =>{
            getAllOperator().then((res)=>{
                setData(res);
                console.log(res);
            }).catch((err)=>{
                console.log(err);
            })
    }, [])

    const deleteOperator = (id) => {
        getDeleteOperator(id).then((res)=>{
            
            console.log("successfully Deleted Operator");
            // navigate("/Admin")
            
          }).catch((err)=>{
            console.log("erroor login", err);
          })
    }



    const Role = "OPERATOR"


    const [searchTerm, setSearchTerm] = useState("");

  return (

    <div>
        <div>

        <button class="ml-2 btn btn-danger btn-sm pt-4 mt-5 mx-5" 
        onClick={() => setManager(<AddOperator setManager={setManager} />)}
        >
            <b>Add New Operator</b>
        </button>
        </div>

        <div class='nav-link navi mx-1 my-4 text-black rounded-7'>
             {/* <Searchbar /> */}

             <input type="text" placeholder="Search...." class="rounded-7" 
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}
             />
            <SearchIcon />
             
        </div>

        <h3 class='heading pt-3 text-black'>Operators</h3>

        <div className='py-4 mx-5'>
            <table className="table  shadow bg-white rounded-7">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                     <th scope="col"><h3>Title</h3></th>
                    <th scope="col"><h3>Name</h3></th>
                    <th scope="col"><h3>Username</h3></th>
                   
                    <th scope="col"><h3>Action</h3></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.filter((dat)=> {
                                if(searchTerm === "" && Role === dat.role){
                                    return dat
                                }else if(dat.name.toLowerCase().includes(searchTerm.toLowerCase()) && Role === dat.role) {
                                    return dat
                                }else if(dat.email.toLowerCase().includes(searchTerm.toLowerCase()) && Role === dat.role) {
                                    return dat
                                }
                                
                            }).map((dat, index)=>(
                            <tr>
                                <th scope="row" key={index}><b>{index+1}</b></th>
                                <td><b>{dat.title}</b></td>
                                <td><b>{dat.name}</b></td>
                                <td><b>{dat.email}</b></td>
                                
                            
                                <td>
                                
                                    {/* <Link className='btn btn-outline-primary mx-2'
                                    to={`/edituser/${user.id}`}
                                    >Edit</Link>
                                    <button className='btn btn-danger mx-2'
                                    onClick={()=>deleteUser(user.id)}>Delete</button> */}

                                    <Link className='btn btn-outline-primary mx-2'
                                    onClick={() => setManager(<EditOperator setManager={setManager} id={dat.id} />)}
                                    >Edit</Link>

                                    <button className='btn btn-danger mx-2' onClick={() => deleteOperator(dat?.id)}
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
