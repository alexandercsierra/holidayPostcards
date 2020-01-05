import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const NavBar = styled.nav`
    background: rgba(0,0,0,.5);
    display: flex;
    position: relative;
    z-index: 10;
`;

const TheLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    font-size: 2rem;
    margin: .5% 3%;
`;


const Nav = () =>{
    return(
        <NavBar>
            <TheLink to="/">Home</TheLink>
            
        </NavBar>
    )
}

export default Nav