import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main>
        <h2 className="text-center mt-12 text-3xl font-bold">Project Information</h2>
        <div className="flex justify-center">
          <p className="mt-12 leading-loose font-mono">
            The project is a personal news feed. <br/>
            The news app will have the following capabilities. <br/>

            <span className="pl-12 pr-3">-</span>Obtain recent new headlines from https://newsapi.org <br/>
            <span className="pl-12 pr-3">-</span>When no one is signed into the app, it will display articles from the “General” category <br/>
            <span className="pl-12 pr-3">-</span>When a user is signed into the app, it will display articles from categories chosen in the user’s settings <br/>
            <span className="pl-12 pr-3">-</span>There will be a page to sign up for the app <br/>
            <span className="pl-12 pr-3">-</span>There will be a page to sign into the app <br/>
            <span className="pl-12 pr-3">-</span>There will be a settings page for choosing new categories <br/>
            <span className="pl-12 pr-3">-</span>There will be a search for users to search for specific topics <br/>
          </p>
        </div>
      </main>
    </>
  )
}

export default HomePage
