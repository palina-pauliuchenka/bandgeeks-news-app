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
      </main>
    </>
  )
}

export default HomePage
