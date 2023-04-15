import React, { useState, useEffect } from "react";
import "./css/cards.css";
import { Modal, ModalBody, Col, Row } from "reactstrap";
import { ModalHeader } from "reactstrap";
import { getToolTypeused, RequestTool } from "../services/AllSelectTools";
import Dropdown from "react-bootstrap/Dropdown";
import Loader from "../Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cards(props) {
  const machine_id = props.machine_id;
  const machine_name = props.machine_name;
  const description = props.description;
  // const tool_used = props.tool_used;
  // const image = props.image
  const available = props.available;

  // const [tooltypedropdown, setTooltypedropdown] = useState("Select Tools");

  const [loader, setLoader] = useState(true);

  const [toolInput, setToolInput] = useState({});

  const [modal, setmodal] = useState(false);

  const [toolused, setToolUsed] = useState([]);

  const onValueChange = (source, value) => {
    console.log(source, "source", value);
    const temp = { ...toolInput };
    temp[source] = value;
    setToolInput(temp);
    const temp1 = { ...toolsrequest };
    temp1["toolTypeAndUnits"] = temp;
    setToolsRequest(temp1);
  };

  useEffect(() => {
    console.log("Toollll", toolInput);
  }, [toolInput]);

  // const changHandler = (e) => {
  //   console.log(e);
  //   let tempTools = { ...toolInput };
  //   tempTools[e.target.name] = e.target.value;
  //   setToolInput(tempTools);
  //   console.log("Tool Input ", toolInput);
  // };

  const [toolsrequest, setToolsRequest] = useState({
    machineId: "",
    toolTypeAndUnits: {},
  });

  useEffect(() => {
    ToolTypeused(machine_id);

    setToolsRequest({ ...toolsrequest, ["machineId"]: machine_id });
  }, []);

  const changeStateRequestTool = () => {
    setmodal(true);

    ToolTypeused(machine_id);
  };

  const ToolTypeused = (machine_id) => {

    setLoader(false);
    getToolTypeused(machine_id)
      .then((res) => {
        setToolUsed(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(()=>{
        setLoader(true);

      })
  };

  // const onInputChange = (e) => {
  //   setToolsRequest({ ...toolsrequest, [e.target.name]: e.target.value });
  //   console.log(toolsrequest);
  // };

  const OnRequestTools = () => {
    // e.preventDefault();

    setLoader(false);

    RequestTool(toolsrequest)
      .then((res) => {

        toast.info("Successfully requested👍");
        console.log("Successfully requested");
        console.log(toolsrequest);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(()=>{
        setLoader(true);

      })
  };

  // const selectToolType = (id, name) => {
  //   setTooltypedropdown(name);
  //   setToolsRequest({ ...toolsrequest, ["toolTypeId"]: id });
  // };

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
            Tool used :-
            {toolused.map((x, index) => (
              <>
                {x.name}
                <br />{" "}
              </>
            ))}
          </p>
          <button
            type="submit"
            class="btn navi  text-black"
            disabled={!available}
          >
            <b class="navbutton" onClick={changeStateRequestTool}>
              Request Tool
            </b>
          </button>
        </div>
      </div>

      ) : (
       <Loader />
      )}

      <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)}>
          Select Quantity
        </ModalHeader>
        <ModalBody>
          <form>
            {toolused.map((x, index) => (
              <Row>
                <Col lg={12}>
                  <div class="form-group row">
                    <label for="inputName3" class="col-sm-2 col-form-label">
                      <h6 class="text-black">
                        <b>{x?.name}</b>
                      </h6>
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        name={x?.id}
                        onChange={(e) => {
                          console.log(e, "ggggg");
                          onValueChange(e.target.name, e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            ))}

            {/* <div class="form-group row">
              <Dropdown className="d-inline mx-2 main" autoClose="inside">
                <label for="inputName3" class="col-sm-2 col-form-label">
                  <h6 class="text-black">
                    <b>Select Tools</b>
                  </h6>
                </label>
                <Dropdown.Toggle id="dropdown-autoclose-inside" className="yy">
                  {tooltypedropdown}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {toolused.map((x, index) => (
                    <Dropdown.Item
                      href="#"
                      name="id"
                      onClick={() => selectToolType(x.id, x.name)}
                    >
                      {x.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <label for="inputName3" class="col-sm-2 col-form-label">
                <h6 class="text-black">
                  <b>Units</b>
                </h6>
              </label>
              <div class="col-sm-10">
                <input
                  type="number"
                  class="form-control"
                  placeholder=""
                  name="units"
                  value={toolsrequest?.units}
                  onChange={(e) => onInputChange(e)}
                />
              </div> */}
            {/* </div> */}

            <button
              type="submit"
              class="btn navi toolselect text-black"
              onClick={OnRequestTools}
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
