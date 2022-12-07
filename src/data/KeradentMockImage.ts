import { Image } from '../models'
const keradentFormPersonal = require("../assets/static/Keradent_Form_Personal.png");
const keradentFormPersonal2 = require("../assets/static/Keradent_Form_Personal2.png");
const keradentPatientList = require("../assets/static/Keradent_Patient_List.png");
const keradentPatientList2 = require("../assets/static/Keradent_Patient_List2.png");
const keradentPatientInfo = require("../assets/static/Keradent_Patient_Info.png");
const keradentPatientInfoDelete = require("../assets/static/Keradent_Patient_Info_Delete.png");
const keradentPatientExpedient = require("../assets/static/Keradent_Patient_Expedient.png");
const keradentPatientExpedient2 = require("../assets/static/Keradent_Patient_Expedient2.png");
const keradentIntraoral = require("../assets/static/Keradent_Intraoral.png");
const keradentIntraoral2 = require("../assets/static/Keradent_Intraoral2.png");
const keradentPast = require("../assets/static/Keradent_Past.png");
const keradentPast2 = require("../assets/static/Keradent_Past2.png");
const keradentOdontogram = require("../assets/static/Keradent_Odontogram.png");
const keradentOdontogram2 = require("../assets/static/Keradent_Odontogram2.png");
const keradentOdontogram3 = require("../assets/static/Keradent_Odontogram3.png");
const keradentOdontogram4 = require("../assets/static/Keradent_Odontogram4.png");

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
        description: ['See all record patients and search it by name or doctor name and select to see patient information.'],
        listImage: [{
            id: 0,
            route: keradentPatientList,
            imageTitle: '',
            description: [],
            listImage: []
        },
        {
            id: 1,
            route: keradentPatientList2,
            imageTitle: '',
            description: [],
            listImage: []
        },
        ]
    },
    {
        id: 2,
        route: keradentPatientInfo,
        imageTitle: 'Patient Info',
        description: ['See all patient information and organize your history medical by date and see recent or older expedient.', 'Delete and update patient information at the moment.', 'Create expedient and fill medical forms'],
        listImage: [{
            id: 0,
            route: keradentPatientInfo,
            imageTitle: '',
            description: [],
            listImage: []
        },
        {
            id: 1,
            route: keradentPatientInfoDelete,
            imageTitle: '',
            description: [],
            listImage: []
        },
        {
            id: 2,
            route: keradentPatientExpedient,
            imageTitle: '',
            description: [],
            listImage: []
        },
        {
            id: 3,
            route: keradentPatientExpedient2,
            imageTitle: '',
            description: [],
            listImage: []
        },
        ]
    },
    {
        id: 3,
        route: keradentIntraoral,
        imageTitle: 'Intraoral examination',
        description: ['Fill form to know additional patient information.', 'Fill form about tissue information, habits, and consult type.'],
        listImage: [{
            id: 0,
            route: keradentIntraoral,
            imageTitle: '',
            description: [],
            listImage: []
        },
        {
            id: 1,
            route: keradentIntraoral2,
            imageTitle: '',
            description: [],
            listImage: []
        },
        ]
    },
    {
        id: 4,
        route: keradentPast,
        imageTitle: 'Personal history and illnesses',
        description: ['Select your personal history or illnesses of the patient.', 'Add other illnesses if do not appear in the list. asdfasdfsdfadfaassd'],
        listImage: [{
            id: 0,
            route: keradentPast,
            imageTitle: '',
            description: [],
            listImage: []
        },
        {
            id: 1,
            route: keradentPast2,
            imageTitle: '',
            description: [],
            listImage: []
        },
        ]
    },
    {
        id: 4,
        route: keradentOdontogram,
        imageTitle: 'Odontogram',
        description: ['Select the odontogram between adult or child.', 'Select patient affected areas, and write some observation.'],
        listImage: [{
            id: 0,
            route: keradentOdontogram,
            imageTitle: '',
            description: [],
            listImage: []
        },
        {
            id: 1,
            route: keradentOdontogram2,
            imageTitle: '',
            description: [],
            listImage: []
        },
        {
            id: 2,
            route: keradentOdontogram3,
            imageTitle: '',
            description: [],
            listImage: []
        },
        {
            id: 3,
            route: keradentOdontogram4,
            imageTitle: '',
            description: [],
            listImage: []
        },
        ]
    },
]

export default imageKeradent
