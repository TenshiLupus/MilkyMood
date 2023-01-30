import React, {useState} from 'react'
import {Container, H3, P, Socials, H4, SuccessContainer} from './styles'
import FormComponent from '../Form'
import {ReactComponent as E} from './I1.svg'
import {ReactComponent as V} from './I2.svg'

const Input = ({handleSuccess}) => (
    <Container>
        <H3>Sign up</H3>
        <P>Moto Kita</P>
        <FormComponent handleSuccess={handleSuccess}/>
    </Container>
)

const Success = () => (
    <SuccessContainer>
        <H4>Wuzz dat</H4>
        <P>ergo cordyceps</P>
        <Socials>
            <E/>
            <V/>
        </Socials>
    </SuccessContainer>
)

const ModalInner = () => {
    const [showSuccess, setShowSuccess] = useState(false)
    
    const handleSuccess = () => {
        setShowSuccess(true)
    }

    return (showSuccess ? <Success/> : <Input handleSuccess={handleSuccess} />)
}

export default ModalInner