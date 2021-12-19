import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import TemplateDefault from '../templates/default'
import getUsers from './../repositories/users/getUsers';
import getTodos from './../repositories/todos/getTodos';
import Card from '../molecules/Card';
import Title from '../atoms/Title';
import Description from './../atoms/Description/index';

interface HomeProps {
  users: any
  todos: any
}

const Home: NextPage<HomeProps> = ({users, todos}) => {
  return (
    <TemplateDefault>
      <Title>Bem vindo ao Digital Doctor!</Title>
      <Description>O fórum de medicina mais confiável do mundo</Description>
      <div className={styles.row}>
        <div className={styles.todoCol}>
          <Card>
            <Description>Principais eventos</Description>
            {todos?.data.map((todoData: any) => <p key={todoData.id}>{todoData.title}</p>)}
          </Card>
        </div>

        <div className={styles.mainCol}>
          <Card>
            <Description>Nossos autores</Description>
            {users?.data.map((userData: any) => <p key={userData.id}>{userData.name}</p>)}
          </Card>
        </div>
      </div>
    </TemplateDefault>
  )
}

Home.getInitialProps = async (ctx) => {
  const users = await getUsers()
  const todos = await getTodos()
  return { users, todos }
}

export default Home
