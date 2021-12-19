import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

it('should render Home title', () => {
    const { getByText } = render(<Home />)
    expect(getByText('Bem vindo ao Digital Doctor!')).toBeInTheDocument()
})

it('should render Main Events section', () => {
    const { getByText } = render(<Home />)
    expect(getByText('Principais eventos')).toBeInTheDocument()
})

it('should render Latest Posts section', () => {
    const { getByText } = render(<Home />)
    expect(getByText('Últimos posts')).toBeInTheDocument()
})

it('should render Main Authors section', () => {
    const { getByText } = render(<Home />)
    expect(getByText('Principais autores')).toBeInTheDocument()
})

it('show render Events', async () => {
    await setTimeout(() => {
        const { getByTestId } = render(<Home />)
        expect(getByTestId('schedule-card')).toBeInTheDocument()
    }, 10000)
})

it('show render Post Cards', async () => {
    await setTimeout(() => {
        const { getByTestId } = render(<Home />)
        expect(getByTestId('post-card')).toBeInTheDocument()
    }, 10000)
})

it('show render Author Cards', async () => {
    await setTimeout(() => {
        const { getByTestId } = render(<Home />)
        expect(getByTestId('author-card')).toBeInTheDocument()
    }, 10000)
})