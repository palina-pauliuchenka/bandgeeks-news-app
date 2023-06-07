import { render } from '@redwoodjs/testing/web'

import HomePage from './HomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HomePage', () => {
  const topLinks = [
    { name: 'International' },
    { name: 'Politics' },
    { name: 'Finance' },
    { name: 'Tech' },
    { name: 'Climate' },
    { name: 'Nature' },
    { name: 'Fashion' },
    { name: 'Food' },
  ]
  it('renders successfully', () => {
    render(<HomePage />)
    topLinks.forEach((data) => {
      expect(screen.getByRole('link', data)).toBeInTheDocument()
    })
  })

  it('is loading', () => {
    render(<HomePage />)
    topLinks.forEach((data) => {
      expect(screen.getByRole('link', data)).toBeInTheDocument()
    })
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('failed to load', () => {
    render(<HomePage />)
    expect(screen.getByText('An error has occurred')).toBeInTheDocument()
  })
})
