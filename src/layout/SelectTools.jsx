import Dropdown from 'react-bootstrap/Dropdown';
import "./css/selecttool.css"

function SelectTools() {
  return (
    <div className='container table down shadow  bg-light rounded-7 pt-5'>

        <form>
            <div class="form-group row">
                <Dropdown className="d-inline mx-2">
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                    Select Machine
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="#">Machine A</Dropdown.Item>
                    <Dropdown.Item href="#">Machine B</Dropdown.Item>
                    <Dropdown.Item href="#">Machine C</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="d-inline mx-2" autoClose="inside">
                    <Dropdown.Toggle id="dropdown-autoclose-inside">
                    Select Tool
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="#">tool 1</Dropdown.Item>
                    <Dropdown.Item href="#">tool 2</Dropdown.Item>
                    <Dropdown.Item href="#">tool 3</Dropdown.Item>
                    </Dropdown.Menu>

                
                </Dropdown>
                
                <div >
                    {/* <button type="submit" class="nav-link btn navi mx-5 my-4 text-black ">
                    <b class="navbutton">Request Tool</b></button> */}

                    <button type="submit" class="nav-link dd btn navi text-black" >
                    <b class="navbutton">Request Tool</b></button>
                </div>
            </div>
          </form>  
       </div>
  )
}

export default SelectTools;