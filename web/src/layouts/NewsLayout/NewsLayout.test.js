import { screen, render } from '@redwoodjs/testing/web'

import NewsLayout from './NewsLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewsLayout', () => {
  it('renders successfully when logged out', async () => {
    expect(() => {
      render(<NewsLayout />)
      expect(screen.getByRole('link', { name: 'General' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Business' })).toBeInTheDocument()
      expect(
        screen.getByRole('link', { name: 'Entertainment' })
      ).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Health' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Sports' })).toBeInTheDocument()
      expect(
        screen.getByRole('link', { name: 'Technology' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { value: 'Welcome, Nobody' })
      ).toBeInTheDocument()
    }).not.toThrow()
  })

  it('renders successfully when logged in', async () => {
    expect(() => {
      mockCurrentUser({ email: 'Jimbo' })
      render(<NewsLayout />)
      expect(screen.getByRole('link', { name: 'General' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Business' })).toBeInTheDocument()
      expect(
        screen.getByRole('link', { name: 'Entertainment' })
      ).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Health' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Sports' })).toBeInTheDocument()
      expect(
        screen.getByRole('link', { name: 'Technology' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: 'Welcome, Jimbo' })
      ).toBeInTheDocument()
    }).not.toThrow()
  })
})
