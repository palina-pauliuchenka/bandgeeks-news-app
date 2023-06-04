import { render } from '@redwoodjs/testing/web'

import LandingPage from './LandingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LandingPage', () => {
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
    render(<LandingPage />)
    topLinks.forEach((data) => {
      expect(screen.getByRole('link', data)).toBeInTheDocument()
    })
  })

  it('is loading', () => {
    render(<LandingPage />)
    topLinks.forEach((data) => {
      expect(screen.getByRole('link', data)).toBeInTheDocument()
    })
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('failed to load', () => {
    render(<LandingPage />)
    expect(screen.getByText('An error has occurred')).toBeInTheDocument()
  })
})
