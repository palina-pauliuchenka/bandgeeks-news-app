export default () => (
  <main className={''}>
    <style
      dangerouslySetInnerHTML={{
        __html: `
            `,
      }}
    />

    <section
      className={
        'flex h-screen flex-col items-center justify-around sm:flex-row'
      }
    >
      <div>
        <h1 className={'pb-2 text-center text-8xl font-bold'}>404</h1>
        <p className={'pb-8 text-center font-mono text-xs'}>
          Ooopsie Pebadidaboodie boo
        </p>
        <img
          width={'300'}
          src="https://media.tenor.com/XIJPpDD7Bc0AAAAM/squidward-squidward-shocked.gif"
          alt=""
        />
      </div>
      <iframe
        width="460"
        height="615"
        src="https://www.youtube.com/embed/3yGk6pNl6lA"
        // style={{ border: '35px outset brown' }}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </section>
  </main>
)
