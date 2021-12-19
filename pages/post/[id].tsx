import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import TemplateDefault from '../../templates/default'
import getPost from './../../repositories/posts/getPost'
import styles from '../../styles/Post.module.css'
import Title from '../../atoms/Title'
import Card from '../../molecules/Card'
import getUser from './../../repositories/users/getUser';
import AuthorCard from '../../molecules/AuthorCard'
import getPostsFromAuthor from './../../repositories/posts/getPostsFromAuthor';
import PostCard from '../../molecules/PostCard'
import Description from '../../atoms/Description'
import getPostComments from '../../repositories/posts/getPostComments'

interface PostProps {

}

const Post: NextPage<PostProps> = () => {
    const [post, setPost] = useState<any>()
    const [author, setAuthor] = useState<any>()
    const [comments, setComments] = useState<any>()
    const [authorPosts, setAuthorPosts] = useState<any>()

    const router = useRouter()
    const id = router.query.id as string

    useEffect(() => {
        async function getPostData() {
            const postData = await getPost(parseInt(id))
            if(!postData) {
                router.back()
                return
            }

            setPost(postData.data)
            getAuthorData(parseInt(postData.data.user_id))
            getPostCommentsData(parseInt(id))
            getAuthorPosts(parseInt(postData.data.user_id))
        }

        async function getAuthorData(authorId: number) {
            const authorData = await getUser(authorId)
            if(!authorData) return

            setAuthor(authorData.data)
        }

        async function getPostCommentsData(id: number) {
            const postCommentsData = await getPostComments(id)
            if(!postCommentsData) return

            setComments(postCommentsData.data)
        }

        async function getAuthorPosts(authorId: number) {
            const posts = await getPostsFromAuthor(authorId)
            if(!posts) return

            setAuthorPosts(posts.data)
        }

        getPostData()

    }, [id])

    return (
        <TemplateDefault>
            {
                post
                ? <div className={styles.row}>
                        {
                            authorPosts && authorPosts.length > 1 && <aside className={styles.postAside}>
                                <Card>
                                    <Description>Mais deste autor</Description>
                                    {authorPosts?.map((post: any) => {
                                        if(post.id == id) return
                                        return <PostCard style={{marginBottom: '20px'}} key={post.id} post={post} />
                                    })}
                                </Card>
                            </aside>
                        }
                        
                    <section>
                        <Card>
                            <Title style={{marginBottom: '20px'}}>{post.title}</Title>

                            <div>{post.body}</div>
                        </Card>

                        {
                            author && <div className={styles.authorCard}>
                                <AuthorCard author={author} />
                            </div>
                        }

                        {
                            comments && Boolean(comments.length) && <>
                                <Description>Comentários</Description>

                                <Card>
                                {
                                    comments.map((comment: any) => <div key={comment.id} className={styles.comment}>
                                        <Description>{comment.name}</Description>

                                        <div>{comment.body}</div>
                                    </div>)
                                }
                            </Card>
                            </>
                        }
                    </section>
                </div>
                : <section className={styles.loadingDiv}>
                    <img className={styles.loadingImage} src="/images/loading.gif" alt="Carregando" />
                </section>
            }

            
        </TemplateDefault>
    )
}

export default Post