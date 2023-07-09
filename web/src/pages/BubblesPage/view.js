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
          for (let i = 0; i < word.length; i++) {
            const bubble = document.createElement('span')
            bubble.classList.add('blueBubble')
            bubble.textContent = word[i]
            ans.appendChild(bubble)
          }
        }
      }
    }
  }
}

export const appView = new View()
