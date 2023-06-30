const API_KEY = process.env.API_KEY
const getArticles = async ({ criteria }) => {
  const categories = [
    'general',
    'business',
    'entertainment',
    'technology',
    'sports',
    'health',
    'science',
  ]

  let articles = []
  let totalResults = 0

  if (categories.includes(criteria)) {
    // Get articles from the nav bar button category
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${criteria}&apiKey=${API_KEY}`
    )
    const json = await response.json()

    articles = json.articles.map((article) => ({
      ...article,
      category: criteria,
    }))
    totalResults = json.totalResults
  } else if (criteria.includes('/')) {
    // User settings with multiple categories
    const choices = criteria.split('/')
    choices.pop()

    for (let i = 0; i < choices.length; i++) {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${choices[i]}&apiKey=${API_KEY}`
      )
      const json = await response.json()

      if (Array.isArray(json.articles)) {
        const articlesWithCategory = json.articles.map((article) => ({
          ...article,
          category: choices[i],
        }))

        articles = [...articles, ...articlesWithCategory]
        totalResults += json.totalResults
      }
    }
  } else {
    // Search criteria
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${criteria}&apiKey=${API_KEY}`
    )
    const json = await response.json()

    articles = json.articles.map((article) => ({
      ...article,
      category: criteria,
    }))
    totalResults = json.totalResults
  }

  return {
    totalResults: totalResults,
    articles: articles,
  }
}

export default getArticles
