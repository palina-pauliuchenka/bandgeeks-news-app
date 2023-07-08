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

<!--            <footer class="absolute bottom-5 font-mono text-sm text-amber-200">Developed and Designed by Palina & Joey.</footer>-->
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
                <span class="transition delay-100 ease-in-out"> Attempts Left: <span id="attempts"></span> </span>
              </li>
              <li>
                <span class="transition delay-100 ease-in-out"> Score: <span id="score"></span></span>
              </li>
            </ul>
            <div id="answer"></div>
            <div class="flex">
              <div id="wrapper"><canvas id="canvas"></canvas></div>
            </div>
              <div class="keyboard absolute bottom-24">
                <div class="keys text-blue-900 bg-[#3b82f680] rounded px-3 py-2">
                  <div class="flex justify-center">
                    <button class="key" value="q">q</button>
                    <button class="key" value="w">w</button>
                    <button class="key" value="e">e</button>
                    <button class="key" value="r">r</button>
                    <button class="key" value="t">t</button>
                    <button class="key" value="y">y</button>
                    <button class="key" value="u">u</button>
                    <button class="key" value="i">i</button>
                    <button class="key" value="o">o</button>
                    <button class="key" value="p">p</button>
                  </div>

                  <div class="flex justify-center">
                    <button class="key" value="a">a</button>
                    <button class="key" value="s">s</button>
                    <button class="key" value="d">d</button>
                    <button class="key" value="f">f</button>
                    <button class="key" value="g">g</button>
                    <button class="key" value="h">h</button>
                    <button class="key" value="j">j</button>
                    <button class="key" value="k">k</button>
                    <button class="key" value="l">l</button>
                  </div>

                  <div class="flex justify-center">
                    <button class="key" value="z">z</button>
                    <button class="key" value="x">x</button>
                    <button class="key" value="c">c</button>
                    <button class="key" value="v">v</button>
                    <button class="key" value="b">b</button>
                    <button class="key" value="n">n</button>
                    <button class="key" value="m">m</button>
                  </div>
                </div>
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
          <nav class="max-w-sm mx-auto pt-12 pb-36">
            <ul class="flex justify-between text-3xl text-yellow-500 tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-rubik">
              <li><a class="hover:text-amber-700 transition delay-100 ease-in-out" href="#main">Home</a></li>
              <li>
                <a class="transition delay-100 ease-in-out hover:text-amber-600" href="#game">Play</a>
              </li>
              <li><a class="hover:text-amber-700 transition delay-100 ease-in-out" href="#results">Results</a></li>
            </ul>
          </nav>

          <div class="max-w-3xl mx-auto leading-8 bg-[rgba(255,255,255,0.3)] p-8 rounded text-gray-900">
            <p class="indent-10">These rules outline the basic gameplay mechanics and scoring system for the game you described. You can implement them in your code to create an interactive word-guessing game. Let me know if you need further assistance or have any additional questions!</p>
            <ol class="list-decimal list-inside ml-5">
              <li>The user is given a randomly generated word.</li>
              <li>Each letter of the word is represented as a blue bubble.</li>
              <li>The user can enter letters from the keyboard to guess the word.</li>
              <li>If the user enters a letter that exists in the generated word, the corresponding letter bubble will display the letter.</li>
              <li>If the user enters a wrong letter, a new red bubble will drop from the top of the screen.</li>
              <li>The user can request up to 3 hints.</li>
              <li>If the user requests a hint, a green bubble with a letter from the generated word will drop from the top.</li>
              <li>The user starts with a limited number of attempts to guess the word. If they run out of attempts, the game is over.</li>
              <li>When the user guesses a correct letter, they earn +10 points to the score.</li>
              <li>When the user guesses an incorrect letter, they lose -5 points from the score.</li>
              <li>The score will be saved into a database for future reference.</li>
            </ol>
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
