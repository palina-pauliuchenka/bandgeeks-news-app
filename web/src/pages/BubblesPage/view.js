function View() {
  let myViewContainer = null
  let myModel = null
  let settings = {
    canvas: null,
    context: null,
  }

  this.init = function (container, model) {
    myViewContainer = container
    myModel = model
    settings = {
      canvas: null,
      context: null,
    }
  }

  this.updateState = function (content, links, width, height) {
    myViewContainer.innerHTML = content || links.main
    if (content === links.game) {
      settings.canvas = document.getElementById('canvas')
      settings.context = settings.canvas.getContext('2d')
      settings.context.canvas.width = width
      settings.context.canvas.height = height

      if (content === links.game) {
        myModel.setGameMode((category) => {
          if (category) {
            this.displayBubbles(category)
            this.displayWrongAttempts()
            this.displayKeyboard()
          } else {
            console.log('No category selected.')
          }
        })
      }
    }
  }

  this.displayBubbles = function (category) {
    const word = myModel.generateWord(category).toLowerCase()
    console.log(word)

    const ans = document.getElementById('answer')
    if (ans) {
      ans.innerHTML = '' // Clear previous content
      let lineDiv = document.createElement('div') // Create a div for each line
      let blueBubbles = [] // Store the blue bubbles in an array
      for (let i = 0; i < word.length; i++) {
        lineDiv.classList.add('flex')

        const bubble = document.createElement('span')
        if (word[i] === ' ') {
          ans.appendChild(lineDiv) // Append the line div to the answer div
          ans.appendChild(document.createElement('br')) // Add line break
          lineDiv = document.createElement('div') // Create a new line div for the next line
        } else {
          if (word[i] === "'" || word[i] === '.') {
            bubble.classList.add('blue')
          } else {
            bubble.classList.add('blueBubble')
          }
          bubble.setAttribute('data-letter', word[i])
          lineDiv.appendChild(bubble) // Append the bubble to the line div
          blueBubbles.push(bubble) // Add the bubble to the blueBubbles array
        }
      }

      const keys = document.getElementsByClassName('key')
      for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener('click', function () {
          const pressedKey = this.value
          myModel.revealLetter(blueBubbles, pressedKey)
        })
      }

      // Generate hint bubble for each letter
      myModel.displayHint(word, ans)
      this.displaySolutionButtonClick()

      ans.appendChild(lineDiv) // Append the last line div to the answer div
    }
  }

  // displays game preferences modal window
  this.gameModal = function () {
    myViewContainer.getElementById('setGameMode').style.display = 'block'
    const startButton = document.getElementById('modalStartButton')
    startButton.addEventListener('click', (event) => {
      event.preventDefault()
      // close modal after setting preference for the game
      myViewContainer.getElementById('setGameMode').style.display = 'block'
    })
  }

  this.displaySolutionButtonClick = function () {
    const showSolutionButton = document.getElementById('showSolutionButton')
    showSolutionButton.addEventListener('click', (event) => {
      event.preventDefault()
      myModel.displaySolution()
    })
  }

  this.displayScore = function () {
    let score = document.getElementById('score')
    score.innerText = myModel.settings.score
  }

  this.displayWrongAttempts = function () {
    let attempts = document.getElementById('attempts')
    attempts.innerText = myModel.settings.attempts
  }

  this.displayWrongGuessedLetter = function (letter) {
    let bubbleContainer = document.getElementById('bubbleContainer')
    let redBubble = document.createElement('div')
    let attempts = document.getElementById('attempts')
    let attemptsCount = parseInt(attempts.innerText) // Get the current attempts count

    // Update the attempts count
    attemptsCount--
    attemptsCount = Math.max(0, attemptsCount)
    attempts.innerText = attemptsCount

    myModel.settings.score -= 5

    redBubble.classList.add('redBubble', 'absolute')
    redBubble.innerText = letter // Set the letter inside the red bubble

    // Generate random position for the red bubble
    const positionX = Math.random() * (window.innerWidth * 0.9)
    const positionY = Math.random() * (window.innerHeight * 0.9)

    // Set the position of the red bubble
    redBubble.style.left = positionX + 'px'
    redBubble.style.top = positionY + 'px'

    // Append the red bubble to the bubble container
    bubbleContainer.appendChild(redBubble)
  }

  this.displayKeyboard = function () {
    let keyboard = document.getElementById('keyboard')


    let keyboardButton = document.getElementById('keyboardButton')

    keyboardButton.addEventListener('click', (event) => {
      event.preventDefault()
      if (keyboard.style.display === 'none') {
        keyboard.style.display = 'block';
      } else {
        keyboard.style.display = 'none';
      }
    })
  }
}

export const appView = new View()
