import React, { useState, useEffect } from "react";
import "./css/cards.css";
import { Modal, ModalBody, Col, Row } from "reactstrap";
import { ModalHeader } from "reactstrap";
import { getAllToolTypeSelect, getAddTool } from "../services/AllToolService";
import Dropdown from "react-bootstrap/Dropdown";

export default function CardsManagerMachines(props) {
  const machine_id = props.machine_id;
  const machine_name = props.machine_name;
  const description = props.description;
  const available = props.available;

  const [datatoolType, setDataToolType] = useState([]);

  const [addTool, setAddTool] = useState({});

  const [modal, setmodal] = useState(false);
  const [selecttooltypeebutton, settooltypeebutton] =
    useState("Select Tool Type");

  // const [datatoolT, setDataToolT] = useState([]);

  useEffect(() => {
    // getAllToolTypeSelect(machine_id)
    //   .then((res) => {
    //     setDataToolT(res);
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log("rrr", err);
    //   });

    getToolType(machine_id);
  }, []);

  const changeStateAdd = () => {
    setmodal(true);
    // getAllToolTypeSelect(machine_id)
    //   .then((res) => {
    //     setDataToolType(res);
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    getToolType(machine_id);
  };

  const getToolType = (machine_id) => {
    getAllToolTypeSelect(machine_id)
      .then((res) => {
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
    getAddTool(addTool)
      .then((res) => {
        console.log("successfully add Tool");
      })
      .catch((err) => {
        console.log("erroor login", err);
      });
  };

  return (
    <div>
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
              <>{x.name}, </>
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
                    //   onChange={(event) => setUnits(event.target.value)}
                    class="form-control"
                    id="input3"
                    placeholder="Units"
                  />
                </div>
              </div>
            </Row>
            <button
              type="submit"
              class="btn navi toolselect text-black"
              onClick={added}
            >
              <b class="navbutton">submit</b>
            </button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}
