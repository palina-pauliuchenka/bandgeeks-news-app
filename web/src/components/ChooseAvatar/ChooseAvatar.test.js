import { render } from '@redwoodjs/testing/web'

import ChooseAvatar from './ChooseAvatar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChooseAvatar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChooseAvatar />)
    }).not.toThrow()
  })
})
