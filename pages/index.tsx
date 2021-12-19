import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import TemplateDefault from '../templates/default'
import getUsers from './../repositories/users/getUsers';
import getTodos from './../repositories/todos/getTodos';
import Card from '../molecules/Card';
import Title from '../atoms/Title';
import Description from './../atoms/Description/index';
import ScheduleCard from '../organisms/ScheduleCard';
import getPosts from './../repositories/posts/getPosts';
import PostCard from '../organisms/PostCard';
import AuthorCard from '../organisms/AuthorCard';

interface HomeProps {
  posts: any
  users: any
  todos: any
}

const Home: NextPage<HomeProps> = ({posts, users, todos}) => {
  return (
    <TemplateDefault>
      <Title>Bem vindo ao Digital Doctor!</Title>
      <Description>O fórum de medicina mais confiável do mundo</Description>
      <div className={styles.row}>
        <aside className={styles.todoCol}>
          <Card>
            <Description>Principais eventos</Description>
            {todos?.data?.map((todoData: any) => <ScheduleCard key={todoData.id} todo={todoData} />)}
          </Card>
        </aside>

        <div className={styles.mainCol}>
          <section>
            <Card style={{'marginBottom': '2rem'}}>
              <Description>Últimos posts</Description>
              <div className={styles.postsList}>
                {posts?.data?.map((postData: any) => <PostCard key={postData.id} post={postData} />)}
              </div>
            </Card>
          </section>

          <section>
            <Description>Principais autores</Description>
            <div className={styles.authorsList}>
              {users?.data?.map((authorData: any) => <AuthorCard key={authorData.id} author={authorData} />)}

            </div>
          </section>
        </div>
      </div>
    </TemplateDefault>
  )
}

export async function getStaticProps() {
  const todos = await getTodos()
  const posts = await getPosts()
  const users = await getUsers()
  return { props: {todos, posts, users} }
}

export default Home
