import { LightningElement } from 'lwc';

export default class Skills extends LightningElement {
    skills = [
        {
            type: 'Fullstack Development',
            details: ['C#', 'Javascript', 'Node.js', 'Express.js', 'React.js', 'jQuery', 'MongoDB', 'MSSQL', 'HTML', 'CSS', 'Bootstrap', 'Git', 'Github'],
        },
        {
            type: 'Salesforce Development',
            details: ['Sales Cloud','Service Cloud','Salesforce API\'s','REST API\'s','Apex','Visualforce','SOQL','SOSL','LWC','Aura Framework'],
        }
    ]
}