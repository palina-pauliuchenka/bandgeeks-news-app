import { appView } from 'src/pages/BubblesPage/view'

function Model() {
  console.log('hello')
  let myView = appView,
    self = this

  self.init = function (view) {
    myView = view
    self.settings = {
      links: {
        main: `
          <div id="main" class="relative flex h-screen items-center justify-center bg-[url('https://e1.pxfuel.com/desktop-wallpaper/935/134/desktop-wallpaper-jelly-fish-fields-spongebob-flower-sky-background.jpg')] bg-cover bg-center">
            <ul class="text-center text-6xl leading-loose text-amber-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-rubik">
              <li>
                <a class="transition delay-100 ease-in-out hover:text-amber-600" href="#game">Play</a>
              </li>
              <li>
                <a class="transition delay-100 ease-in-out hover:text-amber-600" href="#results">Results</a>
              </li>
              <li>
                <a class="transition delay-100 ease-in-out hover:text-amber-600" href="#rules">Rules</a>
              </li>
            </ul>

            <footer class="absolute bottom-5 font-mono text-sm text-amber-200">Developed and Designed by Palina & Joey.</footer>
          </div>
        `,
        game: `
          <div id="game" class="relative flex h-screen items-center justify-center bg-[url('https://e1.pxfuel.com/desktop-wallpaper/935/134/desktop-wallpaper-jelly-fish-fields-spongebob-flower-sky-background.jpg')] bg-cover bg-center">
            <ul class="absolute left-5 top-5 text-left text-2xl font-black tracking-widest text-amber-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              <li>
                <a class="transition delay-100 ease-in-out hover:text-amber-600" href="#"> New Game </a>
              </li>
              <li>
                <a class="transition delay-100 ease-in-out hover:text-amber-600" href="#"> Get a Hint </a>
              </li>
              <li>
                <a class="transition delay-100 ease-in-out hover:text-amber-600" href="#"> Show Solution </a>
              </li>
              <li>
                <a class="transition delay-100 ease-in-out text-red-600 hover:text-red-900 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]" href="#main"> Exit</a>
              </li>
            </ul>
            <ul class="absolute right-5 top-5 text-right text-2xl font-black tracking-widest text-blue-600 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
              <li>
                <a class="transition delay-100 ease-in-out hover:text-blue-900" href="#attempts"> Attempts Left: <span id="attempts">5</span> </a>
              </li>
              <li>
                <a class="transition delay-100 ease-in-out hover:text-blue-900" href="#score"> Score: <span id="score">120</span> </a>
              </li>
            </ul>

            <div class="flex font-rubik">
              <div id="wrapper"><canvas id="canvas"></canvas></div>
            </div>
          </div>
        `,
        results: `
        <div id="results">
          <div class="relative h-screen bg-[url('https://e1.pxfuel.com/desktop-wallpaper/935/134/desktop-wallpaper-jelly-fish-fields-spongebob-flower-sky-background.jpg')] bg-cover bg-center">

          <nav class="max-w-sm mx-auto py-12">
            <ul class="flex justify-between text-3xl text-yellow-500 tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-rubik">
              <li><a class="hover:text-amber-700 transition delay-100 ease-in-out" href="#main">Home</a></li>
              <li><a class="hover:text-amber-700 transition delay-100 ease-in-out" href="#game">Play</a></li>
              <li><a class="hover:text-amber-700 transition delay-100 ease-in-out" href="#rules">Rules</a></li>
            </ul>
          </nav>
            <div id="scoreTable"></div>
          </div>
        </div>
        `,
        rules: `
        <div id="rules" class="relative h-screen  bg-[url('https://e1.pxfuel.com/desktop-wallpaper/935/134/desktop-wallpaper-jelly-fish-fields-spongebob-flower-sky-background.jpg')] bg-cover bg-center">
          <nav class="max-w-sm mx-auto py-12">
            <ul class="flex justify-between text-3xl text-yellow-500 tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-rubik">
              <li><a class="hover:text-amber-700 transition delay-100 ease-in-out" href="#main">Home</a></li>
              <li>
                <a class="transition delay-100 ease-in-out hover:text-amber-600" href="#game">Play</a>
              </li>
              <li><a class="hover:text-amber-700 transition delay-100 ease-in-out" href="#results">Results</a></li>
            </ul>
          </nav>

          <div class="max-w-3xl mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit voluptates odio sunt officiis facilis eveniet. Debitis adipisci id hic ducimus incidunt pariatur neque nulla eum dolor, dignissimos nemo, excepturi est.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos totam iure quisquam quaerat laborum, ad amet doloribus. Non ad voluptatum esse modi quam porro nobis sint quae eaque labore!
            Molestiae ut praesentium, eum sed deleniti totam error ab deserunt accusamus veritatis dolorum fugiat! Reprehenderit dolore temporibus rerum nobis nam laudantium, quaerat ut veniam quos molestiae. Non delectus nam illo!
            Debitis reiciendis quas inventore? A sunt in nemo ullam quam at alias ipsa praesentium labore pariatur, ducimus perspiciatis blanditiis numquam nam voluptates assumenda obcaecati voluptatum natus quo aperiam. Beatae, iste?
            Recusandae labore aspernatur ab quasi a eaque, temporibus amet iure aperiam, officia reiciendis, eveniet soluta laboriosam? In illum deleniti error, nihil nobis molestiae ducimus dolores obcaecati debitis, nostrum labore sed.
          </div>

        </div>
        `,
      },
      canvasWidth: null,
      canvasHeight: null,
      score: 0,
      playerScore: null,
      resultData: [],
    }

    myView.updateState(
      self.settings.links.main,
      self.settings.links,
      self.settings.canvasWidth,
      self.settings.canvasHeight
    )
  }
}

export const appModel = new Model()
