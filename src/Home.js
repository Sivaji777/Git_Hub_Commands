

import React, { useState } from 'react'
import { validation } from './Validation'

function Home() {

    const [formData, setFormData] = useState({
        name: ''
    })
    const [formErrors, setFormErrors] = useState('')
    const [mandatory, setMandatory] = useState(false)
    const [messages] = useState({
        'NAME_ERROR': "please enter name"
    })
    const handleChangeForm = (event) => {
        setFormData({
            ...formData, [event.target.name]: event.target.value
        })

        validateField(event.target.name, event.target.value)

    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

    }
    const validateField = (name, value) => {
        console.log(validation.validateName(value), '22222222222');
        switch (name) {
            case "name":
              return  validation.validateName(value) ? '' : setFormErrors(messages.NAME_ERROR);
                break;
            default:
                break;
        }
    }


    return (
        <div>
            <h1>Validation</h1>
            <form onSubmit={handleFormSubmit} >
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChangeForm}
                    required
                />
                <span className='text-danger' >{
                    formErrors
                }</span>
                <button type='Submit' >Submit</button>
            </form>
        </div>
    )
}

export default Home