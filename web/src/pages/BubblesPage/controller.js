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
