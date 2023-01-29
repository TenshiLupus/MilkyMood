import styled from 'styled-components'
import {ReactComponent as LogoSVG} from './test-logo.svg'
import {Marginals} from '../styles'

//no Extra request on pageload if rendered together with the html page

export const Logo = styled(LogoSVG)`
    height: auto;
    max-width: 240;
    margin: 0 auto;
`

export const Header = styled.header`
    ${Marginals}
    justify-content: center;
    padding: 30px;

    @media (max-width: 700px){
        padding: 15px;
    }
`