import { createSlice } from '@reduxjs/toolkit'
import { Work, Image } from '../../models'
const gecon = require("../../assets/static/Gecon.png");
const geconManual = require("../../assets/static/Gecon_Manual.png");
const geconSemiAnnual = require("../../assets/static/Gecon_Semi_Anual.png");
const geconQuarterly = require("../../assets/static/Gecon_Quarterly.png");
const geconMonthly = require("../../assets/static/Gecon_Monthly.png");
const geconBiweekly = require("../../assets/static/Gecon_Biweekly.png");
const geconDay = require("../../assets/static/Gecon_Day.png");
const geconContractList = require("../../assets/static/Gecon_Contract_List.png");
const geconEmployeeList = require("../../assets/static/Gecon_Employee_List.png");
const geconGenerateContracts = require("../../assets/static/Gecon_Generate_Contracts.png");
const geconUpdateContract = require("../../assets/static/Gecon_Update_Contract.png");
const geconAddSignature = require("../../assets/static/Gecon_Add_Signature.png");
const keradent = require("../../assets/static/Keradent.jpg");
const baluarteck = require("../../assets/static/Baluartteck.jpg");
const saintscript = require("../../assets/static/Saintscript.jpg");


export interface WorkState {
    works: Work[],
    workSelect: Work | object
}

const imageGecon: Image[] = [{
    id: 0,
    route: gecon,
    imageTitle: 'Home',
    description: ['Download a single contract or many.', 'To download a single contract, write the contract folio dynamically or manual.', 'To download many contracts, choose year, period (Semi-annual, Quarterly, Monthly, Biweekly or by Day) and finally choose the government dependency.', 'See download progress and you can cancel it while the operation is active.'],
    listImage: [{
        id: 0,
        route: gecon,
        imageTitle: '',
        description: [],
        listImage: []
    },
    {
        id: 1,
        route: geconManual,
        imageTitle: '',
        description: [],
        listImage: []
    },
    {
        id: 2,
        route: geconSemiAnnual,
        imageTitle: '',
        description: [],
        listImage: []
    },
    {
        id: 3,
        route: geconQuarterly,
        imageTitle: '',
        description: [],
        listImage: []
    },
    {
        id: 4,
        route: geconMonthly,
        imageTitle: '',
        description: [],
        listImage: []
    },
    {
        id: 5,
        route: geconBiweekly,
        imageTitle: '',
        description: [],
        listImage: []
    },
    {
        id: 6,
        route: geconDay,
        imageTitle: '',
        description: [],
        listImage: []
    }
]
},
{
    id: 1,
    route: geconContractList,
    imageTitle: 'Contract List',
    description: ['See all contracts and also update it and delete it.', 'Also you can search any contract, writing the name, DNI, contract folio and number employee.'],
    listImage: []
},
{
    id: 2,
    route: geconEmployeeList,
    imageTitle: 'Employee List',
    description: [' Control the staff and signatories and see you partial information. Also you can search to employee or signers by name, DNI and number of employee. Control the staff and signatories and see you partial information.', 'Also you can search to employee or signers by name, DNI and number of employee.'],
    listImage: []
},
{
    id: 3,
    route: geconGenerateContracts,
    imageTitle: 'Generate Contracts',
    description: ['Generate multiple contracts by government dependency, choose contract duration and then choose the signatories (Max. 3 and Min. 2 depending on government dependency) and finally choose staff to generate contract or contracts.', 'This process save it for choose another government dependency and generate multiple contracts to one click.'],
    listImage: []
},
{
    id: 4,
    route: geconUpdateContract,
    imageTitle: 'Update Contract',
    description: ['Update contracts, change the duration, government dependency or position as long as the contract has not been signed.'],
    listImage: []
},
{
    id: 5,
    route: geconAddSignature,
    imageTitle: 'Add signers',
    description: ['Add new signers, choose by government dependency, then write or choose you position and indicate the order to sig.'],
    listImage: []
}
]

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
            listImage: imageGecon,
            mediaQuery: 'Desktop'
        },
        {
            id: 1,
            title: 'Keradent',
            subtitle: 'Register of expedients',
            appDescription: `PWA application that register patient expedient and save personal
            data and dental clinical historial by consult`,
            imageTitle: keradent,
            listImage: [],
            mediaQuery: 'Desktop'
        },
        {
            id: 2,
            title: 'Baluarteck',
            subtitle: 'Mobile checker',
            appDescription: `Mobile App and Web application to check in at work and generate
            report assistance, incidents, schedules and work permits.`,
            imageTitle: baluarteck,
            listImage: [],
            mediaQuery: 'Mobile'
        },
        {
            id: 3,
            title: 'Saintscript',
            subtitle: 'Register of information',
            appDescription: `Mobile App to register information by reunion and keep the tithes
            collected, read the bible and see the contribution history`,
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