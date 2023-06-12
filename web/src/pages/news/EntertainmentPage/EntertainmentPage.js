import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const EntertainmentPage = () => {
  return (
    <>
      <MetaTags title="Entertainment" description="Entertainment page" />

      <h1>EntertainmentPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/EntertainmentPage/EntertainmentPage.js</code>
      </p>
      <p>
        My default route is named <code>entertainment</code>, link to me with `
        <Link to={routes.entertainment()}>Entertainment</Link>`
      </p>
    </>
  )
}

export default EntertainmentPage
