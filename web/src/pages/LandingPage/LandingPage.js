import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LandingPage = () => {
  return (
    <>
      <MetaTags title="Landing" description="Landing page" />

      <h1>LandingPage</h1>
      <p>
        Find me in <code>./web/src/pages/LandingPage/LandingPage.js</code>
      </p>
      <p>
        My default route is named <code>landing</code>, link to me with `
        <Link to={routes.landing()}>Landing</Link>`
      </p>
    </>
  )
}

export default LandingPage
