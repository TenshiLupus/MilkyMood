import React, {Component, useState} from 'react'
import {GlobalStyle, ImageContainer, Wrapper, Button} from './styles'
import Header from './Header'
import Footer from './Footer'
import ImgBox from './ImgBox'
import Modal from './Modal'
import ModalInner from './ModalInner'

//Top level tags are necessary if we want to return multiple adjacent tags at once, else we have to use fragments.
//Upper case for React components
//jsx expression : Syntax expression of javascripst that produces react elements
//hooks allows functional components to access lifecycle methods (happen between initialization/creation )

//state hook used to create a local state in functional component
//Effect hook, used to perform side effects on functional component after it has rendered into the DOM
//Semantic elelemtns have a specific purpose or role
//Implicit returns are done with () and not with {} as if you were declaring a normal function

//State hook: ? 
//props != component

//Alrenatively we can pass the prop directly to the component

//Pros of stylized components. They are reusable, easay to make changes in
//header components will have their own index.jsx files
//Whenever one is using webpack with react, loaders will be required to pack the utilized resources with webpack
//transients props: Objects of any type passed down as arguments down to the react component

const matrix = [    
    [0,0], [1,0], [2,0], [3,0], 
    [0,1], [1,1], [2,1], [3,1], 
    [0,2], [1,2], [2,2], [3,2], 
    [0,3], [1,3], [2,3], [3,3],
    [0,4], [1,4], [2,4], [3,4], 
    [0,5], [1,5], [2,5], [3,5]


]

const App = () => {
    const [distance, setDistance] = useState(1)
    const [showModal, setShowModal] = useState(false)
    const easing = (num) => Math.pow(num,3);

    const calculateDistance = ([x,y]) => {
        const center = [window.innerWidth / 2, window.innerHeight / 2]
        const maxHypot = Math.hypot(center[0],center[1])
        const hypot = Math.hypot(center[0] - x, center[1] - y)
        const distance = hypot / maxHypot
        const easeDistance = easing(distance)
        setDistance(easeDistance)
    }

    const handleMove = ({clientX, clientY}) => {
        calculateDistance([clientX, clientY])
    }

    const handleTouchMove = ({touches}) => {
        calculateDistance([touches[0].clientX, touches[0].clientY])
    }

    const toggleModal = () => {
        setShowModal((showModal) => !showModal)
    }

    console.log(distance)

    return (
        <>
            <GlobalStyle/>
            {showModal && (
                <Modal toggleModal={toggleModal}>
                    <ModalInner/>
                </Modal>
            )}
            <Header/>
            <Footer/>
            <Wrapper 
            onMouseMove={handleMove}
            onTouchMove={handleTouchMove}
            $color={Math.round(240 - distance * 40)}
            >
                <ImageContainer $isTogether={distance < 0.002}>
                    <Button onClick={toggleModal}>Sign up for updates</Button>
                    {matrix.map(([x,y], index) => (
                    <ImgBox key={index} x={x} y={y} percent={distance}/> 
                    ))}
                </ImageContainer>
            </Wrapper>
        </>
    );
};

export default App
