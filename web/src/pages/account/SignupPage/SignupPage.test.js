import { render, screen } from '@redwoodjs/testing/web'

import SignupPage from './SignupPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SignupPage', () => {
  it('renders the headings successfully', () => {
    expect(() => {
      render(<SignupPage />)
      //Ensures the title renders properly somewhere in the doc
      expect(screen.getByText('Register an Account')).toBeInTheDocument()
      //Ensures the form (going under the title of 'data') is being rendered
      expect(screen.getByTitle('data')).toBeInTheDocument()
    }).not.toThrow()
  })
  it('renders the textboxes successfully', () => {
    expect(() => {
      render(<SignupPage />)
      expect(screen.getByLabelText('Username')).toBeInTheDocument()
      expect(screen.getByLabelText('Password')).toBeInTheDocument()
      expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument()
    }).not.toThrow()
  })
  it('renders the buttons successfully', () => {
    expect(() => {
      render(<SignupPage />)
      expect(
        screen.getByRole('button', { name: 'Sign Up' })
      ).toBeInTheDocument()
      expect(screen.getByRole('link', { value: 'Log In!' })).toBeInTheDocument()
    }).not.toThrow()
  })
})
