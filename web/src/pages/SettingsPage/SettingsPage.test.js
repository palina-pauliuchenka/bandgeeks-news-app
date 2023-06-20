import { render, screen } from '@redwoodjs/testing/web'

import SettingsPage from './SettingsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SettingsPage', () => {
  it('renders the options successfully', () => {
    expect(() => {
      render(<SettingsPage />)
      expect(
        screen.getByRole('checkbox', { name: 'General' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('checkbox', { name: 'Entertainment' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('checkbox', { name: 'Sports' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('checkbox', { name: 'Business' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('checkbox', { name: 'Health' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('checkbox', { name: 'Science' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('checkbox', { name: 'Technology' })
      ).toBeInTheDocument()
    }).not.toThrow()
  })
  it('renders the buttons successfully', () => {
    expect(() => {
      render(<SettingsPage />)
      expect(screen.getByText('Save')).toBeInTheDocument()
      expect(screen.getByText('Cancel')).toBeInTheDocument()
    }).not.toThrow()
  })
})
