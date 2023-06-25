import { render } from '@redwoodjs/testing/web'

import ListElements from './ListElements'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ListElements', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ListElements />)
    }).not.toThrow()
  })
})
