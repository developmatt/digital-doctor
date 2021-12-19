import React from 'react'
import { Container } from './styles'

interface TitleProps {
    children: any
    style?: any
}

const Title: React.FC<TitleProps> = ({children, style}) => <Container style={style}>{children}</Container>

export default Title;