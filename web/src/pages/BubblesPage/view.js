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
        const word = myModel.generateWord()
        const ans = document.getElementById('answer')
        if (ans) {
          ans.innerHTML = '' // Clear previous content
          let guessedWord = '' // Store the guessed word
          let lineDiv = document.createElement('div') // Create a div for each line
          for (let i = 0; i < word.length; i++) {
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
                guessedWord += word[i] // Add the guessed letter to the guessed word
              }
              lineDiv.appendChild(bubble) // Append the bubble to the line div
            }
          }
          ans.appendChild(lineDiv) // Append the last line div to the answer div

          console.log('Guessed Word:', guessedWord) // Print the guessed word in the terminal
        }
      }
    }
  }
}

export const appView = new View()
