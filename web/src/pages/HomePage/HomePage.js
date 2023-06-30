import { useState, useEffect } from 'react'

import { Link, routes, useLocation } from '@redwoodjs/router'
import { MetaTags, useQuery } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import Search from 'src/components/Search'

const API_KEY = process.env.API_KEY

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

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

const HomePage = () => {
  const [articles, setArticles] = useState([])
  const [section, setState] = useState('')
  const [PageNUM, setPageNUM] = useState(1)
  const [activeCategory, setActiveCategory] = useState('')
  const { currentUser } = useAuth()
  const { data, loading } = useQuery(getusr, {
    variables: { id: currentUser == null ? -1 : currentUser.id },
  })

  const categories = [
    'general',
    'business',
    'entertainment',
    'technology',
    'sports',
    'health',
    'science',
  ]

  const { pathname } = useLocation()
  const activeRoute = window.localStorage.getItem('activeRoute') || pathname
  window.localStorage.setItem('activeRoute', activeRoute)

  if (currentUser != null && !loading && section === '') {
    let tmp = ''
    for (let x in data.fetchUserbyId) {
      if (data.fetchUserbyId[x] === true) {
        tmp = x.substring(4).toLocaleLowerCase()
      }
    }
    setState(tmp)
  }

  useEffect(() => {
    const getArticles = async () => {
      const getParam = new URL(window.location.href).searchParams.get('q')
      let url =
        getParam === '' || getParam == null
          ? `https://newsapi.org/v2/top-headlines?category=${encodeURIComponent(
              section
            )}&sortBy=publishedAt&country=us&page=${PageNUM}&apiKey=${API_KEY}`
          : `https://newsapi.org/v2/top-headlines?category=${encodeURIComponent(
              getParam
            )}&sortBy=publishedAt&page=${PageNUM}&apiKey=${API_KEY}`

      try {
        const response = await fetch(url)
        let json = await response.json()

        const filteredArticles = json.articles.filter(
          (article) =>
            article.urlToImage && !article.url.includes('youtube.com')
        )

        const slicedArticles = filteredArticles.slice(0, 12)
        setArticles(slicedArticles)
      } catch (error) {
        console.error('Error fetching articles:', error)
      }
    }

    if (section !== '') getArticles()
  }, [section, PageNUM])

  const formatDate = (timestamp) => {
    const dateObj = new Date(timestamp)
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }
    return dateObj.toLocaleString(undefined, options)
  }

  const next = () => {
    setPageNUM(PageNUM + 1)
  }

  const prev = () => {
    if (PageNUM > 1) {
      setPageNUM(PageNUM - 1)
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <>
      <MetaTags title="General" description="General page" />

      <div className={'relative mx-auto px-6 md:w-11/12 md:px-12'}>
        <div
          className={
            'mb-6 border-b-8 border-double border-gray-600 dark:border-white py-3 text-center text-gray-900'
          }
        >
          <nav className={''}>
            <ul
              className={
                'mx-auto text-xs sm:text-sm md:max-w-7xl md:px-12 lg:flex lg:items-center lg:justify-between  dark:text-white'
              }
            >
              <li
                className={`${
                  pathname === routes.home() && activeCategory === ''
                    ? 'my-1 inline-block rounded bg-purple-600 px-2 py-1 text-white'
                    : 'mx-3 my-1 inline-block'
                }`}
              >
                <Link
                  to={routes.home()}
                  onClick={() => {
                    setState('')
                    setActiveCategory('')
                  }}
                >
                  Home
                </Link>
              </li>
              {categories.map((category) => (
                <li
                  key={category}
                  className={`${
                    activeCategory === category
                      ? 'my-1 inline-block rounded bg-purple-600 px-2 py-1 text-white'
                      : 'mx-3 my-1 inline-block'
                  }`}
                >
                  <Link
                    onClick={() => {
                      setState(category)
                      setActiveCategory(category)
                    }}
                    className={'cursor-pointer'}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Link>
                </li>
              ))}
              <li>
                <Search />
              </li>
            </ul>
          </nav>
        </div>

        <div
          className={
            'columns-1 text-white sm:columns-2 lg:columns-3  2xl:columns-4'
          }
        >
          {articles.map((article, index) => {
            const aspectClass =
              Math.random() < 0.5 ? 'aspect-square' : 'aspect-video'

            return (
              <article
                key={index}
                className={`w-full ${aspectClass} mb-4 flex flex-col justify-end bg-black bg-cover p-6`}
                style={{
                  backgroundImage: `linear-gradient(to top, black, transparent), url(${article.urlToImage})`,
                }}
              >
                <div className={'flex h-full flex-col justify-end'}>
                  <p className={'font-gruppo text-sm'}>
                    {formatDate(article.publishedAt)}
                  </p>
                  <a
                    href={article.url}
                    target={'_blank'}
                    className={'hover:underline hover:underline-offset-4'}
                    rel="noreferrer"
                  >
                    <h2
                      className={
                        'font-playfair text-xs font-bold sm:text-base xl:text-xl'
                      }
                    >
                      {article.title}
                    </h2>
                  </a>
                </div>
              </article>
            )
          })}
        </div>
        <div className={'mt-6 flex w-full justify-between  dark:border-white '}>
          <button
            name="page"
            onClick={prev}
            className={'text-center'}
          >
            <i className="fa-solid fa-chevron-left mr-2"></i>
            Previous
          </button>
          <button
            name="page"
            onClick={next}
            className={'text-center'}
          >
            Next
            <i className="fa-solid fa-chevron-right ml-2"></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default HomePage
