import React, { useState,useEffect } from "react";

function Transaction(){
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')
    const [date,setDate] = useState(new Date())
    const [submittedData, setsubmittedData] = useState([])
    const formData = {
        description, 
        category, 
        amount,
        date,
    }
    const dataArray = [...submittedData, formData]
/*
    function dataChange(event){
        setAmount(event.target.value),
        setCategory(event.target.value),
        setDescription(event.target.value),
        setDate(event.target.value)

    }*/
   

    function HandleSubmit(e){
        e.preventDefault()
         //clearing inputs fields
        setAmount('')
        setCategory('')
        setDate('')
        setDescription("")
        setsubmittedData(dataArray)
       
        console.log(formData)
        
            fetch('http://localhost:3000/transactions',{
                method:"POST",
                headers:{
                    "Content-Type": "application.json",
                },
                body:JSON.stringify(dataArray),
            })
                .then((response) => response.json())
                .then((newTrans=>  {
                    return newTrans()
    
                }))
        
            

    }

    const listSubs = submittedData.map((data, index) =>{
        return (
            <div>
                <table>
                    <tr>
                        <th style={{padding:"10px"}}>Category</th>
                        <th style={{padding:"10px"}}>Description</th>
                        <th style={{padding:"10px"}}>Amount(in Ksh)</th>
                    </tr>
                    <tr key={index}>
                        <td style={{padding:"10px"}}>
                              {data.category} 
                        </td>
                        <td style={{padding:"10px"}}>
                            {data.description}
                        </td>
                        <td style={{padding:"10px"}}>
                            {data.amount}
                        </td>
                        <td>{data.setDate}</td>
                    </tr>
                   
                </table>
            </div>
        )
    })
    return(
        <div>
                    <form onSubmit={HandleSubmit}>
            <h4>Make a Transaction</h4>
            <br />
            <label htmlFor="description">Description</label>:
            <input style={{padding:"10px"}} type="text" id="desc" value={description} onChange={(e)=>
            setDescription(e.target.value)}/>

            <br />
            <br />
            <label htmlFor="category">Category</label>:
            <input style={{padding:"10px"}} type="text" id="cat" value={category} onChange={(e)=>
            setCategory(e.target.value)}/>

            <br />
            <br />
            <label htmlFor="amount">Amount</label>:
            <input style={{padding:"10px"}} type="number" id="num" value={amount} onChange={(e)=>
            setAmount(e.target.value)}/>
            <br />
            <input 
           style={
            {backgroundColor:"green"}}  type="submit" value="Make Transaction"/>

        </form>
        
        <h3>Transactions Made</h3>
        {listSubs}
        
        </div>
    )
}

export default Transaction