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

  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({
      username: data.username,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <main className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
              Login into Account
            </h2>

            <div className="">
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <Form onSubmit={onSubmit} className="space-y-6">
                  <Label
                    name="username"
                    className="block font-medium leading-6 text-gray-900 dark:text-white"
                    errorClassName="block font-medium leading-6 text-red-600"
                  >
                    Username
                  </Label>
                  <TextField
                    name="username"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 focus:shadow focus:shadow-violet-400 sm:text-sm sm:leading-6"
                    errorClassName="block w-full rounded-md border-0 py-1.5 text-red-600 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    style={{outline: "none"}}
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
                    className="block font-medium leading-6 text-gray-900 dark:text-white"
                    errorClassName="block font-medium leading-6 text-red-600"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 focus:shadow focus:shadow-violet-400 sm:text-sm sm:leading-6"
                    errorClassName="block w-full rounded-md border-0 py-1.5 text-red-600 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    style={{outline: "none"}}
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />

                  {/*<div className="rw-forgot-link">*/}
                  {/*  <Link*/}
                  {/*    to={routes.forgotPassword()}*/}
                  {/*    className="rw-forgot-link"*/}
                  {/*  >*/}
                  {/*    Forgot Password?*/}
                  {/*  </Link>*/}
                  {/*</div>*/}

                  <FieldError name="password" className="rw-field-error" />

                  <div className="">
                    <Submit className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span className='mx-auto w-11/12 pt-6 text-gray-900 dark:text-white md:px-12'>Don't have an account?</span>{' '}
            <Link to={routes.signup()} className="underline text-indigo-500">
              Sign up!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default LoginPage
