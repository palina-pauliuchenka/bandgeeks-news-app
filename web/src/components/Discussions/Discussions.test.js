import { render } from '@redwoodjs/testing/web'

import Discussions from './Discussions'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Discussions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Discussions />)
    }).not.toThrow()
  })
})
