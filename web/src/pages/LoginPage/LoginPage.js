import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()
  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

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
const LoginPage = () => {
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(' ')

  const authLogic = () => {
    db.User.findFirst({ where: { userid, password } })
      .then((User) => {
        if (User) {
          navigate('/meme')
        } else {
          setError('Incorrect User Id or Password. Try again.')
        }
      })
      .catch((error) => {
        setError('Something went wrong. Please try again.')
      })
  }
  */

  /* return (
    <>
      <MetaTags title="Login" description="Login" />
      <br></br>
      <br></br>
      <center>
        <h1 style={{ fontSize: '50px' }}>Login</h1>
        <form>
          <p>
            <label
              htmlFor="userid"
              style={{ fontSize: '20px', marginLeft: '-90px' }}
            >
              Username:
            </label>
            <br></br>
            <input type="text" id="userid" name="userid" required />
          </p>
          <p>
            <label
              htmlFor="password"
              style={{ fontSize: '20px', marginLeft: '-90px' }}
            >
              Password:
            </label>
            <br></br>
            <input type="password" id="password" name="password" required />
          </p>
          <button
            type="submit"
            onClick={onSubmit}
            style={{
              fontSize: '18px',
              backgroundColor: 'green',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            Login
          </button>
        </form>
        <p>_________________________</p>
        <p style={{ fontSize: '20px' }}>
          Don't have an account?{' '}
          <Link to={routes.signup()}>Create account</Link>
        </p>
      </center>
    </>
  )
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
