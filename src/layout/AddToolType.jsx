import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../pages/css/style.css"
import AllToolType from './AllToolType';
import { getAddToolType } from '../services/AllToolType';

export default function AddToolType(props) {

    const setManager = props.setManager;

    const [addtooltype, setAddtooltype] = useState({

      name : "",
      
    })


  const onInputChange=(e)=>{

    setAddtooltype({...addtooltype, [e.target.name]:e.target.value})
  }

  const AddTooltype = () => {
    // toast("New Tool Type Added 👍");
    // setTimeout(()=>{
    //   setManager(<AllToolType setManager={setManager} />)
    // },3000);

    getAddToolType(addtooltype).then((res)=>{
      // localStorage.setItem("token", res?.accessToken)
      console.log("successfully add Tool Type");
      setManager(<AllToolType setManager={setManager} />)

    }).catch((err)=>{
      console.log("erroor login", err);
    })
  }

  return (
    <div className='container my-5 pt-5 table shadow  bg-light rounded-7 aded'>
      <form>
        <div class="form-group row">
          <label for="inputName3" class="col-sm-2 col-form-label"><h6 class="text-black"><b>Tool Type</b></h6></label>
          <div class="col-sm-10">
            <input type="name" class="form-control" id="inputName3" placeholder="Tool Type" 
              name="name"
             value={addtooltype?.name}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
        </div>
      
        <div class="form-group row my-5">
          <div>
            <button type="submit" class="btn btn-danger mx-2" 
            onClick={()=> setManager(<AllToolType setManager={setManager} />)}><b>
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
