import { render } from '@redwoodjs/testing/web'

import NewsLayout from './NewsLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewsLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewsLayout />)
    }).not.toThrow()
  })
})
