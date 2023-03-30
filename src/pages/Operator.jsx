import React, { useState } from 'react'
import NavbarOperator from '../layout/navbarOperator'
import ToolRequestOperator from '../layout/ToolRequestOperator'
import "./css/style.css"

export default function Operator() {

  const [operator, setOperator] = useState(<ToolRequestOperator />)
  return (
    <div>
      <div> 
        <NavbarOperator setOperator={setOperator} />
      </div>
      

      <div class='pt-2'>

           {operator}
      </div>

    </div>
    
  )
}
