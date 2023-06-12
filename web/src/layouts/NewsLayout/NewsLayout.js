import { Link, routes } from '@redwoodjs/router'
import {useAuth} from "src/auth";

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
          <ul className={"text-sm font-bold"}>
            <li>
              {isAuthenticated ? (
                <div className={"relative"}>
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
    </>
  )
}

export default NewsLayout
