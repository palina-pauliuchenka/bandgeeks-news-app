import { screen, render } from '@redwoodjs/testing/web'

import Dropdown from './Dropdown'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Dropdown', () => {
  it('renders successfully when logged out', () => {
    expect(() => {
      render(<Dropdown />)
      expect(screen.getByText('Welcome, Nobody')).toBeInTheDocument()
    }).not.toThrow()
  })
  it('renders successfully when logged in', () => {
    expect(() => {
      mockCurrentUser({ email: 'Jimbo' })
      render(<Dropdown />)
      expect(screen.getByText('Welcome, Jimbo')).toBeInTheDocument()
    }).not.toThrow()
  })
})
