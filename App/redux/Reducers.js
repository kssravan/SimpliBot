import { combineReducers } from 'redux'

/* ------------- Assemble The Reducers ------------- */
export default combineReducers({
    recordings: require('./RecorderRedux').reducer,
})
