import React from 'react'
import router from '@storeon/router'
import useStoreon from 'storeon/react'
import StoreContext from 'storeon/react/context'

import Sections from './routes/sections'
import Section from './routes/section'
import NotFound from './routes/NotFound'

import store from './store'

function App () {
  return (
      <div className="App">
        <StoreContext.Provider value={store}>
          <header className="App__header">
            Menu
          </header>
          <main className="App__content">

            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/sections/'>Sections</a></li>
            </ul>

            <Router />

          </main>
        </StoreContext.Provider>
      </div>
  )
}

function Router () {
  const { [router.key]: route } = useStoreon(router.key)

  switch (route.match.page) {
    case 'home':
      return <div>home</div>
    case 'sections':
      return <Sections />
    case 'section':
      return <Section id={route.match.id} />
    default:
      return <NotFound />
  }
}

export default App
