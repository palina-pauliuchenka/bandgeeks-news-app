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
    }
  }
}

export const appView = new View()
