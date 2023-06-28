import { render } from '@redwoodjs/testing/web'

import HealthPage from './HealthPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HealthPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HealthPage />)
    }).not.toThrow()
  })
})