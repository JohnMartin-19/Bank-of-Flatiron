import React, { useState } from "react";

function Transaction(){
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')
    const [date] = useState(Date.now())

    function handleSubmit(e){
        e.preventDefault()
        const formData = {
            description, category, amount ,date
        }
        console.log(formData)

    }
    return(
        <form onSubmit={handleSubmit}>
            <h4>Make a Transaction</h4>
            <br />
            <label htmlFor="description">Description</label>:
            <input type="text" id="desc" value={description} onChange={(e)=>
            setDescription(e.target.value)}/>

            <br />
            <br />
            <label htmlFor="category">Category</label>:
            <input type="text" id="cat" value={category} onChange={(e)=>
            setCategory(e.target.value)}/>

            <br />
            <br />
            <label htmlFor="amount">Amount</label>:
            <input type="number" id="num" value={amount} onChange={(e)=>
            setAmount(e.target.value)}/>
            <br />
            <input type="submit" value="Make Transaction"/>

        </form>
    )
}

export default Transaction