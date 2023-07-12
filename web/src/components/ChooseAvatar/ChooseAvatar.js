import React from 'react'

import { Form, useForm, ButtonField, RadioField } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation, useQuery } from '@redwoodjs/web'

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
        className={'ext-gray-900 mx-auto max-w-4xl px-6 dark:text-white'}
      >
        <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
          Profile Picture
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you
          share.
        </p>
        <div className="">
          <label
            htmlFor="photo"
            className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
          >
            Choose Avatar
          </label>
          <div className="mt-5 flex">
            <div className="grid grid-cols-4 gap-8 sm:grid-cols-5 sm:gap-x-24 sm:gap-y-12 md:grid-cols-7">
              <RadioField
                className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                name="icon"
                value="fa-circle-user"
              />
              {<i className="fa-regular fa-circle-user text-2xl"></i>}

              <RadioField
                className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                name="icon"
                value="fa-hippo"
              />
              {<i className="fa-xl fa-solid fa-hippo"></i>}
              <RadioField
                className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                name="icon"
                value="fa-fish"
              />
              {<i className="fa-xl fa-solid fa-fish"></i>}
              <RadioField
                className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                name="icon"
                value="fa-dragon"
              />
              {<i className="fa-xl fa-solid fa-dragon"></i>}
              <RadioField
                className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                name="icon"
                value="fa-otter"
              />
              {<i className="fa-xl fa-solid fa-otter"></i>}
              <RadioField
                className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                name="icon"
                value="fa-kiwi-bird"
              />
              {<i className="fa-xl fa-solid fa-kiwi-bird"></i>}
              <RadioField
                className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                name="icon"
                value="fa-worm"
              />
              {<i className="fa-xl fa-solid fa-worm"></i>}
              <RadioField
                className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                name="icon"
                value="fa-spider"
              />
              {<i className="fa-xl fa-solid fa-spider"></i>}
              <RadioField
                className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                name="icon"
                value="fa-shrimp"
              />
              {<i className="fa-xl fa-solid fa-shrimp"></i>}
              <RadioField
                className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                name="icon"
                value="fa-paw"
              />
              {<i className="fa-xl fa-solid fa-paw"></i>}
              <RadioField
                className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                name="icon"
                value="fa-dove"
              />
              {<i className="fa-xl fa-solid fa-dove"></i>}
              <RadioField
                className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                name="icon"
                value="fa-dog"
              />
              {<i className="fa-xl fa-solid fa-dog"></i>}
              <RadioField
                className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                name="icon"
                value="fa-crow"
              />
              {<i className="fa-xl fa-solid fa-crow"></i>}
              <RadioField
                className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
                name="icon"
                value="fa-cat"
              />
              {<i className="fa-xl fa-solid fa-cat"></i>}
              <button
                type="submit"
                className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border hover:bg-purple-800 hover:text-white"
              />
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default ChooseAvatar
