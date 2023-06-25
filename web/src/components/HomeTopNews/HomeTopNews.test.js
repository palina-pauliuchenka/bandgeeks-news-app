import { render } from '@redwoodjs/testing/web'

import HomeTopNews from './HomeTopNews'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HomeTopNews', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeTopNews />)
    }).not.toThrow()
  })
})
