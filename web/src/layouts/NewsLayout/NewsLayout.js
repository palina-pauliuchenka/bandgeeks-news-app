import { Link, routes } from '@redwoodjs/router'

const NewsLayout = ({ children }) => {
  return (
    <>
      <header className="bg-white shadow w-full">
        <div className="flex items-center justify-between px-12 py-6">
          <Link to={routes.home()} className="font-chomsky text-4xl">The Bikini Bottom News</Link>
          <nav>
            <ul className="font-mono lowercase text-sm">
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

          <div className="font-mono lowercase text-sm">
            <Link to={routes.signup()}>Account</Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default NewsLayout
