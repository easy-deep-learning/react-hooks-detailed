import createStore from 'storeon'
import router from '@storeon/router'

const store = createStore([
  router.createRouter([
    ['/', () => ({ page: 'home' })],
    ['/sections', () => ({ page: 'sections' })],
    ['/section/*', (id) => ({ page: 'section', id })],
  ]),
  // process.env.NODE_ENV !== 'production' && require('storeon/devtools/logger'),
  process.env.NODE_ENV !== 'production' && require('storeon/devtools'),
])

export default store
