import React, { useEffect, useState } from "react";
import AllOperator from "./AllOperator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../pages/css/style.css";
import { getAddOperator } from "../services/AddOperatorService";
import Loader from "../Loader/Loader";
import Dropdown from "react-bootstrap/Dropdown";

export default function AddOperator(props) {
  const setManager = props.setManager;

  const [loader, setLoader] = useState(true);

  const [addOperator, setAddOperator] = useState({
    title: "",
    name: "",
    email: "",
    phoneNumber: "",
  });

  // useEffect(()=>{
  //   console.log(addOperator)
  // }, [])

  const onInputChange = (e) => {
    setAddOperator({ ...addOperator, [e.target.name]: e.target.value });

    console.log(addOperator)
  };

  const AddOperator = () => {
    // toast("New Operator Created 👍");
    // setTimeout(()=>{
    //   setManager(<AllOperator setManager={setManager} />)
    // },3000);

    setLoader(false);

    getAddOperator(addOperator)
      .then((res) => {
        // localStorage.setItem("token", res?.accessToken);
        toast.info("New Operator Created 👍");
        console.log("successfully add Operator");

        setManager(<AllOperator setManager={setManager} />);
      })
      .catch((err) => {
        console.log("erroor login", err);
      })
      .finally(()=>{
        setLoader(true);

      })
  };


  // const [nameinput, setNameInput] = useState("")
  const [nameMessage, setNameMessage] = useState("")

  const NameValidation = (e) => {
    // setNameInput(e.target.value)

    const nameRegex = /^[a-zA-Z\s]*$/;
    if (nameRegex.test(e.target.value)) {
      setNameMessage("");
      setEnablesubmit(false)
     
    } else {
      setNameMessage("Name is Not Valid. Use only space and alphabets");
      setEnablesubmit(true)
    } 
  }
  


  // const [emailinput, setEmailInput] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const EmailValidation = (e) => {
      // setEmailInput(e.target.value)
     
      const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      if (regEx.test(e.target.value)) {
        setEmailMessage("");
        setEnablesubmit(false)
        
      } else {
        setEmailMessage("Email is Not Valid");
        setEnablesubmit(true)
      } 
  }

  

  // const [mobile, setmobile] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  const PhoneValidation = (e) => {
    // setmobile(e.target.value);

    const PHONE_REGEX = new RegExp(/^[0-9\b]+$/);
    
 
    if (PHONE_REGEX.test(e.target.value) && e.target.value.length === 10) {

      setPhoneMessage("");
      setEnablesubmit(false)
    } else if(!PHONE_REGEX.test(e.target.value) && e.target.value !== "") {
      setPhoneMessage("Invalid phone number.");
      setEnablesubmit(true)
    }
    else if(PHONE_REGEX.test(e.target.value) && e.target.value.length > 10) {
      setPhoneMessage("Invalid phone number. More Than 10 digits");
      setEnablesubmit(true)
    }
    else if(PHONE_REGEX.test(e.target.value) && e.target.value.length < 10) {
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
    setAddOperator({ ...addOperator, ["title"]: name })
    console.log(addOperator)
  }

  const [enablesubmit, setEnablesubmit] = useState(true)

  return (
    <div className="container my-5 pt-5 table shadow  bg-light rounded-7 aded">

{loader ? (
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
              value={addOperator?.title}
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
              value={addOperator?.name}
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
              id="inputEmail3"
              placeholder="Username"
              name="email"
              value={addOperator?.email}
              onChange={(e) => {onInputChange(e); EmailValidation(e)}}
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
              // pattern="[0-9]*"
              id="phone"
              placeholder="Phone No."
              maxlength="10"
              name="phoneNumber"
              value={addOperator?.phoneNumber}
              onChange={(e) => {onInputChange(e);PhoneValidation(e)}}
            />
             <o class="text-danger">{phoneMessage}</o>
          </div>
        </div>

        <div class="form-group row my-5">
          <div>
            <button
              type="submit"
              class="btn btn-danger mx-2"
              onClick={() =>
                setManager(<AllOperator setManager={setManager} />)
              }
            >
              <b>Cancel</b>
            </button>

            <button
              type="submit"
              class="btn btn-primary mx-2"
              onClick={AddOperator}
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
