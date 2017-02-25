import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import reducers from './reducers'

const isDevEnv = process.env.NODE_ENV === 'development'
let middleware = [ thunk ]

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
