import React from 'react'
import { Container, Content } from './styles'

interface CardProps {
    children: any
    style?: any
}

const Card: React.FC<CardProps> = ({children, style}) => {
    return (
    <Container style={style}>
        <Content>
            {children}
        </Content>
    </Container>
    )
}

export default Card