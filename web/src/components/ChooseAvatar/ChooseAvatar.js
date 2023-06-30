const ChooseAvatar = () => {
  return (
    <div className="mt-10">
      <div className="">
        <label
          htmlFor="photo"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
        >
          Choose Avatar
        </label>
        <div className="mt-5 flex">
          <div
            className={
              'grid grid-cols-4 gap-8 sm:grid-cols-5 sm:gap-x-24 sm:gap-y-12 md:grid-cols-7'
            }
          >
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
        </div>
      </div>
    </div>
  )
}

export default ChooseAvatar
