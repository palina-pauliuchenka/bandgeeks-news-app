import { render, screen } from '@redwoodjs/testing/web'

import ForgotPasswordPage from './ForgotPasswordPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ForgotPasswordPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ForgotPasswordPage />)
      screen.getByLabelText('Username').toBeIntheDocument()
      screen.getByRole('h2', 'Forgot Password').toBeIntheDocument()
      screen.getByRole('Submit', 'Submit').toBeIntheDocument()
    }).not.toThrow()
  })
})
