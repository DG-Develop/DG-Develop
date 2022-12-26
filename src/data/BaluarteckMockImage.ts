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
const baluarteckConfig = require("../assets/static/Baluarteck_Config.png");
const baluarteckConfig2 = require("../assets/static/Baluarteck_Config2.png");
const baluarteckConfig3 = require("../assets/static/Baluarteck_Config3.png");
const baluarteckConfig4 = require("../assets/static/Baluarteck_Config4.png");
const baluarteckDesktop = require("../assets/static/Baluarteck_Desktop.png");
const baluarteckDesktopReport = require("../assets/static/Baluarteck_Desktop_Report.png");
const baluarteckDesktopReport2 = require("../assets/static/Baluarteck_Desktop_Report2.png");
const baluarteckDesktopReport3 = require("../assets/static/Baluarteck_Desktop_Report3.png");
const baluarteckDesktopReport4 = require("../assets/static/Baluarteck_Desktop_Report4.png");
const baluarteckDesktopReport5 = require("../assets/static/Baluarteck_Desktop_Report5.png");
const baluarteckDesktopReport6 = require("../assets/static/Baluarteck_Desktop_Report6.png");
const baluarteckDesktopReport7 = require("../assets/static/Baluarteck_Desktop_Report7.png");
const baluarteckDesktopReport8 = require("../assets/static/Baluarteck_Desktop_Report8.png");
const baluarteckDesktopIncidents = require("../assets/static/Baluarteck_Desktop_Incidents.png");
const baluarteckDesktopIncidents2 = require("../assets/static/Baluarteck_Desktop_Incidents2.png");
const baluarteckDesktopIncidents3 = require("../assets/static/Baluarteck_Desktop_Incidents3.png");
const baluarteckDesktopIncidents4 = require("../assets/static/Baluarteck_Desktop_Incidents4.png");
const baluarteckDesktopIncidents5 = require("../assets/static/Baluarteck_Desktop_Incidents5.png");
const baluarteckDesktopIncidents6 = require("../assets/static/Baluarteck_Desktop_Incidents6.png");
const baluarteckDesktopEmployee = require("../assets/static/Baluarteck_Desktop_Employees.png");
const baluarteckDesktopEmployee2 = require("../assets/static/Baluarteck_Desktop_Employees2.png");
const baluarteckDesktopEmployee3 = require("../assets/static/Baluarteck_Desktop_Employees3.png");
const baluarteckDesktopEmployee4 = require("../assets/static/Baluarteck_Desktop_Employees4.png");
const baluarteckDesktopEmployee5 = require("../assets/static/Baluarteck_Desktop_Employees5.png");
const baluarteckDesktopEmployee6 = require("../assets/static/Baluarteck_Desktop_Employees6.png");
const baluarteckDesktopEmployee7 = require("../assets/static/Baluarteck_Desktop_Employees7.png");
const baluarteckDesktopEmployee8 = require("../assets/static/Baluarteck_Desktop_Employees8.png");
const baluarteckDesktopEmployee9 = require("../assets/static/Baluarteck_Desktop_Employees9.png");
const baluarteckDesktopEmployee10 = require("../assets/static/Baluarteck_Desktop_Employees10.png");
const baluarteckDesktopEmployee11 = require("../assets/static/Baluarteck_Desktop_Employees11.png");
const baluarteckDesktopEmployee12 = require("../assets/static/Baluarteck_Desktop_Employees12.png");
const baluarteckDesktopSchedule = require("../assets/static/Baluarteck_Desktop_Schedule.png");
const baluarteckDesktopSchedule2 = require("../assets/static/Baluarteck_Desktop_Schedule2.png");
const baluarteckDesktopSchedule3 = require("../assets/static/Baluarteck_Desktop_Schedule3.png");
const baluarteckDesktopSchedule4 = require("../assets/static/Baluarteck_Desktop_Schedule4.png");
const baluarteckDesktopSchedule5 = require("../assets/static/Baluarteck_Desktop_Schedule5.png");
const baluarteckDesktopSchedule6 = require("../assets/static/Baluarteck_Desktop_Schedule6.png");
const baluarteckDesktopSchedule7 = require("../assets/static/Baluarteck_Desktop_Schedule7.png");
const baluarteckDesktopSchedule8 = require("../assets/static/Baluarteck_Desktop_Schedule8.png");
const baluarteckDesktopSchedule9 = require("../assets/static/Baluarteck_Desktop_Schedule9.png");
const baluarteckDesktopSchedule10 = require("../assets/static/Baluarteck_Desktop_Schedule10.png");


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
{
    id: 3,
    route: baluarteckConfig,
    imageTitle: 'Check in list and update profile',
    description: ["See a check in list by current month with the entrance hour and exit hour, and look some personal information of the staff.", "Besides you can edit your personal information how your names, job and phone number."],
    listImage: [
        {
            id: 0,
            route: baluarteckConfig,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 1,
            route: baluarteckConfig2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 2,
            route: baluarteckConfig3,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'mobile'
        },
        {
            id: 2,
            route: baluarteckConfig4,
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
    route: baluarteckDesktop,
    imageTitle: 'App for Desktop',
    description: ["In this section you look the app by the admin side and control of the staff check in."],
    listImage: [
        {
            id: 0,
            route: baluarteckDesktop,
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
    route: baluarteckDesktopReport,
    imageTitle: 'Create & Generate Reports',
    description: ["See a list of reports and create a report taking into account absences or not, or if you want both, additionally you can include additional data into the report and choose between incidents with pay or without pay, or simply choose both.", "Generate report choosing intial date and finish date, select all employees or some employees, filter by job or profile. Then you see a report with the add caracteristics that you choosed before."],
    listImage: [
        {
            id: 0,
            route: baluarteckDesktopReport,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 1,
            route: baluarteckDesktopReport2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 2,
            route: baluarteckDesktopReport3,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 3,
            route: baluarteckDesktopReport4,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 4,
            route: baluarteckDesktopReport5,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 5,
            route: baluarteckDesktopReport6,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 6,
            route: baluarteckDesktopReport7,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 7,
            route: baluarteckDesktopReport8,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
    ],
    media: 'desktop'
},
{
    id: 6,
    route: baluarteckDesktopIncidents,
    imageTitle: 'Create Incidents',
    description: ["Create incidents of your employees with paid or unpaid.", "Fill the form, write de motive of the incident, fill the initial and finish date and the staff name with authorize, and finally choose the permit type.", "See the information about incident it and look the missing days for that incident finish."],
    listImage: [
        {
            id: 0,
            route: baluarteckDesktopIncidents,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 1,
            route: baluarteckDesktopIncidents2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 2,
            route: baluarteckDesktopIncidents3,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 3,
            route: baluarteckDesktopIncidents4,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 4,
            route: baluarteckDesktopIncidents5,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 5,
            route: baluarteckDesktopIncidents6,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
    ],
    media: 'desktop'
},
{
    id: 6,
    route: baluarteckDesktopEmployee,
    imageTitle: 'Employee Control',
    description: ["Register, input check-in and look the list of all employees.", "Additionally you can see the information of the employee, update your information, look employee schedule, look employee incidents and look the list of check-in."],
    listImage: [
        {
            id: 0,
            route: baluarteckDesktopEmployee,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 1,
            route: baluarteckDesktopEmployee2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 2,
            route: baluarteckDesktopEmployee3,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 3,
            route: baluarteckDesktopEmployee4,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 4,
            route: baluarteckDesktopEmployee5,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 5,
            route: baluarteckDesktopEmployee6,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 6,
            route: baluarteckDesktopEmployee7,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 7,
            route: baluarteckDesktopEmployee8,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 8,
            route: baluarteckDesktopEmployee9,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 9,
            route: baluarteckDesktopEmployee10,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 10,
            route: baluarteckDesktopEmployee11,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 11,
            route: baluarteckDesktopEmployee12,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
    ],
    media: 'desktop'
},
{
    id: 7,
    route: baluarteckDesktopSchedule,
    imageTitle: 'Employee Schedule',
    description: ["Look the list schedule profile and add new profiles, also assign schedule profile to employees and add inhabilities days.", "Create a schedule profile between permanent schedule, variable schedule or rotative schedule."],
    listImage: [
        {
            id: 0,
            route: baluarteckDesktopSchedule,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 1,
            route: baluarteckDesktopSchedule2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 2,
            route: baluarteckDesktopSchedule3,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 3,
            route: baluarteckDesktopSchedule4,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 4,
            route: baluarteckDesktopSchedule5,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 5,
            route: baluarteckDesktopSchedule6,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 6,
            route: baluarteckDesktopSchedule7,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 7,
            route: baluarteckDesktopSchedule8,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 8,
            route: baluarteckDesktopSchedule9,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 9,
            route: baluarteckDesktopSchedule10,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
    ],
    media: 'desktop'
},
]

export default imageBaluarteck