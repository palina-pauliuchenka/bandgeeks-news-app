import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TechnologyPage = () => {
  return (
    <>
      <MetaTags title="Technology" description="Technology page" />

      <h1>TechnologyPage</h1>
      <p>
        Find me in <code>./web/src/pages/TechnologyPage/TechnologyPage.js</code>
      </p>
      <p>
        My default route is named <code>technology</code>, link to me with `
        <Link to={routes.technology()}>Technology</Link>`
      </p>
    </>
  )
}

export default TechnologyPage
