import React from 'react'
import { Container } from './styles'

interface WrapperProps {
    children: any
}

const Wrapper: React.FC<WrapperProps> = ({children}) => {
    return <Container>
        {children}
    </Container>
}

export default Wrapper