import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './Nav';

const Header = () => {
    return (
        <MainHeder>
            <NavLink to="/">
                <img src="./images/logo.png" alt="logo_image" className='logo' />
            </NavLink>
            <Nav/>
        </MainHeder>
    )
}

const MainHeder = styled.header` 
 padding:10px;
 height: 6.3rem;
 background-color:${({ theme }) => theme.colors.bg};
 display:flex;
 justify-content: space-between;
 align-items: center;
 position: relative;
.logo{
 height: 5rem;
 margin-left:20px;
}
@media (max-width:${({ theme }) => theme.media.mobile}) { 
} 
`;

export default Header