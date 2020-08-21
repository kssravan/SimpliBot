
import configureStore from './CreateStore'
import reducers from './Reducers'

export default () => {
    let { store} = configureStore(reducers)

    if (module.hot) {
        module.hot.accept(() => {

        })
    }

    return store
}
