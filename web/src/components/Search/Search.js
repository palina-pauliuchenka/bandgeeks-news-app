import React from 'react'

const Search = () => {
  return (
    <form action="" className={'w-56 text-gray-600'}>
      <div className="relative flex shadow-sm">
        <input
          type="text"
          name="q"
          id="q"
          className="block border-0 bg-transparent px-2 py-1 text-sm text-gray-600 ring-1 ring-inset ring-gray-600 placeholder:text-gray-600 focus:ring-2 focus:ring-inset lg:w-full"
          placeholder="Search for articles ..."
        />

        <button
          type="submit"
          className="inline-flex justify-center border-l-0 px-3 py-2 font-mono text-sm font-semibold lowercase tracking-wider shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-800 sm:mt-0 sm:w-auto"
        >
          <i className="fa-solid fa-magnifying-glass rotate-90 text-gray-600"></i>
        </button>
      </div>
    </form>
  )
}

export default Search
