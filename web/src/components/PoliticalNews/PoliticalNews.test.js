import { render } from '@redwoodjs/testing/web'

import PoliticalNews from './PoliticalNews'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PoliticalNews', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PoliticalNews />)
    }).not.toThrow()
  })
})
