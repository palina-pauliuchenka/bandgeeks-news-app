import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

// For Form Usage (from Redwood Tutorial)
import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'

import { useAuth } from 'src/auth'
import { useEffect } from 'react'


const SignupPage = () => {

  const { isAuthenticated, signUp } = useAuth()
  /*
  // Uncomment this block when homepage is made
  // Should redirect to home after signing up
  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])
  */

  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await signUp({
      username: data.username,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title="Signup" description="Signup page" />

      <h1>SignupPage</h1>
      <p>
        Find me in <code>./web/src/pages/SignupPage/SignupPage.js</code>
      </p>
      <p>
        My default route is named <code>signup</code>, link to me with `
        <Link to={routes.signup()}>Signup</Link>`
      </p>
    </>
  )
}

export default SignupPage
