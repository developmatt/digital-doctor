import Link from 'next/link'
import React from 'react'
import { Container } from './styles'
import NavList from '../../molecules/NavList'
import NavLogo from '../../molecules/NavLogo';

const Navbar: React.FC = () => {
    return (
        <Container>
            <NavLogo />
            <NavList />
        </Container>
    )
}

export default Navbar