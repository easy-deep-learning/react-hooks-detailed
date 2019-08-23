import React from 'react'
import {
  LiveExample,
} from './components'

import './App.css'

function App () {
  return (
      <div className="App">
        <header className="App-header">
          <LiveExample code={`
            () => {
                    const [count] = React.useState(100)
                    return <div> State variable is {count}</div>
                  }`
          } />
        </header>
      </div>
  )
}

export default App
