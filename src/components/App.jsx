import React, {Component} from 'react'
import {GlobalStyle} from './styles'
import Header from './Header'

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



const App = () => {

    return (
        <>
            <GlobalStyle/>
            <Header/>
        </>
    );
};

export default App
