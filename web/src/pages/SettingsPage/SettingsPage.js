import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation, useQuery} from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import { Form, useForm, useFormContext, CheckboxField } from '@redwoodjs/forms'
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
// Holy Fuckles It's Knuckles, the amount of mental hoops I have to jump through just to understand this GQL syntax
const SettingsPage = () => {
  const [create] = useMutation(EDITUSER)
  const { isAuthenticated, currentUser, logOut } = useAuth()

  const runQuery = (event) => {
    var counter = 0
    for(var x in event){
      if(event[x] == true) counter=counter+1;
    }
    console.log(event, counter)
    if (counter == 0){
      return false
    }
    create({
      variables: {
        General:     event['General'],
        Business: event['Business'],
        Entertainment : event['Entertainment'],
        Health: event['Health'],
        Science: event['Science'],
        Sports: event['Sports'],
        Technology: event['Technology'],
        Username: currentUser.id
      }
    })//*/
    window.location.href=routes.home()
    return true
  }

  return (
    <>
      <MetaTags title="Settings" description="Settings page" />

      <Form
        action={routes.home()}
        onSubmit={runQuery}
        className={'mx-auto max-w-4xl py-24'}
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

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Choose Avatar
                </label>
                <div className="mt-5 flex items-center gap-x-3">
                  <div className={'flex justify-between'}>
                    <button
                      className={
                        'mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white'
                      }
                    >
                      <i className="fa-regular fa-circle-user text-2xl"></i>
                    </button>
                    <button
                      className={
                        'mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white'
                      }
                    >
                      <i className="fa-xl fa-solid fa-hippo"></i>
                    </button>
                    <button
                      className={
                        'mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white'
                      }
                    >
                      <i className="fa-xl fa-solid fa-fish"></i>
                    </button>
                    <button
                      className={
                        'mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white'
                      }
                    >
                      <i className="fa-xl fa-solid fa-dragon"></i>
                    </button>
                    <button
                      className={
                        'mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white'
                      }
                    >
                      <i className="fa-xl fa-solid fa-otter"></i>
                    </button>
                    <button
                      className={
                        'mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white'
                      }
                    >
                      <i className="fa-xl fa-solid fa-kiwi-bird"></i>
                    </button>
                    <button
                      className={
                        'mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white'
                      }
                    >
                      <i className="fa-xl fa-solid fa-worm"></i>
                    </button>
                    <button
                      className={
                        'mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white'
                      }
                    >
                      <i className="fa-xl fa-solid fa-spider"></i>
                    </button>
                    <button
                      className={
                        'mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white'
                      }
                    >
                      <i className="fa-xl fa-solid fa-shrimp"></i>
                    </button>
                    <button
                      className={
                        'mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white'
                      }
                    >
                      <i className="fa-xl fa-solid fa-paw"></i>
                    </button>
                    <button
                      className={
                        'mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white'
                      }
                    >
                      <i className="fa-xl fa-solid fa-dove"></i>
                    </button>
                    <button
                      className={
                        'mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white'
                      }
                    >
                      <i className="fa-xl fa-solid fa-dog"></i>
                    </button>
                    <button
                      className={
                        'mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white'
                      }
                    >
                      <i className="fa-xl fa-solid fa-crow"></i>
                    </button>
                    <button
                      className={
                        'mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white'
                      }
                    >
                      <i className="fa-xl fa-solid fa-cat"></i>
                    </button>
                  </div>

                  {/*<button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>*/}
                </div>
              </div>
            </div>
          </div>

          <div className="border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Set-up Your news preferences
                </label>
                <div className="mt-5 flex items-center gap-x-3">
                  <div className="flex flex-col gap-y-4">
                    <label className="relative mr-5 inline-flex cursor-pointer items-center">
                      <CheckboxField
                        type="checkbox"

                        name="General"
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
