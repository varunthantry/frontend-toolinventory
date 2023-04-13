import React, { useEffect, useState } from "react";
import AllOperator from "./AllOperator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../pages/css/style.css";
import { getAddOperator } from "../services/AddOperatorService";

export default function AddOperator(props) {
  const setManager = props.setManager;

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
  };

  const AddOperator = () => {
    // toast("New Operator Created 👍");
    // setTimeout(()=>{
    //   setManager(<AllOperator setManager={setManager} />)
    // },3000);

    getAddOperator(addOperator)
      .then((res) => {
        localStorage.setItem("token", res?.accessToken);
        toast.info("New Operator Created 👍");
        console.log("successfully add Operator");

        setManager(<AllOperator setManager={setManager} />);
      })
      .catch((err) => {
        console.log("erroor login", err);
      });
  };

  return (
    <div className="container my-5 pt-5 table shadow  bg-light rounded-7 aded">
      <form>
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
              value={addOperator?.title}
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
              value={addOperator?.name}
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
              id="inputEmail3"
              placeholder="Username"
              name="email"
              value={addOperator?.email}
              onChange={(e) => onInputChange(e)}
            />
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
              type="text"
              class="form-control"
              id="inputPassword3"
              placeholder="Phone No."
              name="phoneNumber"
              value={addOperator?.phoneNumber}
              onChange={(e) => onInputChange(e)}
            />
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
            >
              <b>Add</b>
            </button>
            <ToastContainer />
          </div>
        </div>
      </form>
    </div>
  );
}
