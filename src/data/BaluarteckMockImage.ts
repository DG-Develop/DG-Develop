import { Image } from '../models'
const baluarteck = require("../assets/static/Baluarteck.png");
const baluarteckFingerprint = require("../assets/static/Baluarteck_Fingerprint.png");
const baluarteckLogin = require("../assets/static/Baluarteck_Login.png");
const baluarteckRegister = require("../assets/static/Baluarteck_Register.png");
const baluarteckRegister2 = require("../assets/static/Baluarteck_Register2.png");
const baluarteckRegister3 = require("../assets/static/Baluarteck_Register3.png");
const baluarteckRegister4 = require("../assets/static/Baluarteck_Register4.png");
const baluarteckManual = require("../assets/static/Baluarteck_Manual.png");
const baluarteckManual2 = require("../assets/static/Baluarteck_Manual2.png");
const baluarteckManual3 = require("../assets/static/Baluarteck_Manual3.png");


const imageBaluarteck: Image[] = [{
    id: 0,
    route: baluarteckLogin,
    imageTitle: 'Login & Register',
    description: ['Login or register to use app, when register we will ask some information general how email, password, name, etc. and take a photo  for the form process.', 'Apply change with your fingerprint and if you cellphone not use figerprint just push button to continue.'],
    listImage: [
        {
            id: 0,
            route: baluarteckLogin,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 1,
            route: baluarteckRegister,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 2,
            route: baluarteckRegister2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 3,
            route: baluarteckRegister3,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 4,
            route: baluarteckRegister4,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        }
    ],
    media: 'mobile'
},
{
    id: 1,
    route: baluarteck,
    imageTitle: 'Check in fingerprint',
    description: ['Check in with your finger in the mentioned section and see the hour of entrance and exit in the principal card with your register of day.'],
    listImage: [
        {
            id: 0,
            route: baluarteck,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 1,
            route: baluarteckFingerprint,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
    ],
    media: 'mobile'
},
{
    id: 2,
    route: baluarteckManual,
    imageTitle: 'Check in manual',
    description: ["If your cell phone don't have fingerprint, don't worry you can check in manually, just press the button and describe your situation about why do you can't check in with the fingerprint option."],
    listImage: [
        {
            id: 0,
            route: baluarteckManual,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 1,
            route: baluarteckManual2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 2,
            route: baluarteckManual3,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
    ],
    media: 'mobile'
},
]

export default imageBaluarteck