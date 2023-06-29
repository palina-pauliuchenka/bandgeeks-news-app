import { render, screen, waitFor } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from '@redwoodjs/router'
import NewsLayout from './NewsLayout'

describe('NewsLayout', () => {

  /* Limited to General and Business to make it easier to
  read the terminal for errors when running 'yarn rw test'
  */

  it('should highlight the "General" link when on the General page', async () => {
    const history = createMemoryHistory()
    history.push('/general')
    render(
      <Router history={history}>
        <NewsLayout />
      </Router>
    )

    await waitFor(() => {
      const generalLink = screen.getByText((content, element) => {
        const hasText = content === 'General'
        const elementHasClass = element.classList.contains('text-white', 'bg-neutral-950');
        return hasText && elementHasClass
      }, { timeout: 5000 })

      expect(generalLink).toBeInTheDocument()
    })
  })

  it('should highlight the "Business" link when on the Business page', async () => {
    const history = createMemoryHistory()
    history.push('/business')
    render(
      <Router history={history}>
        <NewsLayout />
      </Router>
    )

    await waitFor(() => {
      const businessLink = screen.getByText((content, element) => {
        const hasText = content === 'Business'
        const elementHasClass = element.classList.contains('text-white', 'bg-neutral-950')
        return hasText && elementHasClass
      }, { timeout: 5000 })

      expect(businessLink).toBeInTheDocument()
    })
  })
})