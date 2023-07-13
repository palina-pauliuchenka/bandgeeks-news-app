import { useState, useEffect } from 'react'

import { Link, routes, useLocation } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import Dropdown from 'src/components/Dropdown/Dropdown.js'

const NewsLayout = ({ children }) => {
  const { isAuthenticated } = useAuth()
  const { pathname } = useLocation()
  const [refreshing, setRefresh] = useState(false)
  const [darkActive, checkDark] = useState(false)

  const activeRoute = window.localStorage.getItem('activeRoute') || pathname

  const handleRefreshClick = () => {
    window.location.reload()
    setRefresh(true)
  }

  // Get current date
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  useEffect(() => {
    const storedDarkActive = localStorage.getItem('darkActive')
    if (storedDarkActive) {
      checkDark(JSON.parse(storedDarkActive))
    }
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    } // Call lightMode on component mount
  }, [darkActive])

  const lightMode = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
  }

  function checkMode() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      checkDark(false) // Set darkActive to true for dark mode
    } else {
      checkDark(true) // Set darkActive to false for light mode
    }
  }

  window.localStorage.setItem('activeRoute', activeRoute)

  return (
    <>
      <header
        className={
          'mx-auto w-11/12 pt-6 text-gray-900 dark:text-white md:px-12'
        }
      >
        <div
          className={
            'grid w-full grid-cols-2 items-center border-b border-gray-600 pb-3 dark:border-white md:grid-cols-3'
          }
        >
          <p className={'hidden text-sm md:block'}>{currentDate}</p>
          <h1
            className={
              'xs:text-lg justify-self-center text-center font-chomsky sm:text-xl md:text-5xl'
            }
          >
            <Link to={routes.home()}>The Bikini Bottom News</Link>
          </h1>
          <ul
            className={
              'flex justify-between justify-self-end text-sm font-bold capitalize'
            }
          >
            <li>
              {isAuthenticated ? (
                <Dropdown />
              ) : (
                <>
                  <Link
                    to={routes.login()}
                    className={
                      'hidden rounded-full border border-gray-900 px-5 py-2 hover:border-gray-900 hover:bg-gray-900 hover:text-white lg:block'
                    }
                  >
                    <i className="fa-solid fa-user-tie mr-2"></i>Login
                  </Link>
                  <div className={'block lg:hidden'}>
                    <Dropdown />
                  </div>
                </>
              )}
            </li>
          </ul>
        </div>
      </header>

      {/* Button to be clicked to refresh the page */}
      <div className="relative z-50 hidden lg:block">
        <button
          className={
            'fixed bottom-5 right-10 rounded border border-gray-300 bg-white px-3 py-2 shadow dark:border-gray-100 dark:bg-gray-900 hover:dark:bg-gray-700'
          }
          onClick={handleRefreshClick}
        >
          {refreshing ? (
            <i className="fa-solid fa-spinner animate-spin"></i>
          ) : (
            <i className="fa-solid fa-arrows-rotate"></i>
          )}
        </button>

        {/* Button to toggle light and dark  mode */}
        <button
          className={
            'fixed bottom-20 right-10 rounded border border-gray-300 bg-white px-3 py-2 shadow dark:border-gray-100 dark:bg-gray-900 hover:dark:bg-gray-700'
          }
          onClick={() => {
            lightMode(), checkMode()
          }}
        >
          {darkActive ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </button>
      </div>

      {children}

      <footer
        className={
          'mx-auto w-11/12 py-12 text-gray-900 dark:text-white md:px-12 '
        }
      >
        <div
          className={
            'w-full border-t border-gray-600 pt-6 text-center font-gruppo dark:border-white'
          }
        >
          Built with pure suffering{' '}
          <i className="fa-regular fa-heart fa-xs mx-0.5"></i> by Palina, Joey,
          Sean, Carlos, & Sam.
        </div>
      </footer>
    </>
  )
}

export default NewsLayout
