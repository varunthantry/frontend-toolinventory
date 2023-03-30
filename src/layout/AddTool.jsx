import React from 'react'
// import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllTool from './AllTool';
import "../pages/css/style.css"
import Dropdown from 'react-bootstrap/Dropdown';

export default function AddTool(props) {

  const setManager = props.setManager;
  
  // let navigate = useNavigate();

  const added = () => {
    toast("Tools Added 👍");
    setTimeout(()=>{
      setManager(<AllTool setManager={setManager} />)
    },3000);
    
    // setManager(<AllTool setManager={setManager} />)

  }

  
    return (
        <div className='container table tooladd shadow  bg-light rounded-7'>
          <form>
            
            <div class="form-group row">
              <label for="inputName3" class="col-sm-2 col-form-label"><h6 class="text-black"><b>Select Tool Type</b></h6></label>
              <div class="col-sm-10">
                <Dropdown className="d-inline">
                        <Dropdown.Toggle id="dropdown-autoclose-true">
                        Select Tool Type
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item href="#" value="tooltype1">Tool type1</Dropdown.Item>
                        <Dropdown.Item href="#" value="tooltype2">Tooltype 2</Dropdown.Item>
                        <Dropdown.Item href="#" value="tooltype3">Tooltype 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
              </div>
            </div>

            <div class="form-group row">
              <label for="inputName3" class="col-sm-2 col-form-label"><h6 class="text-black"><b>Tool Name</b></h6></label>
              <div class="col-sm-10">
                <input type="name" class="form-control" id="inputName3" placeholder="Tool Name" />
              </div>
            </div>
    
            <div class="form-group row">
              <label for="input3" class="col-sm-2 col-form-label"><h6 class="text-black"><b>Units</b></h6></label>
              <div class="col-sm-10">
                <input type="numeric" class="form-control" id="input3" placeholder="Units" />
              </div>
            </div>
            
            <div class="form-group row">
              <label for="input3" class="col-sm-2 col-form-label"><h6 class="text-black"><b>Machine Name</b></h6></label>
              <div class="col-sm-10">
                <input type="name" class="form-control" id="inputName3" placeholder="Machine Name" />
              </div>
            </div>
          
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
