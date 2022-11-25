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
            appDescription: `PWA application for generate fixed-terms contracts for the payroll
            personal of Human Resources department with the final porpuse we
            have the presupuestal control and personal analysis that has been
            hired by this means.`,
            imageTitle: gecon,
            listImage: [],
            mediaQuery: 'Desktop'
        },
        {
            id: 1,
            title: 'Keradent',
            subtitle: 'Register of expedients',
            appDescription: `PWA application that register patient expedient and keep clinical historial `,
            imageTitle: keradent,
            listImage: [],
            mediaQuery: 'Desktop'
        },
        {
            id: 2,
            title: 'Baluarteck',
            subtitle: 'Mobile checker',
            appDescription: `PWA application for generate fixed-terms contracts for the payroll
            personal of Human Resources department with the final porpuse we
            have the presupuestal control and personal analysis that has been
            hired by this means.`,
            imageTitle: baluarteck,
            listImage: [],
            mediaQuery: 'Mobile'
        },
        {
            id: 3,
            title: 'Saintscript',
            subtitle: 'Register of information',
            appDescription: `PWA application for generate fixed-terms contracts for the payroll
            personal of Human Resources department with the final porpuse we
            have the presupuestal control and personal analysis that has been
            hired by this means.`,
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