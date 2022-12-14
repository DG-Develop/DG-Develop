import { createSlice } from '@reduxjs/toolkit'
import { Work } from '../../models'
import { GeconMockImage, KeradentMockImage, BaluarteckMockImage } from '../../data/index';
const gecon = require("../../assets/static/Gecon.png");
const keradent = require("../../assets/static/Keradent.png");
const baluarteck = require("../../assets/static/Baluarteck.png");
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
            listImage: GeconMockImage,
            mediaQuery: 'Desktop',
            colorTheme: 'tertiary'
        },
        {
            id: 1,
            title: 'Keradent',
            subtitle: 'Register of expedients',
            appDescription: `PWA application that register patient expedient and save personal
            data and dental clinical historial by consult`,
            imageTitle: keradent,
            listImage: KeradentMockImage,
            mediaQuery: 'Desktop',
            colorTheme: 'secondary'
        },
        {
            id: 2,
            title: 'Baluarteck',
            subtitle: 'Mobile checker',
            appDescription: `Mobile App and Web application to check in at work and generate
            report assistance, incidents, schedules and work permits.`,
            imageTitle: baluarteck,
            listImage: BaluarteckMockImage,
            mediaQuery: 'Mobile',
            colorTheme: 'primary'
        },
        {
            id: 3,
            title: 'Saintscript',
            subtitle: 'Register of information',
            appDescription: `Mobile App to register information by reunion and keep the tithes
            collected, read the bible and see the contribution history`,
            imageTitle: saintscript,
            listImage: [],
            mediaQuery: 'Mobile',
            colorTheme: 'Tertiary'
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