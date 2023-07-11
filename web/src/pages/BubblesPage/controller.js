function Controller() {
  let myModel = null
  let myView = null
  let myControllerContainer = null
  let self = this

  this.init = function (model, view, container) {
    myModel = model
    myView = view
    myControllerContainer = container

    myView.init(myControllerContainer, myModel)

    window.addEventListener('hashchange', self.updateState)
    window.addEventListener('load', self.updateState)
    window.addEventListener('resize', self.resize)

    this.registerEventListeners() // Register event listeners in the controller
  }


  this.registerEventListeners = function () {
    window.addEventListener('keydown', function (event) {
      const pressedKey = event.key.toLowerCase()
      const keys = document.getElementsByClassName('key')
      const blueBubbles = document.getElementsByClassName('blueBubble')

      // Check if the pressed key is one of the virtual keyboard keys
      for (let i = 0; i < keys.length; i++) {
        if (keys[i].value === pressedKey) {
          myModel.revealLetter(blueBubbles, pressedKey)
          break
        }
      }
    })
  }

  this.updateState = function () {
    const hash = window.location.hash.slice(1)
    const content = myModel.settings.links[hash] || myModel.settings.links.main
    myView.updateState(
      content,
      myModel.settings.links,
      myModel.settings.canvasWidth,
      myModel.settings.canvasHeight
    )
  }
}

export const appController = new Controller()
