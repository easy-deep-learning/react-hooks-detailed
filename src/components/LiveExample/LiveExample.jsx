import React from 'react'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live'

function LiveExample (props) {
  return (
      <LiveProvider code={props.code}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
  )
}

export default LiveExample
