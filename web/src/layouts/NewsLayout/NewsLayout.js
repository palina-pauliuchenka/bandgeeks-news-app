import { useState } from 'react'

import { Link, routes, useLocation } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import Dropdown from 'src/components/Dropdown/Dropdown.js'

import njit from './njit.svg.png'
import ywcc from './ywcc.png'

const NewsLayout = ({ children }) => {
  const { isAuthenticated } = useAuth()
  const { pathname } = useLocation()
  const [refreshing, setRefresh] = useState(false)

  const activeRoute = window.localStorage.getItem('activeRoute') || pathname

  const handleRefreshClick = () => {
    window.location.reload()
    setRefresh(true)
  }

  window.localStorage.setItem('activeRoute', activeRoute)

  return (
    <>
      <header className={'px-6 py-6 text-gray-900 md:px-12'}>
        <div className={'flex items-center justify-between'}>
          <h1 className={'font-chomsky text-2xl md:text-4xl'}>
            <Link to={routes.home()}>The Bikini Bottom News</Link>
          </h1>
          <nav className={'hidden lg:block'}>
            <ul className={'font-serif text-sm font-bold'}>
              <li className={`${pathname === routes.general() ? 'mx-3 inline-block text-white bg-neutral-950' : 'mx-3 inline-block'}`}>
                <Link to={routes.general()}>General</Link>
              </li>
              <li className={`${pathname === routes.business() ? 'mx-3 inline-block text-white bg-neutral-950' : 'mx-3 inline-block'}`}>
                <Link to={routes.business()}>Business</Link>
              </li>
              <li className={`${pathname === routes.entertainment() ? 'mx-3 inline-block text-white bg-neutral-950' : 'mx-3 inline-block'}`}>
                <Link to={routes.entertainment()}>Entertainment</Link>
              </li>
              <li className={`${pathname === routes.health() ? 'mx-3 inline-block text-white bg-neutral-950' : 'mx-3 inline-block'}`}>
                <Link to={routes.health()}>Health</Link>
              </li>
              <li className={`${pathname === routes.science() ? 'mx-3 inline-block text-white bg-neutral-950' : 'mx-3 inline-block'}`}>
                <Link to={routes.science()}>Science</Link>
              </li>
              <li className={`${pathname === routes.sports() ? 'mx-3 inline-block text-white bg-neutral-950' : 'mx-3 inline-block'}`}>
                <Link to={routes.sports()}>Sports</Link>
              </li>
              <li className={`${pathname === routes.technology() ? 'mx-3 inline-block text-white bg-neutral-950' : 'mx-3 inline-block'}`}>
                <Link to={routes.technology()}>Technology</Link>
              </li>
            </ul>
          </nav>
          <ul className={'flex justify-between text-sm font-bold capitalize'}>
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
                  <div className={"block lg:hidden"}>
                    <Dropdown />
                  </div>
                </>
              )}
            </li>
          </ul>
        </div>
      </header>

      {/* Button to be clicked to refresh the page */}
      <div className="relative z-50">
        <button
          className={
            'fixed bottom-10 right-10 rounded border border-gray-300 bg-white px-3 py-2 shadow'
          }
          onClick={handleRefreshClick}
        >
          {refreshing ? (
            <i className="fa-solid fa-spinner animate-spin"></i>
          ) : (
            <i className="fa-solid fa-arrows-rotate"></i>
          )}
        </button>
      </div>

      {children}

      <footer
        className={
          'mt-12 max-w-7xl border-t border-gray-900 p-12 text-sm text-gray-900 md:mx-auto'
        }
      >
        <div
          className={'grid grid-cols-1 md:grid-cols-3 md:place-items-center'}
        >
          <div className={'flex justify-between md:block'}>
            <p className={'mb-5 mr-5 font-bold'}>Company</p>
            <div className={''}>
              <img className={'mr-3 inline-block w-16'} src={njit} alt="" />
              <img className={'inline-block w-16'} src={ywcc} alt="" />
            </div>
          </div>

          <div className={'flex justify-between pt-12 md:block md:pt-0'}>
            <p className={'mb-3 font-bold'}>Company</p>
            <ul className={'font-gruppo tracking-widest'}>
              <li className={'leading-6 '}>+0(123)456-7890</li>
              <li className={'leading-6 '}>schoolemail@njit.edu</li>
            </ul>
          </div>

          <div className={'flex justify-between pt-12 md:block lg:pt-0'}>
            <p className={'mb-3 font-bold'}>Terms of Use</p>
            <ul className={'font-gruppo tracking-widest'}>
              <li
                className={'leading-6 hover:underline hover:underline-offset-4'}
              >
                <a
                  href={'https://www.njit.edu/dos/academic-integrity'}
                  target={'_blank'}
                  rel="noreferrer"
                >
                  Academic Integrity
                </a>
              </li>
              <li
                className={
                  'leading-6  hover:underline hover:underline-offset-4'
                }
              >
                <a
                  href={
                    'https://www.njit.edu/dos/sites/njit.edu.dos/files/2022%20Code%20of%20Student%20Conduct%20.pdf'
                  }
                  target={'_blank'}
                  rel="noreferrer"
                >
                  Code of Conduct
                </a>
              </li>
              <li
                className={'leading-6 hover:underline hover:underline-offset-4'}
              >
                <a
                  href={
                    'https://docs.google.com/document/d/1jfIt_MeRDHKPWXsX0bqTmFxrqPAWbh5yUwBfROrWKG8/edit?usp=sharing'
                  }
                  target={'_blank'}
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default NewsLayout
