import styled from 'styled-components'
import {ReactComponent as LogoSVG} from './test-logo.svg'
import {Marginals} from '../styles'

//no Extra request on pageload if rendered together with the html page

export const Logo = styled(LogoSVG)`
    height: auto;
    max-width: 760px;
    width: 100%;
`

export const Header = styled.header`
    
    justify-content: center;
    padding: 30px;
`