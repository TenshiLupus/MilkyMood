import React from 'react'
import {Modal, BG, Close} from './styles'

const ModalComponent = ({toggleModal, children}) => (
//Parent element JSX fragment
//Inbetween components will only be rendered when children props are called
<>
    <Modal>
        <Close onClick={toggleModal}/>
        {children}
    </Modal>
    <BG onClick={toggleModal}/>
</> 
)
export default ModalComponent