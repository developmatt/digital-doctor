import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ScheduleCard from '../organisms/ScheduleCard'

const scheduleMock = {
    title: 'Schedule Card',
    status: 'pending',
    due_on: '2022-01-13T00:00:00.000+05:30'
}

it('should render schedule title in Schedule Card', () => {
    const { getByText } = render(<ScheduleCard todo={scheduleMock} />)
    expect(getByText('Schedule Card')).toBeInTheDocument()
})