import { Link, routes } from '@redwoodjs/router'
import {useAuth} from "src/auth";

import njit from './njit.svg.png'
import ywcc from './ywcc.png'

const NewsLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

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
                <div className={"relative font-bold"}>
                  <i className="fa-solid fa-user-tie mr-3"></i>
                    <span className={"uppercase"}>{currentUser.email}</span>{' '}<i className="fa-solid fa-caret-down mx-2 -rotate-90"></i>
                    <button type="button" onClick={logOut}>
                      Logout
                    </button>
                </div>
              ) : (
                <Link to={routes.login()}
                      className={"py-2 px-5 border border-gray-900 rounded-full hover:bg-gray-900 hover:border-gray-900 hover:text-white"}>
                  <i className="fa-solid fa-user-tie mr-2"></i>Login</Link>
              )}
            </li>
          </ul>
        </div>
      </header>

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
