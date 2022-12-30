import { configureStore, combineReducers } from '@reduxjs/toolkit'
import workReducer, { WorkState } from '../features/works/workSlice'
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'

export interface AppStore{
    workEstado: WorkState
}

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    workEstado: workReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store