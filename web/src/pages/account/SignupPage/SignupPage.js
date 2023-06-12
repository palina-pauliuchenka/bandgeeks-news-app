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

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on username box on page load
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
      <MetaTags title="Signup" />

      <main className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="">
            {/* This string of text "Regester an Account" must be present to pass all tests */}
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register an Account
            </h2>

            <div className="">
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {/* Form Has a title of data so it can be detected by the test cases.
                Always make sure it has the title of data so we can confirm it is rendering */}
                <Form title="data" onSubmit={onSubmit} className="space-y-6">
                  {/* <--------------USERNAME STUFF--------------> */}
                  <Label
                    name="username"
                    className="block font-medium leading-6 text-gray-900"
                    errorClassName="block font-medium leading-6 text-red-600"
                  >
                    Username
                  </Label>
                  <TextField
                    name="username"
                    title="Username"
                    aria-label="Username"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow focus:shadow-violet-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                    errorClassName="block w-full rounded-md border-0 py-1.5 text-red-600 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    style={{ outline: 'none' }}
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message:
                          'Username must be alphanumeric and at least 8 characters with no spaces',
                        pattern: /^[A-Za-z0-9]{8,}$/,
                      },
                    }}
                  />
                  <FieldError name="username" className="rw-field-error" />

                  {/* <--------------PASSWORD STUFF--------------> */}
                  <Label
                    name="password"
                    className="block font-medium leading-6 text-gray-900"
                    errorClassName="block font-medium leading-6 text-red-600"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    title="Password"
                    aria-label="Password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow focus:shadow-violet-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                    errorClassName="block w-full rounded-md border-0 py-1.5 text-red-600 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    style={{ outline: 'none' }}
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message:
                          'Password must be at least 8 characters long, have at least 1 capital & lowercase letter, 1 number and 1 special character',
                        pattern:
                          /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).{8,}/,
                      },
                    }}
                  />
                  <FieldError name="password" className="rw-field-error" />

                  {/* <--------------CONFIRM STUFF--------------> */}
                  <Label
                    name="confirm-password"
                    for="confirm-password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                    errorClassName="rw-label rw-label-error"
                  >
                    Confirm Password
                  </Label>
                  <PasswordField
                    name="confirm-password"
                    title="confirm"
                    aria-label="confirm-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'MUST confirm password',
                      },
                    }}
                  />
                  <FieldError //for Confirm password
                    name="confirm-password"
                    className="rw-field-error"
                  />

                  {/* <--------------BUTTONS AND LINKS--------------> */}
                  <div className="">
                    <Submit className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Sign Up
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="text-indigo-500 underline">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupPage
