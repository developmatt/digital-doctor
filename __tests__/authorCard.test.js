import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AuthorCard from '../organisms/AuthorCard'

const authorMock = {
    id: '1',
    name: 'John Doe',
    email: 'john@doe.com',
    status: 'inactive'
}

it('should render author name in Author Card', () => {
    const { getByText } = render(<AuthorCard author={authorMock} />)
    expect(getByText('John Doe')).toBeInTheDocument()
})

it('should render author email in Author Card', () => {
    const { getByText } = render(<AuthorCard author={authorMock} />)
    expect(getByText('john@doe.com')).toBeInTheDocument()
})