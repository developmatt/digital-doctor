import React from 'react'
import { Container } from './styles'

interface DescriptionProps {
    children: any
}

const Description: React.FC<DescriptionProps> = ({children}) => {
    return (
        <Container className='description'>
            {children}
        </Container>
    )
}

export default Description