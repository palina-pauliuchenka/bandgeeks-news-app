import React from 'react'

const Search = () => {
  return (
    <form action="" className={'mx-auto w-full text-gray-600'}>
      <div className="relative m-1 rounded-md shadow-sm">
        <input
          type="text"
          name="search"
          id="search"
          className="block w-full rounded-md border-0 bg-transparent p-3 text-gray-600 ring-1 ring-inset ring-gray-600 placeholder:tracking-widest placeholder:text-gray-600 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          placeholder="Search for articles ..."
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="searchButton" className="sr-only"></label>
          <button
            id="searchButton"
            name="searchButton"
            className="mr-1.5 inline-flex w-full justify-center rounded-md px-3 py-2 font-mono text-sm font-semibold lowercase tracking-wider shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-gray-50 hover:text-gray-900 sm:mt-0 sm:w-auto"
          >
            <i className="fa-solid fa-magnifying-glass rotate-90 text-gray-600"></i>
          </button>
        </div>
      </div>
    </form>
  )
}

export default Search
