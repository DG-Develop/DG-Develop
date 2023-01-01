import { Image } from '../models'
const gecon = require("../assets/static/Gecon.png");
const geconManual = require("../assets/static/Gecon_Manual.png");
const geconSemiAnnual = require("../assets/static/Gecon_Semi_Anual.png");
const geconQuarterly = require("../assets/static/Gecon_Quarterly.png");
const geconMonthly = require("../assets/static/Gecon_Monthly.png");
const geconBiweekly = require("../assets/static/Gecon_Biweekly.png");
const geconDay = require("../assets/static/Gecon_Day.png");
const geconContractList = require("../assets/static/Gecon_Contract_List.png");
const geconContractInfo = require("../assets/static/Gecon_Contract_Info.png");
const geconEmployeeList = require("../assets/static/Gecon_Employee_List.png");
const geconPersonalInfo = require("../assets/static/Gecon_Personal_Info.png");
const geconPersonalAddress = require("../assets/static/Gecon_Personal_Address.png");
const geconGenerateContracts = require("../assets/static/Gecon_Generate_Contracts.png");
const geconGenerateContracts2 = require("../assets/static/Gecon_Generate_Contracts2.png");
const geconGenerateContracts3 = require("../assets/static/Gecon_Generate_Contracts3.png");
const geconUpdateContract = require("../assets/static/Gecon_Update_Contract.png");
const geconUpdateContractDependencia = require("../assets/static/Gecon_Update_Contract_Dependencia.png");
const geconUpdateContractPuesto = require("../assets/static/Gecon_Update_Contract_Puesto.png");
const geconAddSignature = require("../assets/static/Gecon_Add_Signature.png");
const geconAddSignatureSign = require("../assets/static/Gecon_Add_Signature_Sign.png");

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
        listImage: [],
        media: 'desktop'
    },
    {
        id: 1,
        route: geconManual,
        imageTitle: '',
        description: [],
        listImage: [],
        media: 'desktop'
    },
    {
        id: 2,
        route: geconSemiAnnual,
        imageTitle: '',
        description: [],
        listImage: [],
        media: 'desktop'
    },
    {
        id: 3,
        route: geconQuarterly,
        imageTitle: '',
        description: [],
        listImage: [],
        media: 'desktop'
    },
    {
        id: 4,
        route: geconMonthly,
        imageTitle: '',
        description: [],
        listImage: [],
        media: 'desktop'
    },
    {
        id: 5,
        route: geconBiweekly,
        imageTitle: '',
        description: [],
        listImage: [],
        media: 'desktop'
    },
    {
        id: 6,
        route: geconDay,
        imageTitle: '',
        description: [],
        listImage: [],
        media: 'desktop'
    }
    ],
    media: 'desktop'
},
{
    id: 1,
    route: geconContractList,
    imageTitle: 'Contract List',
    description: ['See all contracts and also update it and delete it.', 'Also you can search any contract, writing the name, DNI, contract folio and number employee.'],
    listImage: [{
        id: 0,
        route: geconContractList,
        imageTitle: '',
        description: [],
        listImage: [],
        media: 'desktop'
    },
    {
        id: 1,
        route: geconContractInfo,
        imageTitle: '',
        description: [],
        listImage: [],
        media: 'desktop'
    },],
    media: 'desktop'
},
{
    id: 2,
    route: geconEmployeeList,
    imageTitle: 'Employee List',
    description: ['Control the staff and signatories and see you partial information. Also you can search to employee or signers by name, DNI and number of employee. Control the staff and signatories and see you partial information.'],
    listImage: [
        {
            id: 0,
            route: geconEmployeeList,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 1,
            route: geconPersonalInfo,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 2,
            route: geconPersonalAddress,
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
    route: geconGenerateContracts,
    imageTitle: 'Generate Contracts',
    description: ['Generate multiple contracts by government dependency, choose contract duration and then choose the signatories (Max. 3 and Min. 2 depending on government dependency) and finally choose staff to generate contract or contracts.', 'This process save it for choose another government dependency and generate multiple contracts to one click.'],
    listImage: [
        {
            id: 0,
            route: geconGenerateContracts,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 1,
            route: geconGenerateContracts2,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 2,
            route: geconGenerateContracts3,
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
    route: geconUpdateContract,
    imageTitle: 'Update Contract',
    description: ['Update contracts, change the duration, government dependency or position as long as the contract has not been signed.'],
    listImage: [
        {
            id: 0,
            route: geconUpdateContract,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 1,
            route: geconUpdateContractDependencia,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 2,
            route: geconUpdateContractPuesto,
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
    route: geconAddSignature,
    imageTitle: 'Add signers',
    description: ['Add new signers, choose by government dependency, then write or choose you position and indicate the order to sig.'],
    listImage: [
        {
            id: 0,
            route: geconAddSignature,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
        {
            id: 1,
            route: geconAddSignatureSign,
            imageTitle: '',
            description: [],
            listImage: [],
            media: 'desktop'
        },
    ],
    media: 'desktop'
}
]

export default imageGecon