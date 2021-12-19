import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import TemplateDefault from '../templates/default'
import getUsers from './../repositories/users/getUsers';
import getTodos from './../repositories/todos/getTodos';
import Card from '../molecules/Card';
import Title from '../atoms/Title';
import Description from './../atoms/Description/index';
import ScheduleCard from '../molecules/ScheduleCard';
import getPosts from './../repositories/posts/getPosts';
import PostCard from '../molecules/PostCard';

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
        <div className={styles.todoCol}>
          <Card>
            <Description>Principais eventos</Description>
            {todos?.data?.map((todoData: any) => <ScheduleCard key={todoData.id} todo={todoData} />)}
          </Card>
        </div>

        <div className={styles.mainCol}>
          <Card>
            <Description>Últimos posts</Description>
            <div className={styles.postList}>
              {posts?.data?.map((postData: any) => <PostCard key={postData.id} post={postData} />)}
            </div>
            {/* {users?.data.map((userData: any) => <p key={userData.id}>{userData.name}</p>)} */}
          </Card>
        </div>
      </div>
    </TemplateDefault>
  )
}

Home.getInitialProps = async (ctx) => {
  const todos = await getTodos()
  const posts = await getPosts()
  const users = await getUsers()
  return { todos, posts, users }
}

export default Home
