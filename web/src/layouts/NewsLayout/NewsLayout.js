import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const NewsLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  /* Testing Variables
  console.log('isAuthenticated:', isAuthenticated);
  console.log('currentUser:', currentUser);

  --Result of Console Logging--
  - isAuthenticated is false (even when logged in)
  - currentUser is null (even when logged in)
  */

  return (
    <>
      <header className="w-full bg-white shadow">
        <div className="flex items-center justify-between px-12 py-6">
          <Link to={routes.home()} className="font-chomsky text-4xl">
            The Bikini Bottom News
          </Link>
          <nav>
            <ul className="font-mono text-sm lowercase">
              <li className="mx-5">
                <Link to={routes.home()}>Home</Link>
              </li>
              <li className="mx-5">
                <Link to={routes.about()}>About</Link>
              </li>
              <li className="mx-5">
                <Link to={routes.meme()}>Meme</Link>
              </li>
            </ul>
          </nav>

          {/* Currently Doesn't Work: Account is the only thing that displays */}
          {isAuthenticated && currentUser ? (
            <div className="font-mono text-sm lowercase">
              Hello, {currentUser.username}.
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <div className="font-mono text-sm lowercase">
              <Link to={routes.signup()}>Account</Link>
            </div>
          )}
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default NewsLayout
