import { useEffect, useState } from 'react'

const Discussions = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    // fetching data from newsapi
    const fetchArticles = async () => {
      const url =
        'https://newsapi.org/v2/top-headlines?' + // looking for top news
        'country=us&' + // country
        'apiKey=09610701367a48349b3fe5d64c9f3d9b' // api key

      try {
        // fetching articles from api ande converting to json
        const response = await fetch(url)
        const json = await response.json()
        setArticles(json.articles)
      } catch (error) {
        console.error('Error fetching articles:', error)
      }
    }

    fetchArticles()
  }, [])

  return (
    <>
      {articles.map((article, index) => (
        <a
          href={article.url}
          key={index}
          className={'mt-4 block font-bold text-gray-900'}
        >
          <span className={'hover:underline hover:underline-offset-4'}>
            {article.title}
          </span>
          <span className={'ml-2 font-thin italic'}>
            &#8212; {article.author}
          </span>
        </a>
      ))}
    </>
  )
}

export default Discussions
