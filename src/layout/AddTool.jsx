import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllTool from "./AllTool";
import "../pages/css/style.css";
import Dropdown from "react-bootstrap/Dropdown";
import {
  getAllMachineSelect,
  getAllToolTypeSelect,
  getAddTool,
} from "../services/AllToolService";

export default function AddTool(props) {
  const setManager = props.setManager;

  let navigate = useNavigate();

  const [selectmachinebutton, setmachinebutton] = useState("Select Machine");
  const [selecttooltypeebutton, settooltypeebutton] =
    useState("Select Tool Type");

  const [datamachine, setDataMachine] = useState([]);
  const [datatoolType, setDataToolType] = useState([]);

  // const [ida, setIda] = useState("");
  // const [unita, setUnita] = useState();

  const [addTool, setAddTool] = useState({});

  // machineId : "",
  // tools : {
  //   "" : ""
  // }

  const onInputChange = (e) => {
    setAddTool({ ...addTool, [e.target.name]: e.target.value });
    // console.log(addTool);
  };

  useEffect(() => {
    !localStorage.getItem("token") ? navigate("/") : navigate("/Manager");
    getAllMachineSelect()
      .then((res) => {
        setDataMachine(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const selectMachineType = (data) => {
    // setAddTool({...addTool, machineId :id})
    // console.log(addTool)

    setmachinebutton(data.name);

    getAllToolTypeSelect(data?.id)
      .then((res) => {
        // let temp = { ...addTool };
        // temp["machineId"] = id;
        // setAddTool(temp);
        setDataToolType(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const selectToolType = (name, id) => {
    settooltypeebutton(name);
  };

  const added = () => {
    // toast("Tools Added 👍");
    // setTimeout(()=>{
    //   setManager(<AllTool setManager={setManager} />)
    // },3000);

    // setManager(<AllTool setManager={setManager} />)

    getAddTool(addTool)
      .then((res) => {
        // localStorage.setItem("token", res?.accessToken)
        console.log("successfully add Tool");
        setManager(<AllTool setManager={setManager} />);
      })
      .catch((err) => {
        console.log("erroor login", err);
      });
  };

  function setUnits(value) {
    // let temp = { ...addTool };
    // temp["tools"][{ id }] = 4;
  }

  return (
    <div className="container table tooladd shadow  bg-light rounded-7">
      <form>
        <div class="form-group row">
          <label for="inputName3" class="col-sm-2 col-form-label">
            <h6 class="text-black">
              <b>Select Machine</b>
            </h6>
          </label>
          <div class="col-sm-10">
            <Dropdown className="d-inline">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                {selectmachinebutton}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {datamachine.map((dat, index) => (
                  <Dropdown.Item
                    href="#"
                    value={dat?.id}
                    name="machineId"
                    onClick={() => selectMachineType(dat)}
                  >
                    {dat?.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div class="form-group row">
          <label for="inputName3" class="col-sm-2 col-form-label">
            <h6 class="text-black">
              <b>Select Tool Type</b>
            </h6>
          </label>
          <div class="col-sm-10">
            <Dropdown className="d-inline">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                {selecttooltypeebutton}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {datatoolType.map((dat, index) => (
                  <Dropdown.Item
                    href="#"
                    value={dat?.id}
                    onClick={() => selectToolType(dat?.name, dat?.id)}
                  >
                    {dat?.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div class="form-group row">
          <label for="input3" class="col-sm-2 col-form-label">
            <h6 class="text-black">
              <b>Units</b>
            </h6>
          </label>
          <div class="col-sm-10">
            <input
              type="numeric"
              name="units"
              onChange={(event) => setUnits(event.target.value)}
              class="form-control"
              id="input3"
              placeholder="Units"
              // name="b"
              // value={u}
              // onChange={(e)=>onInputChangeunit(e)}
              //           value={u}
              // onChange={(e) => setU(e.target.value)}
            />
          </div>
        </div>

        <div class="form-group row my-5">
          <div>
            <button
              type="submit"
              class="btn btn-danger mx-2"
              onClick={() => {
                setManager(<AllTool setManager={setManager} />);
              }}
            >
              <b>Cancel</b>
            </button>
            <button type="submit" class="btn btn-primary mx-2" onClick={added}>
              <b>Add</b>
            </button>
            <ToastContainer />
          </div>
        </div>
      </form>
    </div>
  );
}
