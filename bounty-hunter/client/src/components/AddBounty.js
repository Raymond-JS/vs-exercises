import React, { useState } from "react"


function AddBounty(props) {
    const initInputs = {
        firstName: props.firstName ||  "",
        lastName:  props.lastName || "",
        living: true,
        price: props.price || 0,
        title: props.title ||  ""
    }
    const [inputs, setInputs] = useState(initInputs)
    

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ( {...prevInputs, [name]: value }))
    }


    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        if (props.btnText === "Submit Edit") {
            props.onclick(prevToggle => !prevToggle)
        } 
        setInputs(initInputs)
    }
    return (
        <form onSubmit={handleSubmit}>

            <input type="text" name="firstName" value={inputs.firstName} onChange={handleChange} placeholder="First Name"/>

            <input type="text" name="lastName" value={inputs.lastName} onChange={handleChange} placeholder="Last Name"/>

            <br />
                <input type="radio"  name="living" value={true}  onChange={handleChange} />
                <label>Alive</label><br />
                <input type="radio" name="living" value={false} onChange={handleChange} />
                <label>Dead</label>
                
                <br/>

            <input type="number" name="price" value={inputs.price} onChange={handleChange}/> : Amount
            <br />

            <input type="text" name="title" value={inputs.title} onChange={handleChange} placeholder="Sith or Jedi" /> : Title
            <br />
        
        <button>{props.btnText}</button>
        </form>
    )
}



export default AddBounty