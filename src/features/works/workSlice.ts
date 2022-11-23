import { createSlice } from '@reduxjs/toolkit'
import { Work } from '../../models'


const initialState: Work[] = [
    {
        id: 0,
        title: 'GenC',
        subtitle: 'Contract generator',
        imageTitle:'',
        listImage: [],
        mediaQuery: 'Desktop'
    },
    {
        id: 1,
        title: 'Keradent',
        subtitle: 'Register of expedients',
        imageTitle:'',
        listImage: [],
        mediaQuery: 'Desktop'
    },
    {
        id: 2,
        title: 'Baluarteck',
        subtitle: 'Mobile checker',
        imageTitle:'',
        listImage: [],
        mediaQuery: 'Mobile'
    },
    {
        id: 3,
        title: 'Saintscript',
        subtitle: 'Register of information',
        imageTitle:'',
        listImage: [],
        mediaQuery: 'Mobile'
    },
    {
        id: 4,
        title: 'No Name',
        subtitle: 'Register of information',
        imageTitle:'',
        listImage: [],
        mediaQuery: 'Desktop'
    }
]

export const workSlice = createSlice({
    name: 'works',
    initialState,
    reducers:{

    }
})


export default workSlice.reducer