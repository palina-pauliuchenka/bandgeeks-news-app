import { render } from '@redwoodjs/testing/web'

import SearchResultsPage from './SearchResultsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SearchResultsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SearchResultsPage />)
    }).not.toThrow()
  })
})
