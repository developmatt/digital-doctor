import React from 'react'
import { Container, Content } from './styles'

interface CardProps {
    children: any
}

const Card: React.FC = ({children}) => {
    return (
    <Container>
        <Content>
            {children}
        </Content>
    </Container>
    )
}

export default Card