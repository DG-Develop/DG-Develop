import { configureStore, combineReducers, Reducer, AnyAction } from '@reduxjs/toolkit'
import workReducer, { WorkState } from '../features/works/workSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export interface AppStore {
    workEstado: WorkState
}

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers<AppStore>({
    workEstado: workReducer,
})

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    if (action.type === 'works/chooseWork') {
        // this applies to all keys defined in persistConfig(s)
        storage.removeItem('persist:root')

        state = {} as RootState
    }
    return reducer(state, action)
}

const persistedReducer = persistReducer<AppStore>(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store