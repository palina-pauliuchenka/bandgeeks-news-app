import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main>

        <div className="relative w-full h-[calc(100vh-100px)]">
          <div className="absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <figure className="snip1113 red font-gruppo shadow-lg block p-6">
              <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/08/Animal-Crossing-New-Horizons-Spongebob-Squarepants-Band-Geeks.jpg" alt="band geeks" />
              <figcaption>
                <h3 className="tracking-widest">Band <span>Geeks</span></h3>
                <h4>
                  Team
                </h4>
              </figcaption>
            </figure>
          </div>
        </div>

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
