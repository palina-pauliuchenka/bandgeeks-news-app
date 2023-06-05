import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SignUpPage = () => {
  return (
    <>
      <MetaTags title="SignUp" description="SignUp page" />

      <h1>SignUpPage</h1>
      <p>
        Find me in <code>./web/src/pages/SignUpPage/SignUpPage.js</code>
      </p>
      <p>
        My default route is named <code>signUp</code>, link to me with `
        <Link to={routes.signUp()}>SignUp</Link>`
      </p>
    </>
  )
}

export default SignUpPage
