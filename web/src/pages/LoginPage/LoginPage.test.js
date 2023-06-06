import { render, screen } from '@redwoodjs/testing/web'

import LoginPage from './LoginPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LoginPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginPage />)
      screen.getByLabelText('Username').toBeIntheDocument()
      screen.getByLabelText('Password').toBeIntheDocument()
      screen.getByRole('Link', 'Forgot Password?').toBeIntheDocument()
      screen.getByRole('Link', 'Sign up!').toBeIntheDocument()
      screen.getByRole('Submit', 'Login').toBeIntheDocument()
    }).not.toThrow()
  })
})
