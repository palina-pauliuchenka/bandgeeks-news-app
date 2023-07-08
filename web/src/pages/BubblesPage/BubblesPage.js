import { useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { appController } from 'src/pages/BubblesPage/controller'
import { appModel } from 'src/pages/BubblesPage/model'
import { appView } from 'src/pages/BubblesPage/view'

const BubblesPage = () => {

  useEffect(() => {
    const container = document.getElementById('app')
    appView.init(container)
    appModel.init(appView)
    appController.init(appModel, appView, container)

  }, [])

  return (
    <>
      <MetaTags title="Bubbles" description="Bubbles page" />
      <div id="app"></div>
    </>
  )
}

export default BubblesPage
