import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../pages/css/style.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getManagerDetails, getEditManager } from "../services/EditManager";
import Loader from "../Loader/Loader";

export default function EditManager() {
  let navigate = useNavigate();

  const [loader, setLoader] = useState(true);

  const location = useLocation();
  let id = new URLSearchParams(location.search).get("id");

  const [editManager, setEditManager] = useState({
    title: "",
    name: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    loadManager();
  }, []);

  const onInputChange = (e) => {
    setEditManager({ ...editManager, [e.target.name]: e.target.value });
  };

  const changeeditManager = () => {

    setLoader(false);
    getEditManager(editManager, id)
      .then((res) => {
       
        toast.info("Edited Successfully");
        // navigate("/Admin");
      })
      .catch((err) => {
        console.log("erroor login", err);
      })
      .finally(()=>{
        setLoader(true);

      })

      navigate("/Admin");
  };

  const loadManager = () => {

    setLoader(false);
    getManagerDetails(id)
      .then((res) => {
        setEditManager(res);
      })
      .catch((err) => {
        console.log("erroor login", err);
      })
      .finally(()=>{
        setLoader(true);

      })
  };

  const [nameinput, setNameInput] = useState("")
  const [nameMessage, setNameMessage] = useState("")

  const NameValidation = (e) => {
    setNameInput(e.target.value)
    console.log(e.target.value)

    const nameRegex = /^[a-zA-Z\s]*$/;
    if (nameRegex.test(nameinput)) {
      setNameMessage("");
      setEnablesubmit(false)
     
    } else if(!nameRegex.test(nameinput) || nameinput === "") {
      setNameMessage("Name is Not Valid. Use only space and alphabets");
      setEnablesubmit(true)
    } 
  }

  const [emailinput, setEmailInput] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const EmailValidation = (e) => {
      setEmailInput(e.target.value)
     
      const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      if (regEx.test(emailinput)) {
        setEmailMessage("");
        setEnablesubmit(false)
        
      } else {
        setEmailMessage("Email is Not Valid");
        setEnablesubmit(true)
      } 
  }

 

  const [mobile, setmobile] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  const PhoneValidation = (e) => {
    setmobile(e.target.value);
    const PHONE_REGEX = new RegExp(/^[0-9\b]+$/);
    
    if (PHONE_REGEX.test(mobile) && mobile.length === 9) {

      setPhoneMessage("");
      setEnablesubmit(false)
    } else if(!PHONE_REGEX.test(mobile) && mobile !== "") {
      setPhoneMessage("Invalid phone number.");
      setEnablesubmit(true)
    }
    else if(PHONE_REGEX.test(mobile) && mobile.length > 9) {
      setPhoneMessage("Invalid phone number. More Than 10 digits");
      setEnablesubmit(true)
    }
    else if(PHONE_REGEX.test(mobile) && mobile.length < 9) {
      setPhoneMessage("Invalid phone number. Less Than 10 digits");
      setEnablesubmit(true)
    }
    else {
      setPhoneMessage("");
      setEnablesubmit(false)
    }
  }

  const [enablesubmit, setEnablesubmit] = useState(false)

  return (
    <div>


      <h3 class="heading pt-5 text-black">Edit Manager</h3>

      {loader ? (

      <div className="container my-5 pt-5 table shadow  bg-light rounded-7">
        <form >
          <div class="form-group row">
            <label for="inputId3" class="col-sm-2 col-form-label">
              <h6 class="text-black">
                <b>Title</b>
              </h6>
            </label>
            <div class="col-sm-10">
              <input
                type="id"
                class="form-control"
                id="inputId3"
                placeholder="Title"
                name="title"
                value={editManager?.title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputName3" class="col-sm-2 col-form-label">
              <h6 class="text-black">
                <b>Name</b>
              </h6>
            </label>
            <div class="col-sm-10">
              <input
                type="name"
                class="form-control"
                id="inputName3"
                placeholder="Name"
                name="name"
                value={editManager?.name}
                onChange={(e) => {onInputChange(e); NameValidation(e)}}
              />
              <o class="text-danger">{nameMessage}</o>
            </div>
          </div>

          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              <h6 class="text-black">
                <b>Username</b>
              </h6>
            </label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="inputUsername3"
                placeholder="Username"
                name="email"
                value={editManager?.email}
                onChange={(e) => {onInputChange(e); EmailValidation(e)}}
              />
              <o class="text-danger">{emailMessage}</o>
            </div>
          </div>

          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              <h6 class="text-black">
                <b>Phone No.</b>
              </h6>
            </label>
            <div class="col-sm-10">
              <input
                type="number"
                class="form-control"
                id="inputUsername3"
                maxlength="10"
                placeholder="Phone No."
                name="phoneNumber"
                value={editManager?.phoneNumber}
                onChange={(e) => {onInputChange(e); PhoneValidation(e)}}
              />

              <o class="text-danger">{phoneMessage}</o>
            </div>
          </div>
          

          <div class="form-group row my-5">
            <div>
              <button
                type="submit"
                class="btn btn-danger mx-2"
                onClick={() => navigate("/Admin")}
              >
                <b>Cancel</b>
              </button>

              <button
                type="submit"
                class="btn btn-primary mx-2"
                onClick={changeeditManager}
                disabled={enablesubmit}
              >
                <b>Edit</b>
              </button>
              <ToastContainer />
            </div>
          </div>
        </form>
      </div>

      ) : (
       <Loader />
      )}
    </div>
  );
}
