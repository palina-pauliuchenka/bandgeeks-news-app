import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import { navigate } from '@redwoodjs/web'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const authLogic = (event) => {
    event.preventDefault()

    db.User.findFirst({ where: { username, password } })
      .then((user) => {
        if (user) {
          navigate('/')
        } else {
          setError('Incorrect User Id or Password. Try again.')
        }
      })
      .catch((error) => {
        setError('Something went wrong. Please try again.')
      })
  }

  return (
    <main className="rw-main">
      <div className="rw-scaffold rw-login-container">
        <div className="rw-segment">
          <header className="rw-segment-header">
            <h1 className="rw-heading rw-heading-secondary">Log In</h1>
          </header>

          <div className="rw-segment-main">
            <div className="rw-form-wrapper">
              {error && <p>{error}</p>}

              <form onSubmit={authLogic}>
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
              </form>
              <p>
                Don't have an account?{' '}
                <Link to={routes.signup()}>Create account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LoginPage
