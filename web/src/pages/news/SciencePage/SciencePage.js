import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import {useEffect, useState} from "react";

const SciencePage = () => {

  const [articles, setArticles] = useState([]);
  const [PageNUM, setPageNUM] = useState(1);

  useEffect(() => {
    const fetchArticles = async () => {
      const url =
        'https://newsapi.org/v2/top-headlines?' +
        'country=us&category=science' + '&pageSize=10&page=' + PageNUM +
        '&apiKey=f60f382f482740ce82b48fed910506d5';

      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log('API response:', json);
        setArticles(json.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, [PageNUM]);

  const formatDate = (timestamp) => {
    const dateObj = new Date(timestamp);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return dateObj.toLocaleDateString(undefined, options);
  };

  const next = () => {
    setPageNUM(PageNUM + 1)
  };

  const prev = () => {
    if(PageNUM > 1){
      setPageNUM(PageNUM - 1);
    }
  }


  return (
    <>
      <MetaTags title="Science" description="Science page" />

      <div className="p-12 text-gray-900">
      <button
          name="page"
          onClick={prev}
          style={{color:'black', padding: 25}}
          >
          Previous
        </button>
        <button name="page" onClick={next} style={{color: 'black', padding: 25}}>
              Next
        </button>
        {articles.map((article, index) => (
          <article
            key={index}
            className="max-w-7xl mx-auto mt-6 p-6 grid md:grid-cols-2 grid-cols-1 gap-16"
          >
            <div className="my-auto">
              <p className="text-sm text-gray-600 font-gruppo mb-3">
                {article.author} / {formatDate(article.publishedAt)}
              </p>
              <a
                href={article.url}
                target="_blank"
                className="hover:underline hover:underline-offset-4"
              >
                <h2 className="lg:text-xl text-lg font-bold font-playfair">
                  {article.title}
                </h2>
                <p className="mt-3 lg:text-base text-sm tracking-wider font-thin">
                  {article.description}
                </p>
              </a>
            </div>
            <div className="md:border-l md:border-gray-500">
              <img
                src={article.urlToImage}
                alt=""
                className="md:h-56 ml-auto"
              />
            </div>
          </article>
        ))}
      </div>
    </>
  )
}

export default SciencePage
