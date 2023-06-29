import React, { useEffect, useState } from 'react'

import 'slick-carousel/slick/slick'
import TopNewsSlider from 'src/components/TopNewsSlider'

const HomeTopNews = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    // fetching data from newsapi
    const fetchArticles = async () => {
      const url =
        'https://newsapi.org/v2/top-headlines?' + // looking for top news
        'country=us&' + // country
        'apiKey=f60f382f482740ce82b48fed910506d5' // api key

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

  // formating publishedAt to have only date
  const formatDate = (timestamp) => {
    const dateObj = new Date(timestamp)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return dateObj.toLocaleDateString(undefined, options)
  }

  return (
    <div className={'col-span-3'}>
      <TopNewsSlider>
        {articles.map((article, index) => (
          <article
            key={index}
            className={'flex h-96 flex-col justify-end bg-cover p-6'}
            style={{
              backgroundImage: `linear-gradient(to top, black, transparent), url(${article.urlToImage})`,
            }}
          >
            <div className={'flex h-full flex-col justify-end'}>
              <p className={'mb-3 font-gruppo text-sm'}>
                {formatDate(article.publishedAt)}
              </p>
              <a
                href={article.url}
                target={'_blank'}
                className={'hover:underline hover:underline-offset-4'}
                rel="noreferrer"
              >
                <h2 className={'font-playfair text-lg font-bold lg:text-xl'}>
                  {article.title}
                </h2>
              </a>
            </div>
          </article>
        ))}
      </TopNewsSlider>
    </div>
  )
}

export default HomeTopNews
