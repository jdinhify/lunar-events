import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import storeConfig from 'config/store'
import apolloClient from './config/apollo'

import App from 'App'
import './index.css'

const store = storeConfig()

ReactDOM.render(
    <ApolloProvider store={store} client={apolloClient}>
        <App />
    </ApolloProvider>,
  document.getElementById('root')
)
