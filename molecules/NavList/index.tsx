import React from 'react'
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai'
import NavItem from '../../atoms/NavItem'
import { Container } from './styles'

const NavList: React.FC = () => {
    return (
        <Container>
            <NavItem
                icon={<AiOutlineHome
                style={{marginTop: '2px'}} />}
                text='Home'
                href='/'
            />

            <NavItem
                icon={<AiOutlineUser />}
                text='Doctors'
                href='/doctors'
            />
        </Container>
    )
}

export default NavList