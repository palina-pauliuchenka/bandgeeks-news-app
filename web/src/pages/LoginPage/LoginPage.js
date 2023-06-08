import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

/*const LoginPage = () => {
  const [username, setUsername] = useState('')
>>>>>>> Stashed changes
  const [password, setPassword] = useState('')
  const [error, setError] = useState(' ')
  const authLogic = (event) => {
    event.preventDefault()

    db.User.findFirst({ where: { username, password } })
      .then((user) => {
        if (user) {
>>>>>>> Stashed changes
          navigate('/meme')
        } else {
          setError('Incorrect User Id or Password. Try again.')
        }
      })
      .catch((error) => {
        setError('Something went wrong. Please try again.')
      })
  }*/

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.meme())
    }
  }, [isAuthenticated])

  const usernameRef = useRef()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
      navigate(routes.meme())
    }
  }
  /*
  return (
    <>
      <MetaTags titel="Login" />

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <p>
                    <label htmlFor="username">Username</label>
                    <br />
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </p>
                  <p>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </p>
                  <button type="submit">Login</button>
                </Form>
                <p>
                  Don't have an account?{' '}
                  <Link to={routes.signup()}>Create account</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="rw-login-link mt-2 text-center">
            <span>Don't have an account?</span>{' '}
            <Link to={routes.signup()} className="rw-link">
              Sign up!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
*/
  return (
    <>
      <MetaTags title="Login" />

      <main className="rw-main w-96 mx-auto mt-12">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Login</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="username"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Username
                  </Label>
                  <TextField
                    name="username"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Username is required',
                      },
                    }}
                  />

                  <FieldError name="username" className="rw-field-error" />

                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />

                  <FieldError name="password" className="rw-field-error" />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">Login</Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link mt-2 text-center">
            <span>Don't have an account?</span>{' '}
            <Link to={routes.signup()} className="rw-link">
              Sign up!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default LoginPage
