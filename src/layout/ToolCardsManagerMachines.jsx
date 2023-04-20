import React, { useState, useEffect } from "react";
import "./css/cards.css";
import { Modal, ModalBody, Col, Row } from "reactstrap";
import { ModalHeader } from "reactstrap";
import { getAllToolTypeMachine, getAddTool, getAllToolTypeSelect } from "../services/AllToolService";
import Dropdown from "react-bootstrap/Dropdown";
import Loader from "../Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CardsManagerMachines(props) {
  const machine_id = props.machine_id;
  const machine_name = props.machine_name;
  const description = props.description;
  const available = props.available;

  const [loader, setLoader] = useState(true);

  const [datatoolType, setDataToolType] = useState([]);

  const [dropdownselecttools, setDropDownSelectTools] = useState([])

  const [toolInput, setToolInput] = useState({});
  const [addTool, setAddTool] = useState({
    machineId: "",
    tools: {},
  });
  const [toolidd, setToolIdd] = useState();

  const [modal, setmodal] = useState(false);
  const [selecttooltypeebutton, settooltypeebutton] =
    useState("Select Tool Type");

  useEffect(() => {
    getToolType(machine_id);

    setAddTool({ ...addTool, ["machineId"]: machine_id });
  }, []);

  // const changHandler = (e) => {
  //   setToolInput({ ...toolInput, [e.target.name]: e.target.value });
  //   console.log(toolInput);
  // };

  const onValueChange = (source, value) => {
    console.log(source, "source", value);
    const temp = { ...toolInput };
    temp[source] = value;
    setToolInput(temp);
    const temp1 = { ...addTool };
    temp1["tools"] = temp;
    setAddTool(temp1);

    setEnableSubmit(false)
  };

  useEffect(() => {
    console.log("Toollll", toolInput);
  }, [toolInput]);

  const changeStateAdd = () => {
    setmodal(true);

    // getToolType(machine_id);
    dropdowntoolselect();
  };

  const dropdowntoolselect = () => {
    setLoader(false);
    getAllToolTypeSelect()
      .then((res) => {
        setDropDownSelectTools(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(()=>{
        setLoader(true);

      })
  }

  const getToolType = (machine_id) => {

    setLoader(false);
    getAllToolTypeMachine(machine_id)
      .then((res) => {
        setDataToolType(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(()=>{
        setLoader(true);

      })
  };

  const selectToolType = (name, id) => {
    settooltypeebutton(name);
    setToolIdd(id);

    setEnableUnit(false);
  };

  const added = () => {
    // setAddTool({ ...addTool, ["tools"]: toolInput });
    // console.log("toolInput", toolInput);
    // console.log(addTool);

    setLoader(false);

    getAddTool(addTool)
      .then((res) => {
        toast.info("Successfully add Tool");
        console.log("successfully add Tool");
        console.log(addTool);
      })
      .catch((err) => {
        console.log("erroor login", err);
        console.log(addTool);
      })
      .finally(()=>{
        setLoader(true);

      })
  };

  const [enablesubmit, setEnableSubmit] = useState(true)

  const [enableunit, setEnableUnit] = useState(true)

  return (
    <div>

{loader ? (
      <div class="card">
        <img
          class="card-img-top"
          src="https://www.adaniwilmar.com/-/media/Project/Wilmar/about-us/BAKERY.jpg?la=en&hash=36680AC142550138A6B0B2D0D56CD980"
          alt="Card image cap"
          width={150}
          height={170}
        />
        <div class="card-body">
          <h5 class="card-title">{machine_name}</h5>
          <p class="card-text">{description}</p>
          <p class="card-text">
            Tool used :-{" "}
            {datatoolType.map((x, index) => (
              <>{x.name} <br/> </>
            ))}
          </p>
          <button
            type="submit"
            class="btn navi  text-black"
            // disabled={available}
          >
            <b class="navbutton" onClick={changeStateAdd}>
              Add Tool
            </b>
          </button>
        </div>
      </div>

      ) : (
       <Loader />
      )}

      <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)}>Add Tool</ModalHeader>
        <ModalBody>
          <form>
            <Row>
              {/* {tool_used.map((x, index) => (
                <Col lg={12}>
                  <div class="form-group row">
                    <label for="inputName3" class="col-sm-2 col-form-label">
                      <h6 class="text-black">
                        <b>{x}</b>
                      </h6>
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="number"
                        class="form-control"
                        placeholder=""
                      />
                    </div>
                  </div>
                </Col>
              ))} */}

              <div class="form-group row">
                <label for="inputName3" class="col-sm-2 col-form-label">
                  <h6 class="text-black">
                    <b>Select Tool Type</b>
                  </h6>
                </label>
                <div class="col-sm-10 ">
                  <Dropdown className="d-inline yy">
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                      {selecttooltypeebutton}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {dropdownselecttools.map((dat, index) => (
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
                    type="number"
                    class="form-control"
                    id="input3"
                    placeholder="Units"
                    name={toolidd}
                    onChange={(e) => {
                      console.log(e, "ggg");
                      onValueChange(e.target.name, e.target.value);
                    }}

                    disabled={enableunit}
                  />
                </div>
              </div>
            </Row>
            <button
              type="submit"
              class="btn navi toolselect text-black"
              onClick={added}
              disabled={enablesubmit}
            >
              <b class="navbutton">submit</b>
            </button>
            <ToastContainer />
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}
