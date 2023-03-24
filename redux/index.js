import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './reducers/RootReducer'

const middleware = [thunk]
const composeEnhancers = compose(applyMiddleware(...middleware))


const store = createStore(RootReducer, composeEnhancers)


export default store;

