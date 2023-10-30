import React from "react";
import Transaction from "./form";

function Display(){

    const trans = Transaction
    const dataDisplay = Transaction.map((trans)=>{
        return <td key={trans.id}>{trans}</td>
    })
    return(
        
       <div>
         <table>
            <tr>
                <td>{dataDisplay}</td>
            </tr>
        </table>
       </div>
    )
}

export default Display