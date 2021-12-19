import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai'
import NavItem from '../../atoms/NavItem'
import { Container } from './styles'
import { AiOutlineRight } from 'react-icons/ai'

const NavList: React.FC = () => {
    const [breadcrumb, setBreadcrumb] = useState<string>()
    const router = useRouter()
    const availableBreadcrumbs: {
        [key: string]: string
        post: string
        author: string
    } = {
        post: 'Publicação',
        author: 'Autor'
    }
    
    useEffect(() => {
        const breadcrumb = Object.keys(availableBreadcrumbs).find((b: string) => router?.pathname.indexOf(b) >= 0)
        if(!breadcrumb) return
        setBreadcrumb(availableBreadcrumbs[breadcrumb])
    }, [router])

    return (
        <Container>
            <NavItem
                icon={<AiOutlineHome
                style={{marginTop: '2px'}} />}
                text='Home'
                href='/'
            />

            {
                breadcrumb && <>
                    <AiOutlineRight style={{marginRight: '15px'}} />
                    { breadcrumb }
                </>
            }
        </Container>
    )
}

export default NavList