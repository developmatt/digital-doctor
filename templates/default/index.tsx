import React from 'react'
import Wrapper from '../../atoms/Wrapper';
import Navbar from '../../organisms/Navbar';
import { Container, Content } from './styles';

const TemplateDefault: React.FC = (props) => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Content>
                    {props.children}
                </Content>
            </Wrapper>
        </Container>
    )
}

export default TemplateDefault