import React, {useState} from "react";


const isAdmin=true;

function Form () {

        const initialValues = {
            productName: " ",
            price: " "
        }
        const [formValues, setFormValues] = useState(initialValues)

       function onHandleSubmit(e) {
        e.preventDefault();

        console.log(formValues)
        //ska skickas till databas / api endpoint

        }

        function onHandleChange(e) {
            setFormValues({...formValues, [e.target.name]: e.target.value})
        }

    return (
        
        <>

        {isAdmin ? }
        
        <form onSubmit={onHandleSubmit}>
            <input value={formValues.productName} name="productName" onChange={onHandleChange} />
            <input type="number" name="price" value={formValues.price} onChange={onHandleChange}/>
            <buttton>Lägg till</buttton>
            <div>Du har inte behörighet</div>

        </form>

        </>
    )

}

export default Form;