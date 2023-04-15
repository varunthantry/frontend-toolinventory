import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import AllManager from './AllManager';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAddManager } from "../services/AddManagerService";
import Loader from "../Loader/Loader";

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
        navigate("/Admin");
        setShowAdd(true);
      })
      .catch((err) => {
        console.log("erroor login", err);
      }).finally(()=>{
        setloginloader(true);

      })
  };

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
            <input
              type="id"
              class="form-control"
              id="inputId3"
              placeholder="Title"
              name="title"
              value={addManager?.title}
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
              value={addManager?.name}
              onChange={(e) => onInputChange(e)}
            />
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
              value={addManager?.phoneNumber}
              onChange={(e) => onInputChange(e)}
            />
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
