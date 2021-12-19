import Link from 'next/link'
import React from 'react'
import { Container } from './styles'

const NavLogo: React.FC = () => {
    return (
        <Container>
            <Link href={'/'}>
                <a className="anchor"></a>
            </Link>
        </Container>
    )
}

export default NavLogo