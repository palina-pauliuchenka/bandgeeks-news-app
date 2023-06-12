import { render } from '@redwoodjs/testing/web'

import SportsPage from './SportsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SportsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SportsPage />)
    }).not.toThrow()
  })
})
