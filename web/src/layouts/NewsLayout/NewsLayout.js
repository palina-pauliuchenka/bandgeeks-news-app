import { Link, routes } from '@redwoodjs/router'
import {useAuth} from "src/auth";
import {useState} from "react";

import njit from './njit.svg.png'
import ywcc from './ywcc.png'

const NewsLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  // const [refreshing, setRefreshing] = useState(false);
  //
  // const handleRefreshClick = () => {
  //   setRefreshing(true);
  //   navigate(window.location.pathname, { state: { refresh: true } });
  // };

  return (
    <>

      <header className={"py-6 px-12 text-gray-900"}>
        <div className={"flex justify-between items-center"}>
          <h1 className={"font-chomsky text-4xl"}>
            <Link to={routes.home()}>The Bikini Bottom News</Link>

          </h1>
          <nav>
            <ul className={"text-sm font-bold font-serif"}>
              <li className={"inline-block mx-3"}>
                <Link to={routes.general()}>General</Link>
              </li>
              <li className={"inline-block mx-3"}>
                <Link to={routes.business()}>Business</Link>
              </li>
              <li className={"inline-block mx-3"}>
                <Link to={routes.entertainment()}>Entertainment</Link>
              </li>
              <li className={"inline-block mx-3"}>
                <Link to={routes.health()}>Health</Link>
              </li>
              <li className={"inline-block mx-3"}>
                <Link to={routes.science()}>Science</Link>
              </li>
              <li className={"inline-block mx-3"}>
                <Link to={routes.sports()}>Sports</Link>
              </li>
              <li className={"inline-block mx-3"}>
                <Link to={routes.technology()}>Technology</Link>
              </li>
            </ul>
          </nav>
          <ul className={"text-sm capitalize font-bold flex justify-between"}>
            <li>
              {isAuthenticated ? (
                <>

                  <div className="relative ml-3">
                    <div>
                      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                              className="flex items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                              id="user-menu-button"
                              type="button"
                      >
                        <i className="text-2xl fa-regular fa-circle-user"></i><i
                        className="ml-1 fa-solid fa-caret-down fa-xs"></i>
                      </button>
                    </div>

                    <div
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                      <p className={"block px-4 py-2 text-sm text-gray-600 border-b "}>
                        <span className={"lowercase font-medium font-mono py-2"}>Signed in as</span> <br/>

                        <span className={"uppercase font-bold py-2"}>{currentUser.email}</span>
                      </p>
                      <Link
                        to={routes.settings()}
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                      >
                        Settings
                      </Link>
                      <Link
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                      >
                        <button type="button" onClick={logOut}>
                          Sign Out
                        </button>
                      </Link>
                    </div>
                  </div>

                </>

                ) : (
                <Link to={routes.login()}
                      className={"py-2 px-5 border border-gray-900 rounded-full hover:bg-gray-900 hover:border-gray-900 hover:text-white"}>
                  <i className="fa-solid fa-user-tie mr-2"></i>Login</Link>
              )}
            </li>
          </ul>
        </div>
      </header>

      {/* Button to be clicked to refresh the page */}
      <div className="relative z-50">
        <button
          className={"fixed right-10 bottom-10 border border-gray-300 shadow rounded py-2 px-3 bg-white"}
          // onClick={handleRefreshClick()}
        >

          <i className="fa-solid fa-arrows-rotate"></i>
          {/*{refreshing ? (*/}
          {/*  <i className="fa-solid fa-spinner animate-spin"></i>*/}
          {/*) : (*/}
          {/*  <i className="fa-solid fa-arrows-rotate"></i>*/}
          {/*)}*/}
        </button>
      </div>

      {children}

      <footer className={"mt-12 p-12 text-gray-900 max-w-7xl md:mx-auto border-t border-gray-900 text-sm"}>
        <div className={"grid md:grid-cols-3 grid-cols-1 md:place-items-center"}>

          <div className={"md:block flex justify-between"}>
            <p className={"font-bold mb-5 mr-5"}>Company</p>
            <div className={""}>
              <img
                className={"w-16 inline-block mr-3"}
                src={njit}
                alt=""
              />
              <img
                className={"w-16 inline-block"}
                src={ywcc}
                alt=""
              />
            </div>
          </div>

          <div className={"md:block flex justify-between md:pt-0 pt-12"}>
            <p className={"font-bold mb-3"}>Company</p>
            <ul className={"font-gruppo tracking-widest"}>
              <li className={"leading-6 "}>+0(123)456-7890</li>
              <li className={"leading-6 "}>schoolemail@njit.edu</li>
            </ul>
          </div>

          <div className={"md:block flex justify-between lg:pt-0 pt-12"}>
            <p className={"font-bold mb-3"}>Terms of Use</p>
            <ul className={"font-gruppo tracking-widest"}>
              <li className={"leading-6 hover:underline hover:underline-offset-4"}>
                <a
                  href={"https://www.njit.edu/dos/academic-integrity"}
                  target={"_blank"}
                >Academic Integrity</a>
              </li>
              <li className={"leading-6  hover:underline hover:underline-offset-4"}>
                <a
                  href={"https://www.njit.edu/dos/sites/njit.edu.dos/files/2022%20Code%20of%20Student%20Conduct%20.pdf"}
                  target={"_blank"}
                >Code of Conduct
                </a>
              </li>
              <li
                className={"leading-6 hover:underline hover:underline-offset-4"}>
                <a
                  href={"https://docs.google.com/document/d/1jfIt_MeRDHKPWXsX0bqTmFxrqPAWbh5yUwBfROrWKG8/edit?usp=sharing"}
                  target={"_blank"}
                >Privacy Policy
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
