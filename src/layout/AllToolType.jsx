import React,{useState, useEffect} from 'react'
// import { Link} from 'react-router-dom';
import { getAllToolType } from '../services/AllToolType';
import AddToolType from "./AddToolType";
import SearchIcon from '@mui/icons-material/Search';
// import APIheader from '../services/apiHelper';
 

export default function AllToolType(props) {
    const setManager = props.setManager;

    const [data, setData] = useState([])
    useEffect(() => {
    //  getAllToolType().then((res)=>{
    //     console.log(res);
    //  }).catch((err)=>{
    //     console.log(err)
    //  })

            getTool();
    }, [])


    const getTool = () =>{
        fetch("https://localhost:8989/users",{
            method : "GET"
        }).then((res)=>{
            console.log("res",res);
        }).catch((err)=>{
            console.log(err);
        })
    }
    

    // const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    
    return (
        <div>
            
            <div>

            <button class="ml-2 btn btn-danger btn-sm pt-4 mt-5 mx-5" 
            onClick={() => setManager(<AddToolType setManager={setManager} />)}
             >
                <b>Add Tool Type</b>
            </button>
            </div>

            {/* search */}

            <div class='nav-link navi mx-1 my-4 text-black rounded-7'>
             {/* <Searchbar /> */}

                <input type="text" placeholder="Search...." class="rounded-7" 
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
                <SearchIcon />
             
             </div>
        
            <h3 class='heading pt-3 text-black'>Tool Type</h3>
        <div className='py-4 mx-5'>
          <table className="table  shadow bg-white rounded-7">
              <thead>
                  <tr>
                  <th scope="col">#</th>
                  <th scope="col"><h3>Tool Type Name</h3></th>
                  <th scope="col"><h3>Action</h3></th>
                  
                  </tr>
              </thead>
              <tbody>
  
                      {
                          data.filter((dat)=> {
                                if(searchTerm === ""){
                                    return dat
                                }else if(dat.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return dat
                                }
                                
                            }).map((dat, index)=>(
                              <tr>
                                  <th scope="row" key={index}><b>{dat.id}</b></th>
                                  <td><b>{dat.name}</b></td>
                                 
                                 
                              
                                  <td>
                                  
                                      {/* <Link className='btn btn-outline-primary mx-2'
                                      to={`/edituser/${user.id}`}
                                      >Edit</Link>
                                      <button className='btn btn-danger mx-2'
                                      onClick={()=>deleteUser(user.id)}>Delete</button> */}
  
                                      {/* <Link className='btn btn-outline-primary mx-2' 
                                       onClick={() => {setManager(<EditTool setManager={setManager} />)}} 
                                      >Edit</Link> */}
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
