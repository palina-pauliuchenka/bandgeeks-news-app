import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HealthPage = () => {
  return (
    <>
      <MetaTags title="Health" description="Health page" />

      <h1>HealthPage</h1>
      <p>
        Find me in <code>./web/src/pages/HealthPage/HealthPage.js</code>
      </p>
      <p>
        My default route is named <code>health</code>, link to me with `
        <Link to={routes.health()}>Health</Link>`
      </p>
    </>
  )
}

export default HealthPage
