import React, {useState} from 'react'
import {Container} from './styles'
import FormComponent from '../Form'

const ModalInner = () => {
    const [showSuccess, setShowSuccess] = useState(false)
    const handleSuccess = () => {
        setShowSuccess(true)
    }

    return (
        <Container>
            {showSuccess ? (
                <>
                    <h4>Wuzz dat</h4>
                    <p>ergo cordyceps</p>
                </>
            ) : (
                <>
                    <h3>Sign up</h3>
                    <p>Moto Kita</p>
                    <FormComponent handleSuccess={handleSuccess}/>
                </>
            )}
        </Container>
    )
}

export default ModalInner