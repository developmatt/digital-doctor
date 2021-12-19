import React from 'react'
import { Container } from './styles'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'

interface ScheduleStatusProps {
    status: 'pending' | 'completed'
}

const ScheduleStatus: React.FC<ScheduleStatusProps> = ({status}) => {
    return (
        <Container className={status}>
            {
                status === 'completed'
                ? <>
                    <AiOutlineCheckCircle />
                    <span className="scheduleStatusName">Completa</span>
                </>
                
                : <>
                    <AiOutlineCloseCircle />
                    <span className="scheduleStatusName">Pendente</span>
                </>
            }
        </Container>
    )
}

export default ScheduleStatus