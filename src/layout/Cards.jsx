import React, { useState, useEffect } from "react";
import "./css/cards.css";
import { Modal, ModalBody, Col, Row } from "reactstrap";
import { ModalHeader } from "reactstrap";
import { getToolTypeused } from "../services/AllSelectTools";

export default function Cards(props) {
  const machine_id = props.machine_id;
  const machine_name = props.machine_name;
  const description = props.description;
  // const tool_used = props.tool_used;
  // const image = props.image
  const available = props.available;

  const [modal, setmodal] = useState(false);

  const [toolused, setToolUsed] = useState([]);

  useEffect(() => {
    ToolTypeused(machine_id);
  }, []);

  const changeStateRequestTool = () => {
    setmodal(true);

    ToolTypeused(machine_id);
  };

  const ToolTypeused = (machine_id) => {
    getToolTypeused(machine_id)
      .then((res) => {
        setToolUsed(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
            Tool used :-
            {toolused.map((x, index) => (
              <>{x.name}, </>
            ))}
          </p>
          <button
            type="submit"
            class="btn navi  text-black"
            disabled={available}
          >
            <b class="navbutton" onClick={changeStateRequestTool}>
              Request Tool
            </b>
          </button>
        </div>
      </div>

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
                        <b>{x.name}</b>
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
              </Row>
            ))}

            <button type="submit" class="btn navi toolselect text-black">
              <b class="navbutton">submit</b>
            </button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}
