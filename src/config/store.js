import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'

import reducers from './reducers'
import apolloClient from './apollo'

const isDevEnv = process.env.NODE_ENV === 'development'
let middleware = [ apolloClient.middleware() ]

if (isDevEnv) {
  const logger = createLogger()
  middleware = [...middleware, logger]
}

const composeEnhancers = isDevEnv ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose

const storeConfig = preloadedState => createStore(
  reducers,
  preloadedState,
  composeEnhancers(applyMiddleware(...middleware))
)

export default storeConfig
