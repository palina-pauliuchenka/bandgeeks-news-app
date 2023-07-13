import React from 'react'

import { Form, RadioField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const EDITAVATAR = gql`
  mutation EditUserMutation($General: String!, $Username: Int!) {
    updateUser(id: $Username, input: { icon: $General }) {
      icon
    }
  }
`

const ChooseAvatar = () => {
  const { currentUser } = useAuth()
  const [updateAvatar] = useMutation(EDITAVATAR)
  const updateIcon = (target, data) => {
    console.log(target['icon'], data)
    updateAvatar({
      variables: {
        General: target['icon'],
        Username: currentUser.id,
      },
    })
    navigate(routes.home())
    return true
  }

  return (
    <div className="mt-10">
      <Form
        onSubmit={updateIcon}
        action={routes.home()}
        className={'text-gray-900 mx-auto max-w-4xl px-6 dark:text-white'}
      >
        <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
          Profile Picture
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you
          share.
        </p>
        <p className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
          Choose Avatar
        </p>
        <div className="">
          <div className="mt-5 flex">
            <div className=" grid grid-cols-4 gap-8 sm:grid-cols-4 sm:gap-x-24 sm:gap-y-12 md:grid-cols-6">
              <div className="flex items-center">
                <RadioField
                  className="mr-1 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                  name="icon"
                  value="fa-circle-user"
                />
                {<i className="fa-regular fa-circle-user text-2xl "></i>}
              </div>
              <div className="flex items-center">
                <RadioField
                  className="mr-1 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                  name="icon"
                  value="fa-hippo"
                />
                {<i className="fa-xl fa-solid fa-hippo"></i>}
              </div>
              <div className="flex items-center">
                <RadioField
                  className="mr-1 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                  name="icon"
                  value="fa-fish"
                />
                {<i className="fa-xl fa-solid fa-fish"></i>}
              </div>
              <div className="flex items-center">
                <RadioField
                  className="mr-1 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                  name="icon"
                  value="fa-dragon"
                />
                {<i className="fa-xl fa-solid fa-dragon"></i>}
              </div>
              <div className="flex items-center">
                <RadioField
                  className="mr-1 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                  name="icon"
                  value="fa-otter"
                />
                {<i className="fa-xl fa-solid fa-otter"></i>}
              </div>
              <div className="flex items-center">
                <RadioField
                  className="mr-1 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                  name="icon"
                  value="fa-kiwi-bird"
                />
                {<i className="fa-xl fa-solid fa-kiwi-bird"></i>}
              </div>
              <div className="flex items-center">
                <RadioField
                  className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                  name="icon"
                  value="fa-worm"
                />
                {<i className="fa-xl fa-solid fa-worm"></i>}
              </div>
              <div className="flex items-center">
                <RadioField
                  className="mr-1 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                  name="icon"
                  value="fa-spider"
                />
                {<i className="fa-xl fa-solid fa-spider"></i>}
              </div>
              <div className="flex items-center">
                <RadioField
                  className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                  name="icon"
                  value="fa-shrimp"
                />
                {<i className="fa-xl fa-solid fa-shrimp"></i>}
              </div>
              <div className="flex items-center">
                <RadioField
                  className="mr-1 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                  name="icon"
                  value="fa-paw"
                />
                {<i className="fa-xl fa-solid fa-paw"></i>}
              </div>
              <div className="flex items-center">
                <RadioField
                  className="mr-1 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                  name="icon"
                  value="fa-dove"
                />
                {<i className="fa-xl fa-solid fa-dove"></i>}
              </div>
              <div className="flex items-center">
                <RadioField
                  className="mr-1 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                  name="icon"
                  value="fa-dog"
                />
                {<i className="fa-xl fa-solid fa-dog"></i>}
              </div>
              <div className="flex items-center">
                <RadioField
                  className="mr-1 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                  name="icon"
                  value="fa-crow"
                />
                {<i className="fa-xl fa-solid fa-crow"></i>}
              </div>
              <div className="flex items-center">
                <RadioField
                  className="mr-1 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                  name="icon"
                  value="fa-cat"
                />
                {<i className="fa-xl fa-solid fa-cat"></i>}
              </div>

              <div></div>
            </div>
          </div>
          <div className={'mt-6 flex items-center justify-end gap-x-6'}>
            <button
              type="submit"
              className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default ChooseAvatar

