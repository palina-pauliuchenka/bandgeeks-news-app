import { render, screen } from '@redwoodjs/testing/web'

import ResetPasswordPage from './ResetPasswordPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ResetPasswordPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ResetPasswordPage />)
      screen.getByLabelText('New Password').toBeIntheDocument()
      screen.getByRole('h2', 'Reset Password').toBeIntheDocument()
      screen.getByRole('Submit', 'Submit').toBeIntheDocument()
    }).not.toThrow()
  })
})
