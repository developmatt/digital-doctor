import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import TemplateDefault from '../../templates/default'
import getUser from './../../repositories/users/getUser'
import styles from '../../styles/Author.module.css'
import AuthorCard from '../../organisms/AuthorCard'
import Card from '../../molecules/Card'
import getPostsFromAuthor from './../../repositories/posts/getPostsFromAuthor';
import PostCard from '../../organisms/PostCard'
import Description from '../../atoms/Description'

const Author: NextPage = () => {
    const [author, setAuthor] = useState<any>()
    const [posts, setPosts] = useState<any>()
    const router = useRouter()
    const id = router.query.id as string

    useEffect(() => {
        async function getAuthorData() {
            const authorData = await getUser(parseInt(id))
            if(!authorData) {
                router.back()
                return
            }

            setAuthor(authorData.data)
            getAuthorPostsData(parseInt(id))
        }

        async function getAuthorPostsData(userId: number) {
            const authorPosts = await getPostsFromAuthor(parseInt(id))
            if(!authorPosts) return
        
            console.log(authorPosts.data)

            setPosts(authorPosts.data)
        }

        getAuthorData()
    }, [id])

    return (
        <TemplateDefault>
            <div className={styles.row}>
                <section className={styles.aside}>
                    <Card>
                    {
                        author && <AuthorCard author={author} />
                    }
                    </Card>
                </section>

                <main className={styles.main}>
                    <Card>
                        {
                            posts && posts.length
                            ? <>
                                { author && <Description>Posts de {author.name}</Description> }
                                <div className={styles.postsList}>
                                    {posts && posts.map((postData: any) => <PostCard key={postData.id} post={postData} />)}
                                </div>
                            </>

                            : <Description>Este autor ainda não tem publicações</Description>
                        }
                    </Card>
                </main>
            </div>
        </TemplateDefault>
    )
}

export default Author