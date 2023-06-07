import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { navigate } from '@redwoodjs/web'

const LoginPage = () => {
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(' ')

  const authLogic = () => {
    db.User.findFirst({ where: { userid, password } })
      .then((User) => {
        if (User) {
          navigate('/landing')
        } else {
          setError('Incorrect User Id or Password. Try again.')
        }
      })
      .catch((error) => {
        setError('Something went wrong. Please try again.')
      })
  }

  return (
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
            onClick={authLogic}
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
}

export default LoginPage
