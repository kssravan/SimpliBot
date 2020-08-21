import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { get } from 'lodash'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    saveRecordings: ['payload'],
    // add action here
})

export const RecorderReduxTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable([])

/* ------------- Reducers ------------- */

export const saveRecordings = (state, { payload }) => {
    return [...state, payload]
}
   


export const reducer = createReducer(INITIAL_STATE, {
    [Types.SAVE_RECORDINGS]: saveRecordings,
})
