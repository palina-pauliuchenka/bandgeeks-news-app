function View() {
  let myViewContainer = null
  let settings = {
    canvas: null,
    context: null,
  }

  this.init = function (container) {
    myViewContainer = container
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
      const ans = document.getElementById('answer')
      if (ans == null) console.log('Answer is null!')
      else {
        let word = 'test'
        for (let w in word) {
          let x = document.createElement('span')
          x.classList.add(
            'mx-5',
            'flex',
            'h-24',
            'w-24',
            'items-center',
            'justify-center',
            'rounded-full',
            'border',
            'border-blue-300',
            'bg-gradient-to-t',
            'from-blue-300',
            'to-transparent',
            'text-4xl',
            'text-blue-900'
          )
          x.textContent = word[w]
          ans.appendChild(x)
        }
      }
    }
  }
}

export const appView = new View()
