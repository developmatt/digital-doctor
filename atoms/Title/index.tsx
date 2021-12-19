import React from 'react'
import { Container } from './styles'

interface TitleProps {
    children: any
}

const Title: React.FC = ({children}) => <Container>{children}</Container>

export default Title;