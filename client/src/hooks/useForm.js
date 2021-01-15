import React, { useState } from 'react'

// write your custom hook here to control your checkout form

// set state 


//create hook
const useForm = (initialValues) => {
    //set value state
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values,setValues] = useState(initialValues);

    //bring in the handlers that effect state from main page 
    const handleChanges = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    return([values, handleChanges, handleSubmit, showSuccessMessage, setShowSuccessMessage]);
};

export default useForm;