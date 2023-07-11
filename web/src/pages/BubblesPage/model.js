import { appView } from 'src/pages/BubblesPage/view'

import data from './data.json'

function Model() {
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

            <footer class="absolute bottom-5 font-mono text-sm text-amber-200">Developed and Designed by Palina.</footer>
          </div>
        `,
        game: `
          <div id="game" class="relative flex h-screen items-center justify-center bg-[url('https://e1.pxfuel.com/desktop-wallpaper/935/134/desktop-wallpaper-jelly-fish-fields-spongebob-flower-sky-background.jpg')] bg-cover bg-center">
          <!--     START - NO MORE HINTS - MESSAGE     -->
          <div id="noMoreHintsMessage" class="absolute top-5 left-1/2 transform -translate-x-1/2" style="display: none">
            <div class="flex items-center p-4 mb-4 text-sm text-yellow-300 rounded-lg bg-yellow-900" role="alert">
              <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
              </svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium">Ooops!</span> Looks like you ran out of hints. You have used all 3 hints.
              </div>
            </div>
          </div>
          <!--     END - NO MORE HINTS - MESSAGE     -->

            <ul class="absolute left-5 top-5 text-left text-2xl font-black tracking-widest text-amber-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              <li>
                <button class="transition delay-100 ease-in-out hover:text-amber-600 tracking-widest" onclick="location.reload()"> New Game </button>
              </li>
              <li>
                <button class="transition delay-100 ease-in-out hover:text-amber-600 tracking-widest" id="getHintButton"> Get a Hint </button>
              </li>
              <li>
                <button class="transition delay-100 ease-in-out hover:text-amber-600" id="showSolutionButton"> Show Solution </button>
              </li>
              <li>
                <a class="transition delay-100 ease-in-out text-red-600 hover:text-red-900 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]" href="/bubbles"> Exit</a>
              </li>
            </ul>
            <ul class="absolute right-5 top-5 text-right text-2xl font-black tracking-widest text-blue-600 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
              <li>
                <span class="transition delay-100 ease-in-out"> Wrong Attempts Left: <span id="attempts">0</span> </span>
              </li>
              <li>
                <span class="transition delay-100 ease-in-out"> Score: <span id="score">0</span></span>
              </li>
            </ul>
              <div class="flex">
                <div id="wrapper"><canvas id="canvas"></canvas></div>
              </div>
              <div id="bubbleContainer"></div>
              <div id="answer" class="flex flex-col justify-center items-center font-rubik text-4xl"></div>
              <div class="keyboard absolute bottom-6">
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

          <!--     MODAL     -->
          <div id="setGameMode" class="relative mx-auto">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-10 overflow-y-auto">
            <!--     NO CATEGORY IS SET - WARNING MESSAGE     -->
            <div id="setGameModeError" class="absolute top-5 left-1/2 transform -translate-x-1/2">
              <div class="flex items-center p-4 mb-4 text-sm text-yellow-300 rounded-lg bg-yellow-900" role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="sr-only">Info</span>
                <div>
                  <span class="font-medium">Warning alert!</span> A category must be selected to start a game.
                </div>
              </div>
            </div>

            <!--     CATEGORY MODAL     -->
              <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <form id="setGameModeForm" class="relative transform overflow-hidden rounded-lg border bg-[rgba(255,255,255,0.2)] text-left shadow-xl transition-all sm:my-8">
                  <div class="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div class="mx-auto mb-8 text-center sm:mt-0">
                        <h3 class="font-rubik mb-12 mt-8 text-3xl font-semibold leading-6 text-gray-900">Set the Game Mode</h3>
                        <div class="setGameMode grid grid-cols-2 gap-8 capitalize text-gray-900">
                          <div class="col-span-2">
                            <input type="radio" id="preference_any" name="preference" value="any" />
                            <label for="preference_any" class="w-48 text-center" >All</label>
                          </div>
                          <div>
                            <input type="radio" id="preference_character" name="preference" value="character" />
                            <label for="preference_character" class="w-48 text-center">Character</label>
                          </div>
                          <div>
                            <input type="radio" id="preference_location" name="preference" value="location" />
                            <label for="preference_location" class="w-48 text-center">Location</label>
                          </div>
                          <div>
                            <input type="radio" id="preference_enemies" name="preference" value="enemies" />
                            <label for="preference_enemies" class="w-48 text-center">enemies</label>
                          </div>
                          <div>
                            <input type="radio" id="preference_animals" name="preference" value="animals" />
                            <label for="preference_animals" class="w-48 text-center">animals</label>
                          </div>
                          <div>
                            <input type="radio" id="preference_creatures" name="preference" value="creatures" />
                            <label for="preference_creatures" class="w-48 text-center">creatures</label>
                          </div>
                          <div>
                            <input type="radio" id="preference_objects" name="preference" value="objects" />
                            <label for="preference_objects" class="w-48 text-center">objects</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-[rgba(255,255,255,0.2)] px-4 py-3 sm:px-6">
                    <div class="mx-auto w-52 justify-around sm:flex">
                      <button id="modalStartButton" type="button" class="inline-flex w-full justify-center rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 sm:mr-3 sm:w-auto">Start</button>
                      <a href="/bubbles" id="modalExitButton" type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:mr-3 sm:w-auto">Exit</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        `,
        results: `
        <div id="results">
          <div class="relative h-screen bg-[url('https://e1.pxfuel.com/desktop-wallpaper/935/134/desktop-wallpaper-jelly-fish-fields-spongebob-flower-sky-background.jpg')] bg-cover bg-center">

          <nav class="max-w-sm mx-auto py-12">
            <ul class="flex justify-between text-3xl text-yellow-500 tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-rubik">
              <li><a class="hover:text-amber-700 transition delay-100 ease-in-out" href="/bubbles">Home</a></li>
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
              <li><a class="hover:text-amber-700 transition delay-100 ease-in-out" href="/bubbles">Home</a></li>
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
        selectedCategories: [],
      },
      canvasWidth: null,
      canvasHeight: null,
      attempts: 7,
      counter: 0,
      score: 0,
      wrongLetterDisplayed: false,
      playerScore: null,
      resultData: [],
    }
  }

  self.updateState = function () {
    let content = self.settings.links[window.location.hash.slice(1)]
    myView.updateState(
      content,
      self.settings.links,
      self.settings.canvasWidth,
      self.settings.canvasHeight
    )

    if (content === self.settings.links.game) {
      myView.gameModal()
    }
  }

  self.getWordCategory = function () {
    console.log('word category')
  }

  // receiving
  self.setGameMode = function (callback) {
    const modalStartButton = document.getElementById('modalStartButton')
    const setGameModeError = document.getElementById('setGameModeError')
    setGameModeError.style.display = 'none'

    modalStartButton.addEventListener('click', () => {
      const radio = document.querySelectorAll("input[type='radio']")
      let selectedRadio = null
      let isCategorySelected = false

      // Iterate over the radio buttons and check if any is selected
      radio.forEach(function (r) {
        if (r.checked) {
          selectedRadio = r.value
          isCategorySelected = true
        }
      })

      if (!isCategorySelected) {
        // No category is selected, display modal or error message
        setGameModeError.style.display = 'block'
        return
      }

      // A category is selected, hide the modal and proceed
      document.getElementById('setGameMode').style.display = 'none'

      // Print the selected category value
      console.log(`setGameMode: ${selectedRadio}`)
      callback(selectedRadio)
    })
  }

  self.generateWord = function (category) {
    if (category === 'any') {
      const categories = Object.keys(data.wordList)
      const randomCategory =
        categories[Math.floor(Math.random() * categories.length)]
      const words = data.wordList[randomCategory]
      if (words) {
        const randomIndex = Math.floor(Math.random() * words.length)
        return words[randomIndex]
      } else {
        return 'No words in the selected category'
      }
    } else {
      const words = data.wordList[category]
      if (words) {
        const randomIndex = Math.floor(Math.random() * words.length)
        return words[randomIndex]
      } else {
        return 'Invalid category'
      }
    }
  }

  self.displayHint = function (word, ans) {
    let getHintButton = document.getElementById('getHintButton')
    let letters = word.split('') // Split the word into an array of letters
    let bubbleCount = 0
    let usedLetters = [] // Keep track of used letters

    let noMoreHintsMessage = document.getElementById('noMoreHintsMessage')
    noMoreHintsMessage.style.display = 'none'

    getHintButton.addEventListener('click', (event) => {
      event.preventDefault()

      if (bubbleCount < 3 && letters.length > 0) {
        let randomIndex = Math.floor(Math.random() * letters.length)
        let letter = letters[randomIndex]

        // Check if the letter includes a space, period, or apostrophe, or if it has already been used
        if (!/[ .'’]/.test(letter) && !usedLetters.includes(letter)) {
          console.log(letter)

          let hintBubble = document.createElement('div')
          hintBubble.classList.add('greenBubble', 'absolute')
          hintBubble.innerText = letter

          // Generate random position for the hint bubble
          const positionX = Math.random() * (window.innerWidth * 0.2)
          const positionY = Math.random() * (window.innerHeight * 0.8)

          // Set the position of the hint bubble
          hintBubble.style.left = positionX + 'px'
          hintBubble.style.top = positionY + 'px'

          // Append the hint bubble to the answer div
          ans.appendChild(hintBubble)

          // Remove the selected letter from the array
          letters.splice(randomIndex, 1)

          // Add the letter to the used letters array
          usedLetters.push(letter)

          bubbleCount++
        }
      } else {
        noMoreHintsMessage.style.display = 'block'

        setTimeout(() => {
          noMoreHintsMessage.style.display = 'none'
        }, 5000)

        console.log('No more bubbles to generate.')
      }
    })
  }

  self.displaySolution = function () {
    // Get all the blue bubbles
    const blueBubbles = document.getElementsByClassName('blueBubble')

    // Iterate over the blue bubbles
    for (let i = 0; i < blueBubbles.length; i++) {
      blueBubbles[i].innerText = blueBubbles[i].getAttribute('data-letter')
    }
  }

  self.revealLetter = function (blueBubbles, pressedKey) {
    let revealed = false

    // Check if the corresponding blue bubble has already been revealed
    for (let i = 0; i < blueBubbles.length; i++) {
      const bubble = blueBubbles[i]
      const bubbleLetter = bubble.getAttribute('data-letter')

      if (bubbleLetter === pressedKey && bubble.innerText === bubbleLetter) {
        revealed = true
        break
      }
    }

    // If the blue bubble hasn't been revealed, reveal it and update the score
    if (!revealed) {
      for (let i = 0; i < blueBubbles.length; i++) {
        const bubble = blueBubbles[i]
        const bubbleLetter = bubble.getAttribute('data-letter')

        if (bubbleLetter === pressedKey) {
          // Update the content of the blue bubble with the revealed letter
          bubble.innerText = bubbleLetter
          self.settings.score += 10
          revealed = true
        }
      }
    }

    // Display the wrong guessed letter only if it hasn't been displayed before
    if (!revealed && !self.wrongLetterDisplayed) {
      myView.displayWrongGuessedLetter(pressedKey)
      self.wrongLetterDisplayed = true
    }
    if (self.wrongLetterDisplayed) {
      self.settings.score -= 5
      self.decreaseAttempts()
    }

    myView.displayScore()
  }

  self.decreaseAttempts = function () {
    let attempts = document.getElementById('attempts')
    let attemptsCount = parseInt(attempts.innerText) // Get the current attempts count

    // Update the attempts count
    attemptsCount -= 1
    attemptsCount = Math.max(0, attemptsCount)
    attempts.innerText = attemptsCount

    // Check if the user has run out of attempts
    if (attemptsCount === 0) {
      self.displaySolution()
    }
  }
}

export const appModel = new Model()
