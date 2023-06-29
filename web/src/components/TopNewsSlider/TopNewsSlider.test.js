import { render } from '@redwoodjs/testing/web'

import TopNewsSlider from './TopNewsSlider'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TopNewsSlider', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopNewsSlider />)
    }).not.toThrow()
  })
})
