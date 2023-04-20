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

  const [emailinput, setEmailInput] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const changeEmail = (e) => {
      setEmailInput(e.target.value)
     
      emailValidation()
  }

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(emailinput)) {
      setEmailMessage("Email is Valid");

      setEmailMessage("");
    } else if (!regEx.test(emailinput) && emailinput !== "") {
      setEmailMessage("Email is Not Valid");
    } else {
      setEmailMessage("");
    }
  }

  const [mobile, setmobile] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  const changephone = (e) => {
    setmobile(e.target.value);
    phoneValidation()
  }

  const phoneValidation = () => {
    const PHONE_REGEX = new RegExp(/^[0-9\b]+$/);
    
 
    if (PHONE_REGEX.test(mobile) && mobile.length === 9) {
      setPhoneMessage("Phone no. is Valid");

      setPhoneMessage("");
    } else if(!PHONE_REGEX.test(mobile) && mobile !== "") {
      setPhoneMessage("Invalid phone number.");
    }
    else if(PHONE_REGEX.test(mobile) && mobile.length > 9) {
      setPhoneMessage("Invalid phone number. More Than 10 digits");
    }
    else if(PHONE_REGEX.test(mobile) && mobile.length < 9) {
      setPhoneMessage("Invalid phone number. Less Than 10 digits");
    }
    else {
      setPhoneMessage("");
    }
  }

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
                onChange={(e) => onInputChange(e)}
              />
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
                onChange={(e) => {onInputChange(e); changeEmail(e)}}
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
                type="tel"
                class="form-control"
                id="inputUsername3"
                placeholder="Phone No."
                name="phoneNumber"
                value={editManager?.phoneNumber}
                onChange={(e) => {onInputChange(e); changephone(e)}}
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
