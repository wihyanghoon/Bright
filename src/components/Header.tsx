import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Wrap>
            <Container>
                <Nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </Nav>
            </Container>
        </Wrap>
    )
}

const Wrap = styled.header`
    width: 100%;
    height: 20px;
    background-color: ${props => props.theme.bgColor};
    position: fixed;
`

const Container = styled.div`
    max-width : 1200px;
    height: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #bcbcbc;
`

const Nav = styled.nav`
    background-color: ${props => props.theme.bgColor};
`

export default Header