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
        this.setGameMode((category) => {
          if (category) {
            this.displayBubbles(category)
          } else {
            console.log('No category selected.')
          }
        })
      }
    }
  }

  this.displayBubbles = function (category) {
    const word = myModel.generateWord(category)
    console.log(word)

    const ans = document.getElementById('answer')
    if (ans) {
      ans.innerHTML = '' // Clear previous content
      let lineDiv = document.createElement('div') // Create a div for each line
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
          bubble.setAttribute('data-letter', word[i]);
          lineDiv.appendChild(bubble) // Append the bubble to the line div
        }
      }

      // Generate hint bubble for each letter
      myModel.displayHint(word, ans)
      myModel.displaySolution()

      ans.appendChild(lineDiv) // Append the last line div to the answer div
    }
  }

  // displays game preferences modal window
  this.gameModal = function () {
    myViewContainer.getElementById('setGameMode').style.display = 'block'

    const startButton = document.getElementById('modalStartButton')
    startButton.addEventListener('click', function () {
      // close modal after setting preference for the game
      myViewContainer.getElementById('setGameMode').style.display = 'block'
    })
  }

  // receiving
  this.setGameMode = function (callback) {
    const modalStartButton = document.getElementById('modalStartButton')

    modalStartButton.addEventListener('click', () => {
      const radio = document.querySelectorAll("input[type='radio']")
      let selectedRadio = ''

      // Iterate over the checkboxes and check if they are selected
      radio.forEach(function (r) {
        if (r.checked) {
          selectedRadio = r.value
        }
      })

      document.getElementById('setGameMode').style.display = 'none'

      // Print the selected checkbox values
      console.log(`setGameMode: ${selectedRadio}`)
      callback(selectedRadio)
    })
  }


}

export const appView = new View()
