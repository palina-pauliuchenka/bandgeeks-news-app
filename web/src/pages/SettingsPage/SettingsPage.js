import React from 'react'

import { Form, CheckboxField } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation, useQuery } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import ChooseAvatar from 'src/components/ChooseAvatar'

const EDITUSER = gql`
  mutation EditUserMutation(
    $DarkMode: Boolean!
    $General: Boolean!
    $Business: Boolean!
    $Entertainment: Boolean!
    $Health: Boolean!
    $Science: Boolean!
    $Sports: Boolean!
    $Technology: Boolean!
    $Username: Int!
  ) {
    updateUser(
      id: $Username
      input: {
        darkMode: $DarkMode
        newsGeneral: $General
        newsBusiness: $Business
        newsEntertainment: $Entertainment
        newsHealth: $Health
        newsScience: $Science
        newsSports: $Sports
        newsTechnology: $Technology
      }
    ) {
      newsGeneral
    }
  }
`
const getusr = gql`
  query User($id: Int!) {
    fetchUserbyId(id: $id) {
      darkMode
      newsGeneral
      newsBusiness
      newsEntertainment
      newsHealth
      newsScience
      newsSports
      newsTechnology
    }
  }
`
// Holy Fuckles It's Knuckles, the amount of mental hoops I have to jump through just to understand this GQL syntax
const SettingsPage = () => {
  const [create] = useMutation(EDITUSER)
  const { currentUser } = useAuth()
  const { data, loading, error } = useQuery(getusr, {
    variables: { id: currentUser.id },
  })
  if (loading || error) return <div>Loading...</div>
  const runQuery = (event) => {
    var counter = 0
    for (var x in event) {
      if (event[x] == true) counter = counter + 1
    }
    if (counter == 0) {
      window.alert('Please select at least 1 checkbox')
      return false
    }
    create({
      variables: {
        DarkMode: event['DarkMode'],
        General: event['General'],
        Business: event['Business'],
        Entertainment: event['Entertainment'],
        Health: event['Health'],
        Science: event['Science'],
        Sports: event['Sports'],
        Technology: event['Technology'],
        Username: currentUser.id,
      },
    }) //*/
    navigate(routes.home())
    return true
  }

  return (
    <>
      <MetaTags title="Settings" description="Settings page" />

      <Form
        action={routes.home()}
        Link={routes.home()}
        onSubmit={runQuery}
        className={'mx-auto max-w-4xl px-6 py-24 text-gray-900 dark:text-white'}
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <nav className="mb-6 flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <p className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400">
                    <svg
                      aria-hidden="true"
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    TBBN
                  </p>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>

                    <Link
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-purple-400 md:ml-2"
                      to={routes.home()}
                    >
                      Home
                    </Link>
                  </div>
                </li>
                <li>{/* Add button for dark theme here */}</li>
              </ol>
            </nav>

            <h2 className="text-base font-semibold leading-7">Profile</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-10">
              <ChooseAvatar></ChooseAvatar>
            </div>
          </div>
          <div className="mt-10">
            <div className="">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6"
              >
                Set-up Your news preferences
              </label>
              <div className="mt-5 flex items-center gap-x-3">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
                  <label className="relative mr-5 inline-flex cursor-pointer items-center">
                    <CheckboxField
                      type="checkbox"
                      name="General"
                      defaultChecked={data.fetchUserbyId.newsGeneral}
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-purple-800"></div>
                    <span className="ml-3 text-sm font-medium">General</span>
                  </label>

                  <label className="relative mr-5 inline-flex cursor-pointer items-center">
                    <CheckboxField
                      type="checkbox"
                      name="Business"
                      defaultChecked={data.fetchUserbyId.newsBusiness}
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-purple-800"></div>
                    <span className="ml-3 text-sm font-medium">Business</span>
                  </label>

                  <label className="relative mr-5 inline-flex cursor-pointer items-center">
                    <CheckboxField
                      type="checkbox"
                      name="Entertainment"
                      defaultChecked={data.fetchUserbyId.newsEntertainment}
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-purple-800"></div>
                    <span className="ml-3 text-sm font-medium">
                      Entertainment
                    </span>
                  </label>

                  <label className="relative mr-5 inline-flex cursor-pointer items-center">
                    <CheckboxField
                      type="checkbox"
                      name="Health"
                      defaultChecked={data.fetchUserbyId.newsHealth}
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-purple-800"></div>
                    <span className="ml-3 text-sm font-medium">Health</span>
                  </label>

                  <label className="relative mr-5 inline-flex cursor-pointer items-center">
                    <CheckboxField
                      type="checkbox"
                      name="Science"
                      defaultChecked={data.fetchUserbyId.newsScience}
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-purple-800"></div>
                    <span className="ml-3 text-sm font-medium">Science</span>
                  </label>

                  <label className="relative mr-5 inline-flex cursor-pointer items-center">
                    <CheckboxField
                      type="checkbox"
                      name="Sports"
                      defaultChecked={data.fetchUserbyId.newsSports}
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-purple-800"></div>
                    <span className="ml-3 text-sm font-medium">Sports</span>
                  </label>

                  <label className="relative mr-5 inline-flex cursor-pointer items-center">
                    <CheckboxField
                      type="checkbox"
                      name="Technology"
                      defaultChecked={data.fetchUserbyId.newsTechnology}
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-purple-800"></div>
                    <span className="ml-3 text-sm font-medium">Technology</span>
                  </label>
                </div>

                {/*<button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>*/}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link to={routes.home()}>
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            // onClick={runQuery}
            className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </Form>
    </>
  )
}

export default SettingsPage
