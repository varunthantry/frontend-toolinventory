import React from 'react'
// import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllTool from './AllTool';
import "../pages/css/style.css"

export default function AddTool(props) {

  const setManager = props.setManager;
  
  // let navigate = useNavigate();

  const added = () => {
    toast("Tools Added 👍");
    setTimeout(()=>{
      setManager(<AllTool setManager={setManager} />)
    },3000);
    
    // setManager(<AllTool setManager={setManager} />)
    // navigate(-1);
  }

  
    return (
        <div className='container table tooladd shadow  bg-light rounded-7'>
          <form>
            <div class="form-group row">
              <label for="inputName3" class="col-sm-2 col-form-label"><h6 class="text-black"><b>Tool Name</b></h6></label>
              <div class="col-sm-10">
                <input type="name" class="form-control" id="inputName3" placeholder="Name" />
              </div>
            </div>
    
            <div class="form-group row">
              <label for="input3" class="col-sm-2 col-form-label"><h6 class="text-black"><b>Units</b></h6></label>
              <div class="col-sm-10">
                <input type="numeric" class="form-control" id="input3" placeholder="Units" />
              </div>
            </div>
            {/* <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
              </div>
            </div> */}
          
            <div class="form-group row my-5">
             
              <div>
                <button type="submit" class="btn btn-danger mx-2" onClick={()=> {setManager(<AllTool setManager={setManager} />)}}><b>Cancel</b></button>
                <button type="submit" class="btn btn-primary mx-2" onClick={added}><b>Add</b></button>
                <ToastContainer />
              </div>
            </div>
        </form>
      
        </div>
      )
}
