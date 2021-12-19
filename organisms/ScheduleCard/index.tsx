import React from 'react'
import { Container, Header, Title, Footer } from './styles'
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai'
import ScheduleStatus from '../../atoms/ScheduleStatus'

interface ScheduleCardPros {
    todo: any
}

const ScheduleCard: React.FC<ScheduleCardPros> = ({todo}) => {
    const date = new Date(todo.due_on)

    return (
        <Container>
            <Header>
                <span className="fullDate">
                    <span className="date"><AiOutlineCalendar />{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</span>
                    <span className="time"><AiOutlineClockCircle />{date.getUTCHours() + ':' + date.getMinutes()}</span>
                </span>
            </Header>
            
            <Title>{todo.title}</Title>

            <Footer>
                <ScheduleStatus status={todo.status} />
            </Footer>
        </Container>
    )
} 

export default ScheduleCard