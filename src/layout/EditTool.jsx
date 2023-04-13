import React from "react";
import AllTool from "./AllTool";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditTool(props) {
  const setManager = props.setManager;

  const changestateCancel = () => {
    setManager(<AllTool setManager={setManager} />);
  };

  const changestateAddTool = () => {
    // toast("Tool Edited Successfully 👍");
    // setTimeout(()=>{
    //   setManager(<AllTool setManager={setManager} />)
    // },2000);

    toast.info("Edited Successfully");
    setManager(<AllTool setManager={setManager} />);
  };

  return (
    <div className="container table my-5 pt-5 shadow  bg-light rounded-7">
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
          <label for="inputName3" class="col-sm-2 col-form-label">
            <h6 class="text-black">
              <b>Tool Name</b>
            </h6>
          </label>
          <div class="col-sm-10">
            <input
              type="name"
              class="form-control"
              id="inputName3"
              placeholder="Name"
              name="name"
              //  value={name}
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="inputUsernamel3" class="col-sm-2 col-form-label">
            <h6 class="text-black">
              <b>Units</b>
            </h6>
          </label>
          <div class="col-sm-10">
            <input
              type="username"
              class="form-control"
              id="inputUnit3"
              placeholder="Unit"
              // value={unit}
            />
          </div>
        </div>
        {/* <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <input type="password" 
                class="form-control" 
                id="inputPassword3" 
                placeholder="Password" 
                name="password" 
                  value={password}
                />
              </div>
            </div> */}

        <div class="form-group row my-5">
          {/* <div class="col-sm-10"> */}
          <div>
            <button
              type="submit"
              class="btn btn-danger mx-2"
              onClick={changestateCancel}
            >
              <b>Cancel</b>
            </button>

            <button
              type="submit"
              class="btn btn-primary mx-2"
              onClick={changestateAddTool}
            >
              <b>Edit</b>
            </button>
            <ToastContainer />
          </div>
        </div>
      </form>
    </div>
  );
}
