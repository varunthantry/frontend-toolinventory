import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../pages/css/style.css"
import AllToolType from './AllToolType';

export default function AddToolType(props) {

    const setManager = props.setManager;

  const AddTooltype = () => {
    toast("New Tool Type Added 👍");
    setTimeout(()=>{
      setManager(<AllToolType setManager={setManager} />)
    },3000);
  }

  return (
    <div className='container my-5 pt-5 table shadow  bg-light rounded-7 aded'>
      <form>
        <div class="form-group row">
          <label for="inputName3" class="col-sm-2 col-form-label"><h6 class="text-black"><b>Tool Type</b></h6></label>
          <div class="col-sm-10">
            <input type="name" class="form-control" id="inputName3" placeholder="Tool Type" />
          </div>
        </div>
      
        <div class="form-group row my-5">
          <div>
            <button type="submit" class="btn btn-danger mx-2" 
            onClick={()=> setManager(<AllTool setManager={setManager} />)}><b>
            Cancel
            </b></button>

            <button type="submit" class="btn btn-primary mx-2"
            onClick={AddTooltype}><b>
            Add
            </b></button>
            <ToastContainer />
          </div>
        </div>
    </form>
  
    </div>
  )
}
