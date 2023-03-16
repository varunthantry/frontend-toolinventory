import React, { useState } from 'react'

export default function ToolItem() {

    const [count, setCount] = useState(0);


  return (

    <div class="pt-5 mt-5">

        <h1>Tools</h1>
        <ol class="list-group list-group-numbered container">
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Screw</div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    </div>
                <span >
                    <button class="badge bg-primary rounded mx-2" onClick={()=> setCount(count-1)}>-</button>
                    {count}
                    <button class="badge bg-primary rounded-pill mx-2" onClick={()=> setCount(count+1)}>+</button>
                </span>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Hammer</div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    </div>
                    <span >
                        <button class="badge bg-primary rounded mx-2" onClick={()=> setCount(count-1)}>-</button>
                        {count}
                        <button class="badge bg-primary rounded-pill mx-2" onClick={()=> setCount(count+1)}>+</button>
                    </span>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                <div class="fw-bold">Pinches</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  
                </div>
                <span >
                    <button class="badge bg-primary rounded mx-2" onClick={()=> setCount(count-1)}>-</button>
                    {count}
                    <button class="badge bg-primary rounded-pill mx-2" onClick={()=> setCount(count+1)}>+</button>
                </span>
            </li>
        </ol>

    </div>
  )
}
