import { render } from '@redwoodjs/testing/web'

import BubblesPage from './BubblesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BubblesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BubblesPage />)
    }).not.toThrow()
  })
})
