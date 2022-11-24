import { configureStore } from '@reduxjs/toolkit'
import workReducer, { WorkState } from '../features/works/workSlice'
export interface AppStore{
    workEstado: WorkState
}

const store = configureStore<AppStore>({
    reducer: {
        workEstado: workReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store