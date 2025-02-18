import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Products from './page'
 
describe('Products', () => {
  it('renders a heading', () => {
    render(<Products params={{
        id: ''
    }} />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})