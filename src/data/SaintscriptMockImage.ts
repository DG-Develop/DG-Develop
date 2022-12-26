import { Image } from '../models'
const baluarteckLogin = require("../assets/static/Baluarteck_Login.png");
const baluarteckRegister = require("../assets/static/Baluarteck_Register.png");
const baluarteckRegister2 = require("../assets/static/Baluarteck_Register2.png");
const baluarteckRegister3 = require("../assets/static/Baluarteck_Register3.png");
const baluarteckRegister4 = require("../assets/static/Baluarteck_Register4.png");


const imageSaintscript: Image[] = [{
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
]

export default imageSaintscript