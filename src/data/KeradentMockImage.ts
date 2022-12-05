import { Image } from '../models'
const keradentFormPersonal = require("../assets/static/Keradent_Form_Personal.png");
const keradentFormPersonal2 = require("../assets/static/Keradent_Form_Personal2.png");
const keradentPatientList = require("../assets/static/Keradent_Patient_List.png");

const imageKeradent: Image[] = [
    {
        id: 0,
        route: keradentFormPersonal,
        imageTitle: 'Patient Form',
        description: ['Record patient data to contact it and keep some extra information how medical history'],
        listImage: [{
            id: 0,
            route: keradentFormPersonal,
            imageTitle: '',
            description: [],
            listImage: []
        },
        {
            id: 1,
            route: keradentFormPersonal2,
            imageTitle: '',
            description: [],
            listImage: []
        },
        ]
    },
    {
        id: 1,
        route: keradentPatientList,
        imageTitle: 'Patient List',
        description: ['See all record patients and search it by name lorem ipcsum value total repon'],
        listImage: [{
            id: 0,
            route: keradentPatientList,
            imageTitle: '',
            description: [],
            listImage: []
        },
        ]
    }
]

export default imageKeradent
