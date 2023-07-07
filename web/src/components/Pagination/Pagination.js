import React from 'react'

const Pagination = ({ totalPages, pageNUM, goToPage, prev, next }) => {
  const visiblePages = 5 // Number of visible page buttons
  const halfVisiblePages = Math.floor(visiblePages / 2)
  const startPage = Math.max(1, pageNUM - halfVisiblePages)
  const endPage = Math.min(totalPages, startPage + visiblePages - 1)

  const pageButtons = []
  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <button
        key={i}
        name="page"
        onClick={() => goToPage(i)}
        className={`${
          i === pageNUM
            ? 'mx-1 rounded-md bg-purple-600 px-3 py-2 text-white dark:text-gray-900'
            : 'mx-1 rounded-md px-3 py-2 text-purple-600 hover:bg-purple-100 dark:hover:bg-gray-800'
        }`}
      >
        {i}
      </button>
    )
  }

  const hasNextPage = pageNUM < totalPages

  return (
    <div className="mt-4 flex">
      <button
        name="page"
        onClick={() => goToPage(1)}
        className="mx-1 rounded-md px-3 py-2 text-purple-600 hover:bg-purple-100 dark:hover:bg-gray-800"
      >
        &lt;&lt;
      </button>
      <button
        name="page"
        onClick={prev}
        className="mx-1 rounded-md px-3 py-2 text-purple-600 hover:bg-purple-100 dark:hover:bg-gray-800"
      >
        &lt;
      </button>
      {pageButtons}
      {hasNextPage ? (
        <>
          <button
            name="page"
            onClick={next}
            className="mx-1 rounded-md px-3 py-2 text-purple-600 hover:bg-purple-100 dark:hover:bg-gray-800"
          >
            &gt;
          </button>
          <button
            name="page"
            onClick={() => goToPage(totalPages)}
            className="mx-1 rounded-md px-3 py-2 text-purple-600 hover:bg-purple-100 dark:hover:bg-gray-800"
          >
            &gt;&gt;
          </button>
        </>
      ) : (
        <>
          <button
            name="page"
            onClick={next}
            disabled={true}
            className="mx-1 rounded-md px-3 py-2 text-purple-300 hover:bg-purple-100 dark:hover:bg-gray-800"
          >
            &gt;
          </button>
          <button
            name="page"
            onClick={() => goToPage(totalPages)}
            disabled={true}
            className="mx-1 rounded-md px-3 py-2 text-purple-300 hover:bg-purple-100 dark:hover:bg-gray-800"
          >
            &gt;&gt;
          </button>
        </>
      )}
    </div>
  )
}

export default Pagination
