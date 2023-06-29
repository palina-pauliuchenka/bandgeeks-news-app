import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import { useState, useEffect } from 'react';

const GeneralPage = () => {
  // Initialize state for storing articles fetched from the API
  const [articles, setArticles] = useState([]);
  const [PageNUM, setPageNUM] = useState(1);

  useEffect(() => {
    // fetching data from newsapi
    const fetchArticles = async () => {
      const url =
        'https://newsapi.org/v2/top-headlines?' + // looking for top news
        'country=us&' + '&pageSize=10&page=' + PageNUM +// country
        '&apiKey=f60f382f482740ce82b48fed910506d5'; // api key

      try {
        // fetching articles from api ande converting to json
        const response = await fetch(url);
        const json = await response.json();
        setArticles(json.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, [PageNUM]);

  // formating publishedAt to have only date
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
      <MetaTags title="General" description="General page" />
      <button
              onClick={prev}
              style={{color:'black', padding: 25, textAlign: 'center', margin: 'auto', right: '50px'}}
            >
              Previous
            </button>
            <button onClick={next} style={{color: 'black', padding: 25, textAlign: 'center', margin: 'auto', right: '100px'}}>
              Next
        </button>
      <div className={"p-12 text-gray-900 relative"}>
        {articles.map((article, index) => (
          <article key={index} className={"max-w-7xl mx-auto mt-6 p-6 grid md:grid-cols-2 grid-cols-1 gap-16"}>
            <div className={"my-auto"}>
              <p className={"text-sm text-gray-600 font-gruppo mb-3"}>{article.author} / {formatDate(article.publishedAt)}</p>
              <a href={article.url} target={"_blank"} className={"hover:underline hover:underline-offset-4"}>
                <h2 className={"lg:text-xl text-lg font-bold font-playfair"}>{article.title}</h2>
                <p className={"mt-3 lg:text-base text-sm tracking-wider font-thin"}>{article.description}</p>
              </a>
            </div>
            <div className={"md:border-l md:border-gray-500"}>
              <img src={article.urlToImage} alt="" className={"md:h-56 ml-auto"} />
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default GeneralPage;
