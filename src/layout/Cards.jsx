import React, { useState } from 'react';
import "./css/cards.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, Col , Row } from 'reactstrap';
import { ModalHeader } from 'reactstrap';

export default function Cards(props) {

    const machine_name = props.machine_name;
    const description = props.description;
    const tool_used = props.tool_used;
    const image = props.image
    const available = props.available

    const [modal, setmodal] =useState(false)

  return (
  <div>
    <div class="card" >
        <img class="card-img-top" src={image} alt="Card image cap" width={150} height={170}  />
        <div class="card-body">
            <h5 class="card-title">{machine_name}</h5>
            <p class="card-text">{description}</p>
            <p class="card-text">Tool used :- {tool_used.map((x,index)=>(
                <>{x}, </>  
            ))}</p>
            <button type="submit" class="btn navi  text-black" disabled={available}><b class="navbutton"
            onClick={()=> setmodal(true)} >Request Tool</b></button>
        </div>
    </div>

    <Modal
    size="lg"
    isOpen={modal}
    toggle={() => setmodal(!modal)}
    >
        <ModalHeader
         toggle={() => setmodal(!modal)}>
            Select Quantity
        </ModalHeader>
        <ModalBody>
            <form>
                <Row>
                
                    {tool_used.map((x, index)=>(
                        <Col lg={12}>
                        {/* <div>
                            <label htmlFor='name'>{x}</label>

                            <input
                                type='number'
                                className='form-control'
                                placeholder=''
                                
                            />
                            
                        </div> */}

                        <div class="form-group row">
                            <label for="inputName3" class="col-sm-2 col-form-label"><h6 class="text-black"><b>{x}</b></h6></label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" placeholder="" />
                            </div>
                        </div>
                    </Col>
                    ))
                    }
               
                </Row>
                <button type="submit" class="btn navi toolselect text-black"><b class="navbutton"
            >submit</b></button>

            </form>
            
        </ModalBody>
    </Modal>

    </div>
   
    )
  
}