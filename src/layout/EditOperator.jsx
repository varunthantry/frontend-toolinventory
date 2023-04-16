import React, { useState, useEffect } from "react";
import AllOperator from "./AllOperator";
import {
  getOperatorDetails,
  getEditOperator,
} from "../services/EditOperatorService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditOperator(props) {
  // let navigate = useNavigate();

  //   const {id} = useParams();

  const [loader, setLoader] = useState(true);

  const setManager = props.setManager;
  const id = props.id;

  const [editOperator, setEditOperator] = useState({
    title: "",
    name: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    loadOperator();
  }, []);

  const onInputChange = (e) => {
    setEditOperator({ ...editOperator, [e.target.name]: e.target.value });
  };

  const changeEditOperator = () => {
    // toast("Successfully Edited Operator 👍")
    // setTimeout(()=>{
    // setManager(<AllOperator setManager={setManager} />)
    // },3000);

    setLoader(false);

    getEditOperator(editOperator, id)
      .then((res) => {
        // sessionStorage.setItem("token", res?.accessToken)
        // console.log(res?.accessToken)

        toast.info("Edited Successfully");
        console.log("successfully changed");
        setManager(<AllOperator setManager={setManager} />);
      })
      .catch((err) => {
        console.log("erroor login", err);
        toast.info("Error Occured");
      })
      .finally(()=>{
        setLoader(true);

      })
  };

  const loadOperator = () => {

    setLoader(false);
    getOperatorDetails(id)
      .then((res) => {
        setEditOperator(res);
      })
      .catch((err) => {
        console.log("erroor login", err);
        toast.info("Error Occured");
      })
      .finally(()=>{
        setLoader(true);

      })
  };

  return (
    <div className="container my-5 pt-5 table shadow  bg-light rounded-7">
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
              value={editOperator?.title}
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
              value={editOperator?.name}
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
              value={editOperator?.email}
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



            {/* <ToastContainer /> */}

            <button
              type="submit"
              class="btn btn-primary mx-2"
              onClick={changeEditOperator}
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
