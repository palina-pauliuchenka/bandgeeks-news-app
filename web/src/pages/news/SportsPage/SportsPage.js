import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SportsPage = () => {
  return (
    <>
      <MetaTags title="Sports" description="Sports page" />

      <h1>SportsPage</h1>
      <p>
        Find me in <code>./web/src/pages/SportsPage/SportsPage.js</code>
      </p>
      <p>
        My default route is named <code>sports</code>, link to me with `
        <Link to={routes.sports()}>Sports</Link>`
      </p>
    </>
  )
}

export default SportsPage
