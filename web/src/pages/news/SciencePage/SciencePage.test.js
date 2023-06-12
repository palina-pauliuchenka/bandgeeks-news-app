import { render } from '@redwoodjs/testing/web'

import SciencePage from './SciencePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SciencePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SciencePage />)
    }).not.toThrow()
  })
})
