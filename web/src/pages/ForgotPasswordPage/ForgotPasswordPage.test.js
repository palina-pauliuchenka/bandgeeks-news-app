import { render, screen } from '@redwoodjs/testing/web'

import ForgotPasswordPage from './ForgotPasswordPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ForgotPasswordPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ForgotPasswordPage />)
      expect(screen.getByLabelText('Username')).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
      expect(screen.getByText('Submit')).toBeInTheDocument()
    }).not.toThrow()
  })
})
