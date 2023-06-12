import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SciencePage = () => {
  return (
    <>
      <MetaTags title="Science" description="Science page" />

      <h1>SciencePage</h1>
      <p>
        Find me in <code>./web/src/pages/SciencePage/SciencePage.js</code>
      </p>
      <p>
        My default route is named <code>science</code>, link to me with `
        <Link to={routes.science()}>Science</Link>`
      </p>
    </>
  )
}

export default SciencePage
