import React from 'react'
import { useNavigate } from 'react-router-dom';
// import AllManager from './AllManager';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddManager(props) {
    // const setAdmin = props.setAdmin;
    const setShowAdd = props.setShowAdd;

    let navigate = useNavigate();

    const changestateCancel = () => {
      // setAdmin(<AllManager setAdmin={setAdmin} />)
      
      navigate("/Admin")
      setShowAdd(true);
    }

    const changestateAdd = () => {
      // setAdmin(<AllManager setAdmin={setAdmin} />)
      toast("New Manager Created 👍");
      setTimeout(()=>{
        navigate("/Admin")
        // setAdmin(<AllManager setAdmin={setAdmin} />)
        setShowAdd(true);
      },3000);
      
      
    }

    return (
      <div className='container my-4 pt-4 table shadow  bg-light rounded-7'>
        <form>
          <div class="form-group row">
            <label for="inputName3" class="col-sm-2 col-form-label"><h6 class="text-black"><b>Name</b></h6></label>
            <div class="col-sm-10">
              <input type="name" class="form-control" id="inputName3" placeholder="Name" />
            </div>
          </div>
  
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label"><h6 class="text-black"><b>Username</b></h6></label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label"><h6 class="text-black"><b>Password</b></h6></label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
            </div>
          </div>
        
          <div class="form-group row my-5">
            {/* <div class="col-sm-10"> */}
            <div>
              <button type="submit" class="btn btn-danger mx-2" 
              onClick={changestateCancel}><b>Cancel</b></button>
  
              <button type="submit" class="btn btn-primary mx-2"
              onClick={changestateAdd}><b>Add</b></button>
              <ToastContainer />
            </div>
          </div>
      </form>
    
      </div>
    )
}
