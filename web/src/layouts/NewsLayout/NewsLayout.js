import { Link, routes } from '@redwoodjs/router'

const NewsLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Band Geeks</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.meme()}>Meme</Link>
            </li>
            <li>
              <Link to={routes.signup()}>Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default NewsLayout
