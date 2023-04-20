import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import AllManager from './AllManager';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAddManager } from "../services/AddManagerService";
import Loader from "../Loader/Loader";
import Dropdown from "react-bootstrap/Dropdown";

export default function AddManager(props) {
  // const setAdmin = props.setAdmin;
  const setShowAdd = props.setShowAdd;

  let navigate = useNavigate();

  const [loginloader, setloginloader] = useState(true);

  const [addManager, setAddManager] = useState({
    title: "",
    name: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    // console.log(addManager)
    !localStorage.getItem("token") ? navigate("/") : navigate("/Admin");
  }, []);

  const onInputChange = (e) => {
    setAddManager({ ...addManager, [e.target.name]: e.target.value });

    console.log(addManager)

  };

  const changestateCancel = () => {
    // setAdmin(<AllManager setAdmin={setAdmin} />)

    navigate("/Admin");
    setShowAdd(true);
  };

  const changestateAdd = () => {
    // setAdmin(<AllManager setAdmin={setAdmin} />)

    // toast("New Manager Created 👍");
    // setTimeout(()=>{
    //   navigate("/Admin")

    // setShowAdd(true);
    // },3000);

    setloginloader(false);

    getAddManager(addManager)
      .then((res) => {
        // localStorage.setItem("token", res?.accessToken);
        console.log("successfully add Manager");
        toast.info("New Manager Created 👍");
        
        setShowAdd(true);
        // navigate("/Admin");
      })
      .catch((err) => {
        console.log("erroor login", err);
      }).finally(()=>{
        setloginloader(true);

      })
      navigate("/Admin");
      window.location.reload();
  };


  const [nameinput, setNameInput] = useState("")
  const [nameMessage, setNameMessage] = useState("")

  const NameValidation = (e) => {
    setNameInput(e.target.value)

    const nameRegex = /^[a-zA-Z\s]*$/;
    if (nameRegex.test(nameinput)) {
      setNameMessage("");
      setEnablesubmit(false)
     
    } else {
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

  

  const [titledrop, setTitledrop] = useState("Select Title");

  const titledropdown = (name) => {
    setAddManager({ ...addManager, ["title"]: name })
    console.log(addManager)
  }

  const [enablesubmit, setEnablesubmit] = useState(true)


  return (

    
    <div className="container my-4 pt-4 table shadow  bg-light rounded-7">
    {loginloader ? (
      <form>
        <div class="form-group row">
          <label for="inputId3" class="col-sm-2 col-form-label">
            <h6 class="text-black">
              <b>Title</b>
            </h6>
          </label>
          <div class="col-sm-10">
            {/* <input
              type="id"
              class="form-control"
              id="inputId3"
              placeholder="Title"
              name="title"
              value={addManager?.title}
              onChange={(e) => onInputChange(e)}
            /> */}


            <Dropdown className="d-inline">
                    <Dropdown.Toggle id="">
                    {titledrop}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      
                        <Dropdown.Item
                          href="#"
                          value="Mr"
                          name="title"
                          onClick={() =>{ 
                          setTitledrop("Mr")
                          ; titledropdown("Mr")
                          }}
                        >
                         Mr
                        </Dropdown.Item>

                        <Dropdown.Item
                          href="#"
                          value="Mrs"
                          name="title"
                          onClick={() =>{ 
                          setTitledrop("Mrs")
                          ; titledropdown("Mrs")
                          
                          }}
                        >
                         Mrs
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#"
                          value="Ms"
                          name="title"
                          onClick={() =>{ 
                          setTitledrop("Ms")
                          ; titledropdown("Ms")
                          }}
                        >
                         Ms
                        </Dropdown.Item>
                    
                    </Dropdown.Menu>
                  </Dropdown>
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
              value={addManager?.name}
              onChange={(e) => {onInputChange(e); NameValidation(e)}}
              // required
            />
             <o class="text-danger">{nameMessage}</o>
          </div>
        </div>

        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            <h6 class="text-black">
              <b>Email</b>
            </h6>
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="Email"
              name="email"
              value={addManager?.email}
              onChange={(e) => {onInputChange(e);EmailValidation(e)}}
              // required
            />
           <o class="text-danger">{emailMessage}</o>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            <h6 class="text-black">
              <b>Phone No.</b>
            </h6>
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="phone"
              placeholder="Phone No."
              maxlength="10"
              name="phoneNumber"
              value={addManager?.phoneNumber}
              onChange={(e) => {onInputChange(e); PhoneValidation(e)}}

              // required
            />
            <o class="text-danger">{phoneMessage}</o>
          </div>
        </div>

        <div class="form-group row my-5">
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
              onClick={changestateAdd}
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
