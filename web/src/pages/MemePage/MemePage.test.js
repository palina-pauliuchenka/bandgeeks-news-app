import { render } from '@redwoodjs/testing/web'

import MemePage from './MemePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MemePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MemePage />)
    }).not.toThrow()
  })
})
