import { LightningElement } from 'lwc';

export default class Skills extends LightningElement {
    skills = [
        {
            type: 'Fullstack Development',
            details: ['C#', 'Javascript', 'Node.js', 'Express.js', 'React.js', 'jQuery', 'MongoDB', 'SQL Server', 'HTML', 'CSS', 'Bootstrap', 'Git/Github'],
        },
        {
            type: 'Salesforce Development',
            details: ['Sales Cloud','Service Cloud','Salesforce APIS','REST APIS','Apex','Visualforce','SOQL','SOSL','LWC','Aura Framework'],
        }
    ]
}