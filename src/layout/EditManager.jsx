import React from 'react'
import { useNavigate } from 'react-router-dom';
// import AllOperator from './AllOperator';

import "../pages/css/style.css"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function EditManager() {
  let navigate = useNavigate();

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


  const changeeditManager = () => {

    // toast("Successfully Edited Manager 👍")
    // setTimeout(()=> {

      navigate("/Admin")

    // },3000);
  }

  return (
    <>
    <h3 class='heading pt-5 text-black'>Edit Manager</h3>
    <div className='container my-5 pt-5 table shadow  bg-light rounded-7'>
      <form>
        <div class="form-group row">
          {/* <label for="inputId3" class="col-sm-2 col-form-label">Id</label>
          <div class="col-sm-10">
            <input type="id" 
            class="form-control" 
            id="inputId3" 
            placeholder="Id" 
            name="id"

            />
          </div> */}
        </div>
        <div class="form-group row">
          <label for="inputName3" class="col-sm-2 col-form-label"><h6 class="text-black"><b>Name</b></h6></label>
          <div class="col-sm-10">
            <input type="name"
             class="form-control" 
             id="inputName3" 
             placeholder="Name" 
             name="name"
            //  value={name}
             />
          </div>
        </div>

        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label"><h6 class="text-black"><b>Username</b></h6></label>
          <div class="col-sm-10">
            <input 
            type="username" 
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
            <input 
            type="password" 
            class="form-control" 
            id="inputPassword3" 
            placeholder="Password" 
            name="password" 
              // value={password}
            />
          </div>
        </div>
      
        <div class="form-group row my-5">
          {/* <div class="col-sm-10"> */}
          <div>
            <button type="submit" class="btn btn-danger mx-2" 
            onClick={()=> navigate("/Admin")}><b>Cancel</b></button>
         
            <button type="submit" class="btn btn-primary mx-2"
            onClick={changeeditManager}><b>Edit</b></button>
            {/* <ToastContainer /> */}
          </div>
        </div>
    </form>
  
    </div>
</>
  )
}