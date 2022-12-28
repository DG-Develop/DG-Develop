import { Image } from '../models'
const saintscript = require("../assets/static/Saintscript.png");
const saintscriptLogin = require("../assets/static/Saintscript_Login.png");
const saintscriptLogin2 = require("../assets/static/Saintscript_Login2.png");
const saintscriptHome = require("../assets/static/Saintscript_Home.png");
const saintscriptNetwork = require("../assets/static/Saintscript_Network.png");
const saintscriptNetwork2 = require("../assets/static/Saintscript_Network2.png");
const saintscriptNetwork3 = require("../assets/static/Saintscript_Network3.png");
const saintscriptHistory = require("../assets/static/Saintscript_History.png");
const saintscriptHistory2 = require("../assets/static/Saintscript_History2.png");
const saintscriptHistory3 = require("../assets/static/Saintscript_History3.png");
const saintscriptHistory4 = require("../assets/static/Saintscript_History4.png");
const saintscriptBiblie = require("../assets/static/Saintscript_Biblie.png");
const saintscriptConfig = require("../assets/static/Saintscript_Config.png");
const saintscriptConfig2 = require("../assets/static/Saintscript_Config2.png");
const saintscriptConfig3 = require("../assets/static/Saintscript_Config3.png");
const saintscriptConfig4 = require("../assets/static/Saintscript_Config4.png");
const saintscriptConfig5 = require("../assets/static/Saintscript_Config5.png");
const saintscriptConfig6 = require("../assets/static/Saintscript_Config6.png");
const saintscriptConfig7 = require("../assets/static/Saintscript_Config7.png");

const imageSaintscript: Image[] = [{
    id: 0,
    route: saintscript,
    imageTitle: 'Login & Register',
    description: ["Register in the app for some information. If you forgot your password,  don't worry you can restore password and we send email to restore it."],
    listImage: [
        {
            id: 0,
            route: saintscript,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 1,
            route: saintscriptLogin,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 2,
            route: saintscriptLogin2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
    ],
    media: 'mobile'
},
{
    id: 1,
    route: saintscriptHome,
    imageTitle: 'Home',
    description: ["Look news in the principal section of the app and find out about happened in your community."],
    listImage: [
        {
            id: 0,
            route: saintscriptHome,
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
    route: saintscriptNetwork,
    imageTitle: 'Networks',
    description: ["Fill data of you network and subnetwork community for put some information whenever there is a reunion."],
    listImage: [
        {
            id: 0,
            route: saintscriptNetwork,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 1,
            route: saintscriptNetwork2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 2,
            route: saintscriptNetwork3,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
    ],
    media: 'mobile'
},
{
    id: 3,
    route: saintscriptHistory,
    imageTitle: 'History',
    description: ["Look the history of the networks daily and weekly getting statics of money  collected and people who were at the meeting."],
    listImage: [
        {
            id: 0,
            route: saintscriptHistory,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 1,
            route: saintscriptHistory2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 2,
            route: saintscriptHistory4,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 3,
            route: saintscriptHistory3,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
    ],
    media: 'mobile'
},
{
    id: 4,
    route: saintscriptBiblie,
    imageTitle: 'Biblie',
    description: ["Read the bible in the bible section, search the texts in a more comfortable way (The version of the Bible is from the Reina Valera)."],
    listImage: [
        {
            id: 0,
            route: saintscriptBiblie,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
    ],
    media: 'mobile'
},
{
    id: 5,
    route: saintscriptConfig,
    imageTitle: 'Config',
    description: ["Update your data, manage users, move them to other networks or delete them, create the news for your community to see on the main page of the application."],
    listImage: [
        {
            id: 0,
            route: saintscriptConfig,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 1,
            route: saintscriptConfig2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 2,
            route: saintscriptConfig3,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 3,
            route: saintscriptConfig4,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 4,
            route: saintscriptConfig5,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 5,
            route: saintscriptConfig6,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 6,
            route: saintscriptConfig7,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
    ],
    media: 'mobile'
},
]

export default imageSaintscript