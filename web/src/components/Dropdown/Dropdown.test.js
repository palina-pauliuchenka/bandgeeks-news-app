import { screen, render } from '@redwoodjs/testing/web'
import NewsLayout from 'src/layouts/NewsLayout/NewsLayout'

import Dropdown from './Dropdown'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Dropdown', () => {
  it('renders successfully when logged out', () => {
    expect(() => {
      render(<Dropdown />)
      render(<NewsLayout />)
      expect(screen.getByRole('link', { name: 'Login' })).toBeInTheDocument()
    }).not.toThrow()
  })
  it('renders successfully when logged in', () => {
    expect(() => {
      mockCurrentUser({ email: 'Jimbo' })
      render(<Dropdown />)
      expect(screen.getByLabelText('user-icon')).toBeInTheDocument()
    }).not.toThrow()
  })
})
