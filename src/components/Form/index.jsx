import React from 'react'
import * as Yup from 'yup'
import {Formik, Form, useField} from 'formik'
import {Input, Label, Error, Submit} from './styles'

//Render props: are used to render elements to te screen
//destructure components

const InputComponent = ({label, ...props}) => {
    //field
    const [field, meta] = useField(props)
    return (
        <Label> 
            {label}: {meta.touched && meta.error && <Error>{meta.error}</Error>}
            <Input {...field} {...props}/>
        </Label>
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
                        
                        <Submit type="submit">Submit</Submit>
                    </Form>
                )}
          
        </Formik>
    )
}

export default FormComponent