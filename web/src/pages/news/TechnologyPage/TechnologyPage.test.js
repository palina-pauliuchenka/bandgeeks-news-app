import { render } from '@redwoodjs/testing/web'

import TechnologyPage from './TechnologyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TechnologyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TechnologyPage />)
    }).not.toThrow()
  })
})
