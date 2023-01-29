import React from 'react'
import * as Yup from 'yup'
import {Formik, Form, Field, useField} from 'formik'

//Render props: are used to render elements to te screen
//destructure components

const InputComponent = ({label, ...props}) => {
    //field
    const [field, meta] = useField(props)
    return (
        <label> 
            {label}: {meta.touched && meta.error && <div>{meta.error}</div>}
            <input {...field} {...props}/>
        </label>
    )
}

const FormComponent = ({handleSuccess}) => {
    
    const schema = Yup.object({
         name: Yup.string().required('Required Field'),
         email: Yup.string().email('Must be a valid email address').required('Required Field'),
    })

    return (
        <Formik 
            initialValues={{
                name: '',
                email: ''
            }}
            onSubmit={handleSuccess}
            validationSchema = {schema}
            >
                {
                    () => (
                    <Form>
                        <InputComponent name="name" type="text" label="Name" autoComplete="off"/>
                        <InputComponent name="email" type="email" label="Email" autoComplete="off"/>
                    
                    </Form>
                )}
          
        </Formik>
    )
}

export default FormComponent