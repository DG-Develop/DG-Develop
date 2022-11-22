import { createSlice } from '@reduxjs/toolkit'
import { Work } from '../../models'


const initialState: Work[] = [
    {
        id: 0,
        title: 'GenC',
        subtitle: 'Contract generator',
        imageTitle:'',
        listImage: []
    },
    {
        id: 1,
        title: 'Keradent',
        subtitle: 'Register of expedients',
        imageTitle:'',
        listImage: []
    },
    {
        id: 2,
        title: 'Baluarteck',
        subtitle: 'Mobile checker',
        imageTitle:'',
        listImage: []
    },
    {
        id: 3,
        title: 'Saintscript',
        subtitle: 'Register of information',
        imageTitle:'',
        listImage: []
    }
]

export const workSlice = createSlice({
    name: 'works',
    initialState,
    reducers:{

    }
})


export default workSlice.reducer