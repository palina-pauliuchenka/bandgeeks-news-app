import { useEffect, useState } from 'react'

const API_KEY = process.env.API_KEY;
const PoliticalNews = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    // fetching data from newsapi
    const fetchArticles = async () => {
      const url =
        'https://newsapi.org/v2/everything?' +
        'q=political&' +
        'apiKey=' + API_KEY; // api key

      try {
        // fetching articles from api and converting to json
        const response = await fetch(url)
        const json = await response.json()
        const articlesWithImage = json.articles.filter(
          (article) => article.urlToImage
        ) // Filter articles with image
        setArticles(articlesWithImage.slice(0, 5)) // Limiting to the first 5 articles with image
      } catch (error) {
        console.error('Error fetching articles:', error)
      }
    }

    fetchArticles()
  }, [])

  return (
    <>
      <h2 className={'py-12 text-2xl font-thin italic text-gray-900'}>
        Politics Worldwide &#8212;
      </h2>
      <div className={'grid grid-cols-3 gap-8'}>
        {articles.map((article, index) => (
          <article
            key={index}
            className={'flex h-96 flex-col justify-end bg-cover p-6'}
            style={{
              backgroundImage: `linear-gradient(to top, black, transparent), url(${article.urlToImage})`,
            }}
          >
            <div className={'flex h-full flex-col justify-end'}>
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
      </div>
    </>
  )
}

export default PoliticalNews
