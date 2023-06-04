import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import { navigate } from '@redwoodjs/web';


const LoginPage = () => {

const [userId, setUserId] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState(' ');

const authLogic = () => {

   db./* insert database table name */.findFirst({where: {userid, password,},}).then((/* insert database table name */) => {
      if (/* insert database table name which also acts as the T/F value */)
      {
        navigate('/landing');
      }
      else
      {
        setError("Incorrect User Id or Password. Try again.");
      }
    }).catch((error) => {
      setError("Something went wrong. Please try again.");
    });
};

  return (
    <>
      <MetaTags title="Login" description="Login" />
      <center>
      <h1>Login Page</h1>
    <form>
      <p>
      <label htmlFor="userid">User Id:</label><br></br>
      <input type="text" id="userid" name="userid" required />
      </p>
      <p>
      <label htmlFor="password">Password:</label><br></br>
      <input type="password" id="password" name="password" required />
      </p>
      <button type="submit" onClick={authLogic}>Login</button>
      </form>
      <p>
        Don't have an account?
        <Link to={routes.signup()}> Sign Up</Link>
      </p>
      </center>
    </>
  )
}

export default LoginPage
