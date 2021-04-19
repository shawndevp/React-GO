import React, {useState} from "react";


const isAdmin=true;

function Form () {

        const initialValues = {
            productName: " ",
            price: " "
        }
        const [formValues, setFormValues] = useState()

       function onHandleSubmit() {

        }

        function onHandleChange() {

        }

    return (
        
        <>

        {isAdmin ? }
        
        <form onSubmit={onHandleSubmit}>
            <input value={formValues.productName} name="productName" onChange={onHandleChange} />
            <input type="number" name="price" value={formValues.price} onChange={onHandleChange}/>
            <buttton>Lägg till</buttton>

        </form>

        </>
    )

}

export default Form;