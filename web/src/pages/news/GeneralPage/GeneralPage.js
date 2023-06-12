import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const GeneralPage = () => {
  return (
    <>
      <MetaTags title="General" description="General page" />

      <h1>GeneralPage</h1>
      <p>
        Find me in <code>./web/src/pages/GeneralPage/GeneralPage.js</code>
      </p>
      <p>
        My default route is named <code>general</code>, link to me with `
        <Link to={routes.general()}>General</Link>`
      </p>
    </>
  )
}

export default GeneralPage
