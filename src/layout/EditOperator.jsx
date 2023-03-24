import React from 'react'
import AllOperator from './AllOperator';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function EditOperator(props) {
  // let navigate = useNavigate();

  //   const {id} = useParams();

  //   const [user, setUser] = useState({
  //     name:"",
  //     username: "",
  //     password: ""
  //   })

  //   const [name, username, password] = user;

  //   useEffect(()=>{
  //     loadUser();
  //   }, [])

  //   const loadUser = ()=>{
  //       const result = 
  //       setUser(result.data);
  //   }


  const setManager = props.setManager;
  
  const changeEditOperator = () => {
    // toast("Successfully Edited Operator 👍")
    // setTimeout(()=>{
      setManager(<AllOperator setManager={setManager} />)
    // },3000);
  }

  return (
    <div className='container my-5 pt-5 table shadow  bg-light rounded-7'>
      <form>
        {/* <div class="form-group row">
           <label for="inputId3" class="col-sm-2 col-form-label">Id</label>
          <div class="col-sm-10">
            <input type="id" 
            class="form-control" 
            id="inputId3" 
            placeholder="Id" 
            name="id"

            />
          </div> 
        </div> */}
        <div class="form-group row">
          <label for="inputName3" class="col-sm-2 col-form-label"><h6 class="text-black"><b>Name</b></h6></label>
          <div class="col-sm-10">
            <input type="name"
             class="form-control" 
             id="inputName3" 
             placeholder="Name" 
            //  name="name"
            //  value={name}
             />
          </div>
        </div>

        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label"><h6 class="text-black"><b>Username</b></h6></label>
          <div class="col-sm-10">
            <input type="email" 
            class="form-control" 
            id="inputUsername3" 
            placeholder="Username" 
              // value={username}
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label"><h6 class="text-black"><b>Password</b></h6></label>
          <div class="col-sm-10">
            <input type="password" 
            class="form-control" 
            id="inputPassword3" 
            placeholder="Password" 
            // name="password" 
              // value={password}
            />
          </div>
        </div>
      
        <div class="form-group row my-5">
          {/* <div class="col-sm-10"> */}
          <div>
            <button type="submit" class="btn btn-danger mx-2" 
            onClick={()=> setManager(<AllOperator setManager={setManager} />)}><b>Cancel</b></button>
         
            <button type="submit" class="btn btn-primary mx-2"
            onClick={changeEditOperator}><b>
            Edit
            </b></button>
            {/* <ToastContainer /> */}
          </div>
        </div>
    </form>
  
    </div>
  )
}
