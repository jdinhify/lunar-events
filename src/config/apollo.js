import ApolloClient, { createNetworkInterface } from 'apollo-client'

const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cizl72vhoe9dp0108gmmteigk' })

networkInterface.use([{
    applyMiddleware (req, next) {
        if (!req.options.headers) {
            req.options.headers = {}
        }

    // get the authentication token from local storage if it exists
        if (localStorage.getItem('graphcoolToken')) {
            req.options.headers.authorization = `Bearer ${localStorage.getItem('graphcoolToken')}`
        }
        next()
    }
}])

const client = new ApolloClient({
    networkInterface
})

export default client
