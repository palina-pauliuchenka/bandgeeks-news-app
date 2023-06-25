import { Form, useForm, useFormContext, CheckboxField } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation, useQuery } from '@redwoodjs/web'

import ChooseAvatar from "src/components/ChooseAvatar";

import { useAuth } from 'src/auth'
const EDITUSER = gql`
  mutation EditUserMutation(
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
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const { data, loading, error } = useQuery(getusr, {
    variables: { id: currentUser.id },
  })
  if (loading) return <div>Loading...</div>
  console.log(data.fetchUserbyId)
  const runQuery = (event) => {
    var counter = 0
    for (var x in event) {
      if (event[x] == true) counter = counter + 1
    }
    console.log(event, counter)
    if (counter == 0) {
      return false
    }
    create({
      variables: {
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
    window.location.href = routes.home()
    return true
  }

  return (
    <>
      <MetaTags title="Settings" description="Settings page" />

      <Form
        action={routes.home()}
        onSubmit={runQuery}
        className={'mx-auto max-w-4xl py-24 px-6'}
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Profile
            </h2>
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
                className="block text-sm font-medium leading-6 text-gray-900"
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
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-900">
                        General
                      </span>
                  </label>

                  <label className="relative mr-5 inline-flex cursor-pointer items-center">
                    <CheckboxField
                      type="checkbox"
                      name="Business"
                      defaultChecked={data.fetchUserbyId.newsBusiness}
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-purple-800"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-900">
                        Business
                      </span>
                  </label>

                  <label className="relative mr-5 inline-flex cursor-pointer items-center">
                    <CheckboxField
                      type="checkbox"
                      name="Entertainment"
                      defaultChecked={data.fetchUserbyId.newsEntertainment}
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-purple-800"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-900">
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
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-900">
                        Health
                      </span>
                  </label>

                  <label className="relative mr-5 inline-flex cursor-pointer items-center">
                    <CheckboxField
                      type="checkbox"
                      name="Science"
                      defaultChecked={data.fetchUserbyId.newsScience}
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-purple-800"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-900">
                        Science
                      </span>
                  </label>

                  <label className="relative mr-5 inline-flex cursor-pointer items-center">
                    <CheckboxField
                      type="checkbox"
                      name="Sports"
                      defaultChecked={data.fetchUserbyId.newsSports}
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-purple-800"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-900">
                        Sports
                      </span>
                  </label>

                  <label className="relative mr-5 inline-flex cursor-pointer items-center">
                    <CheckboxField
                      type="checkbox"
                      name="Technology"
                      defaultChecked={data.fetchUserbyId.newsTechnology}
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-purple-800"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-900">
                        Technology
                      </span>
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
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </Form>
    </>
  )
}

export default SettingsPage
