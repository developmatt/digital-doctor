import Link from 'next/link'
import React from 'react'
import { Container } from './styles'

interface NavItemProps {
    href: string
    icon: any
    text: string
}

const NavItem: React.FC<NavItemProps> = ({icon, text, href}: NavItemProps) => {
    return (
        <Container>
            <Link href={href}>
                <a className="link">
                    {icon}
                    {text}
                </a>
            </Link>
        </Container>
    )
}

export default NavItem