import React, {useState} from "react";

function Form () {

        // En onSubmit function == handleSubmit

        // En onChange function == handleOnChnage
        // const [name, setName] = useState("Mata in ditt namn")
        // const [email, setEmail] = useState("Mata in din email")
        const initialValues = {
            name: "",
            email: ""
        }

        const [formValues, setFormValues] = useState(initialValues);

    function handleSubmit(e) {
        e.preventDefault();
        console.log("name_IN:", formValues.name, "email_IN:", formValues.email )
    }

    function handleOnChnage(e) {
        // setName(e.target.value)
        // console.log(e.target.value)
        // setEmail(e.target.value)

        // console.log({[e.target.name]: e.target.value})
    

    setFormValues ( {
        ...formValues,
        [e.target.name]:e.target.value
    })
}


    return (

        <form onSubmit={handleSubmit}>

            <input placeholder= "Enter your name" name="name" value={formValues.name} onChange={handleOnChnage} />    
            <input placeholder = "Enter your email" name="email" value={formValues.email} onChange={handleOnChnage} />
            <button>Send</button>

        </form>


    )

}

export default Form;
