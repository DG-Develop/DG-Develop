import { createSlice } from '@reduxjs/toolkit'
import { Work } from '../../models'
const gecon = require("../../assets/static/Gecon.png");
const keradent = require("../../assets/static/Keradent.jpg");
const baluarteck = require("../../assets/static/Baluartteck.jpg");
const saintscript = require("../../assets/static/Saintscript.jpg");


export interface WorkState {
    works: Work[],
    workSelect: Work | object
}

const initialState: WorkState = {
    workSelect: {},
    works: [
        {
            id: 0,
            title: 'GeCon',
            subtitle: 'Contract generator',
            imageTitle: gecon,
            listImage: [],
            mediaQuery: 'Desktop'
        },
        {
            id: 1,
            title: 'Keradent',
            subtitle: 'Register of expedients',
            imageTitle: keradent,
            listImage: [],
            mediaQuery: 'Desktop'
        },
        {
            id: 2,
            title: 'Baluarteck',
            subtitle: 'Mobile checker',
            imageTitle: baluarteck,
            listImage: [],
            mediaQuery: 'Mobile'
        },
        {
            id: 3,
            title: 'Saintscript',
            subtitle: 'Register of information',
            imageTitle: saintscript,
            listImage: [],
            mediaQuery: 'Mobile'
        }
    ]
}

export const workSlice = createSlice({
    name: 'works',
    initialState,
    reducers: {
        chooseWork: (state, action) => {
            state.workSelect = action.payload
        }
    }
})


export const { chooseWork } = workSlice.actions

export default workSlice.reducer