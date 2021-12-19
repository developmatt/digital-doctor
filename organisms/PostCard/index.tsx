import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { Container, ImageContainer, Body, Footer } from './styles'
import faker from 'faker'
import getUser from '../../repositories/users/getUser';
import { userInfo } from 'os';
import Link from 'next/link';

interface PostCardProps {
    post: any
    style?: any
}

interface AuthorDataProps {
    id: string
    name: string
    email: string
    status: string
    gender: string
}

const PostCard: React.FC<PostCardProps> = ({post, style}) => {
    const [authorData, setAuthorData] = useState<AuthorDataProps>()

    useEffect(() => {
        async function getAuthorData() {
            const userData = await getUser(post.user_id)
            if(!userData) return

            setAuthorData(userData.data)
        }

        getAuthorData()
    }, [])

    return (
        <Container data-testid='post-card' style={style}>
            <Link href={'/post/' + post.id}>
                <a>
                    <ImageContainer>
                        <img src={faker.image.imageUrl()} />

                        <div className='postTitle'>
                            {post.title}
                        </div>
                    </ImageContainer>

                    <Body>
                        <div className="spanContent">
                            {post.body}
                        </div>
                    </Body>

                    {
                        authorData && <Footer>
                            <img src={faker.image.image()} alt="" className="authorPicture" />

                            <div className="authorData">
                                <span className="authorName">{authorData.name}</span>
                                <span className="authorEmail">{authorData.email}</span>
                            </div>
                        </Footer>
                    }
                </a>

            </Link>
        </Container>
    )
}
export default PostCard