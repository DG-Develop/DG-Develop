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
const keradentIntraoralInfo = require("../assets/static/Keradent_Intraoral_Info.png");
const keradentIntraoralInfo2 = require("../assets/static/Keradent_Intraoral_Info2.png");
const keradentIntraoralInfo3 = require("../assets/static/Keradent_Intraoral_Info3.png");
const keradentIntraoralInfo4 = require("../assets/static/Keradent_Intraoral_Info4.png");
const keradentPast = require("../assets/static/Keradent_Past.png");
const keradentPast2 = require("../assets/static/Keradent_Past2.png");
const keradentPastInfo = require("../assets/static/Keradent_Past_Info.png");
const keradentOdontogram = require("../assets/static/Keradent_Odontogram.png");
const keradentOdontogram2 = require("../assets/static/Keradent_Odontogram2.png");
const keradentOdontogram3 = require("../assets/static/Keradent_Odontogram3.png");
const keradentOdontogram4 = require("../assets/static/Keradent_Odontogram4.png");
const keradentOdontogram5 = require("../assets/static/Keradent_Odontogram5.png");
const keradentOdontogramInfo = require("../assets/static/Keradent_Odontogram_Info.png");
const keradentOdontogramInfo2 = require("../assets/static/Keradent_Odontogram_Info2.png");
const keradentOdontogramInfo3 = require("../assets/static/Keradent_Odontogram_Info3.png");
const keradentTreatmentPlan = require("../assets/static/Keradent_Treatment_Plan.png");
const keradentTreatmentPlan2 = require("../assets/static/Keradent_Treatment_Plan2.png");
const keradentTreatmentPlan3 = require("../assets/static/Keradent_Treatment_Plan3.png");
const keradentTreatmentPlanInfo = require("../assets/static/Keradent_Treatment_Plan_Info.png");
const keradentTreatmentPlanInfo2 = require("../assets/static/Keradent_Treatment_Plan_Info2.png");

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
            listImage: [],
            media: 'desktop'
        },
        {
            id: 1,
            route: keradentFormPersonal2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        ],
        media: 'desktop'
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
            listImage: [],
            media: 'desktop'
        },
        {
            id: 1,
            route: keradentPatientList2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        ],
        media: 'desktop'
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
            listImage: [],
            media: 'desktop'
        },
        {
            id: 1,
            route: keradentPatientInfoDelete,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 2,
            route: keradentPatientExpedient,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 3,
            route: keradentPatientExpedient2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        ],
        media: 'desktop'
    },
    {
        id: 3,
        route: keradentIntraoral,
        imageTitle: 'Intraoral examination',
        description: ['Fill form to know additional patient information and then see you information in the expedient generated before.', 'Also fill form about tissue information, habits, and consult type.'],
        listImage: [{
            id: 0,
            route: keradentIntraoral,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 1,
            route: keradentIntraoral2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 2,
            route: keradentIntraoralInfo,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 3,
            route: keradentIntraoralInfo2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 4,
            route: keradentIntraoralInfo3,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 5,
            route: keradentIntraoralInfo4,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        ],
        media: 'desktop'
    },
    {
        id: 4,
        route: keradentPast,
        imageTitle: 'Personal history and illnesses',
        description: ['Select your personal history or illnesses of the patient with a predeterminate list and after you see information in the expedient generated before.', 'Add other illnesses if do not appear in the list.'],
        listImage: [{
            id: 0,
            route: keradentPast,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 1,
            route: keradentPast2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 2,
            route: keradentPastInfo,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        ],
        media: 'desktop'
    },
    {
        id: 4,
        route: keradentOdontogram,
        imageTitle: 'Odontogram',
        description: ['Select the odontogram between adult or child.', 'Select patient affected teeth areas, then choose the thirds areas by tooth area and write some general observation about on his teeth.', 'See information in the expedient section once that register the form.'],
        listImage: [{
            id: 0,
            route: keradentOdontogram,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 1,
            route: keradentOdontogram2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 2,
            route: keradentOdontogram3,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 3,
            route: keradentOdontogram4,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 4,
            route: keradentOdontogram5,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 5,
            route: keradentOdontogramInfo,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 6,
            route: keradentOdontogramInfo2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 7,
            route: keradentOdontogramInfo3,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        ],
        media: 'desktop'
    },
    {
        id: 5,
        route: keradentTreatmentPlan,
        imageTitle: 'Treatment Plan',
        description: ['Register the client sig or responsible person, and describe your patient treatment plan.', 'Save total of the consult and look at total full of the list of treatments plans.', 'All treatment plans, it can consult in the expedient generated previously.'],
        listImage: [{
            id: 0,
            route: keradentTreatmentPlan,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 1,
            route: keradentTreatmentPlan2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 2,
            route: keradentTreatmentPlan3,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 3,
            route: keradentTreatmentPlanInfo,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 4,
            route: keradentTreatmentPlanInfo2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        ],
        media: 'desktop'
    },
]

export default imageKeradent
