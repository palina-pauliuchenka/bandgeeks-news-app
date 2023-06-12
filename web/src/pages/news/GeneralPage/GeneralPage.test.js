import { render } from '@redwoodjs/testing/web'

import GeneralPage from './GeneralPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GeneralPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GeneralPage />)
    }).not.toThrow()
  })
})
