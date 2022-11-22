import { configureStore } from '@reduxjs/toolkit'
import workReducer from '../features/works/workSlice'
import { Work } from '../models'


export interface AppStore{
    works: Work[]
}

const store = configureStore<AppStore>({
    reducer: {
        works: workReducer
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store