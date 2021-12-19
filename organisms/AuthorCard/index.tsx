import React from 'react'
import { useRouter } from 'next/router'
import { Container, Header, Body } from './styles'
import faker from 'faker'
import { DefaultButton, SecondaryButton } from '../../atoms/Button'
import { AiOutlineMail, AiOutlineFolderOpen } from 'react-icons/ai'


interface AuthorCardProps {
    author: any
} 

const AuthorCard: React.FC<AuthorCardProps> = ({author}) => {
    const router = useRouter()

    const sendEmail = (e: MouseEvent) => {
        e.preventDefault()
        window.location.href = 'mailto:' + author.email
    }

    const goToPosts = () => router.push('/author/' + author.id)

    return (
        <Container data-testid='author-card'>
            <Header>
                <img src={faker.image.image()} alt="" className="picture" />
            </Header>

            <Body>
                <span className="name">{author.name}</span>
                <span className="email">{author.email}</span>

                <DefaultButton
                    onClick={(e) => sendEmail(e)}
                    disabled={author.status === 'inactive'}
                    style={{marginBottom: '10px'}}
                >
                    <AiOutlineMail style={{marginRight: '5px'}}/>
                    Contactar
                </DefaultButton>

                <SecondaryButton
                    onClick={goToPosts}
                >
                    <AiOutlineFolderOpen style={{marginRight: '5px'}}/>
                    Ver posts
                </SecondaryButton>
            </Body>
        </Container>
    )
}

export default AuthorCard