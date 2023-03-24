import React from 'react'
import { getLedgerDetails } from '../services/LedgerService'

export default function Ledger() {

  const data = getLedgerDetails();
  return (

    <div>
        <h3 class='heading pt-5 text-black'>Tool Ledger</h3>
        <div className='py-4 mx-5'>
            <table className="table  shadow bg-white rounded-7">
                <thead>
                    <tr>
                    <th scope="col"><h3>Operator Id</h3></th>
                    <th scope="col"><h3>Operator Name</h3></th>
                    <th scope="col"><h3>Machine Name</h3></th>
                    <th scope="col"><h3>Tool Type Name</h3></th>
                    <th scope="col"><h3>Tool Id</h3></th>
                    <th scope="col"><h3>Start DateTime</h3></th>
                    <th scope="col"><h3>End DateTime</h3></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((dat, index)=>(
                            <tr>
                                <th scope="row" key={index}><b>{dat.operator_id}</b></th>
                                <td><b>{dat.operator_name}</b></td>
                                <td><b>{dat.machine_name}</b></td>
                                <td><b>{dat.tool_type_name}</b></td>
                                <td><b>{dat.tool_id}</b></td>
                                <td><b>{dat.start_time}</b></td>
                                <td><b>{dat.end_time}</b></td>
                            

                            </tr>
                        ))
                    }
                
                </tbody>
            </table>
        </div>
  </div>
  )
}
