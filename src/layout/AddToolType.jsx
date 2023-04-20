import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../pages/css/style.css";
import AllToolType from "./AllToolType";
import { getAddToolType } from "../services/AllToolType";
import Loader from "../Loader/Loader";

export default function AddToolType(props) {
  const setManager = props.setManager;

  const [loader, setLoader] = useState(true);

  const [addtooltype, setAddtooltype] = useState({
    name: "",
  });

  const onInputChange = (e) => {
    setAddtooltype({ ...addtooltype, [e.target.name]: e.target.value });
  };

  const AddTooltype = () => {
    // toast("New Tool Type Added 👍");
    // setTimeout(()=>{
    //   setManager(<AllToolType setManager={setManager} />)
    // },3000);

    setLoader(false);

    getAddToolType(addtooltype)
      .then((res) => {
        // localStorage.setItem("token", res?.accessToken)

        toast.info("New Tool Type Added 👍");
        console.log("successfully add Tool Type");
        setManager(<AllToolType setManager={setManager} />);
      })
      .catch((err) => {
        console.log("erroor login", err);
      }).finally(()=>{
        setLoader(true);

      })
  };

  const [enablesubmit, setEnablesubmit] = useState(true)

  const [tooltypeinput, setToolTypeInput] = useState("")
  const [tooltypeMessage, settooltypeMessage] = useState("")

  const ToolTypeValidation = (e) => {
    setToolTypeInput(e.target.value)
    console.log("rrrrooo",e.target.value)

    const nameRegex = /^[a-zA-Z\s]*$/;
    if (nameRegex.test(tooltypeinput)) {
      settooltypeMessage("");
      setEnablesubmit(false)
     
    } else if(!nameRegex.test(tooltypeinput) || tooltypeinput === "") {
      settooltypeMessage("ToolType is Not Valid. Use only space and alphabets");
      setEnablesubmit(true)
    } 
  }

  return (
    <div className="container my-5 pt-5 table shadow  bg-light rounded-7 aded">

     {loader ? (
      <form>
        <div class="form-group row">
          <label for="inputName3" class="col-sm-2 col-form-label">
            <h6 class="text-black">
              <b>Tool Type</b>
            </h6>
          </label>
          <div class="col-sm-10">
            <input
              type="name"
              class="form-control"
              id="inputName3"
              placeholder="Tool Type"
              name="name"
              value={addtooltype?.name}
              onChange={(e) => {onInputChange(e); ToolTypeValidation(e)}}
            />
            <o class="text-danger">{tooltypeMessage}</o>
          </div>
        </div>

        <div class="form-group row my-5">
          <div>
            <button
              type="submit"
              class="btn btn-danger mx-2"
              onClick={() =>
                setManager(<AllToolType setManager={setManager} />)
              }
            >
              <b>Cancel</b>
            </button>

            <button
              type="submit"
              class="btn btn-primary mx-2"
              onClick={AddTooltype}
              disabled={enablesubmit}
            >
              <b>Add</b>
            </button>
            <ToastContainer />
          </div>
        </div>
      </form>

      ) : (
       <Loader />
      )}
    </div>
  );
}
