import { render } from '@redwoodjs/testing/web'

import EntertainmentPage from './EntertainmentPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EntertainmentPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EntertainmentPage />)
    }).not.toThrow()
  })
})
