import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'


const MemePage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <MetaTags title="Meme" description="Meme page" />

      <header>
        {currentUser && (
          <div>
            Welcome, {currentUser.name}!
            <button onClick={logOut}>Logout</button>
          </div>
        )}
      </header>

      {/*<main className="relative h-[calc(100vh-100px)] w-full">*/}
      {/*  <div className="absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">*/}
      {/*    <figure className="snip1113 red font-gruppo shadow-lg block p-6">*/}
      {/*      <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/08/Animal-Crossing-New-Horizons-Spongebob-Squarepants-Band-Geeks.jpg" alt="band geeks" />*/}
      {/*      <figcaption>*/}
      {/*        <h3 className="tracking-widest">Band <span>Geeks</span></h3>*/}
      {/*        <h4>*/}
      {/*          Team*/}
      {/*        </h4>*/}
      {/*      </figcaption>*/}
      {/*    </figure>*/}
      {/*  </div>*/}
      {/*</main>*/}

      <section className="px-12 mx-auto">
        <div className="lg:columns-3 columns-1 gap-8">
          <img className="my-8 aspect-video" src="https://d.newsweek.com/en/full/1404673/spongebob-meme-toys-nickelodeon-figures-where-buy-mocking-spongebob-toy-amazon.jpg"/>
          <img className="my-8 aspect-square" src="https://images.ctfassets.net/iyiurthvosft/featured-img-of-post-rv-15623/8343edf0c81f179bd5b132ab19dc61e7/featured-img-of-post-rv-15623.png?fm=jpg&fl=progressive&q=50&w=1200" />
          <img className="my-8 aspect-square" src="https://www.digitalmomblog.com/wp-content/uploads/2023/01/spongebob-singing-meme.jpg.webp" />
          <img className="my-8 aspect-video" src="https://st1.latestly.com/wp-content/uploads/2018/11/sponge-bob-sqaure-pants-memes-781x441.jpg"/>
          <img className="my-8 aspect-video" src="https://pleated-jeans.com/wp-content/uploads/2023/03/spongebob-memes-2.jpg"/>
          <img className="my-8 aspect-square" src="https://cdn.vox-cdn.com/thumbor/ywwImRtZDaNCI6Hnwl6Bo5Z7j6I=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/63718716/spongebob_characters_wallpaper_thumb_1920_637740.0.jpg"/>
        </div>
      </section>
    </>
  )
}

export default MemePage
