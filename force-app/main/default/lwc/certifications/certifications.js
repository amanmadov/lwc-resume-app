import { LightningElement } from 'lwc';

export default class Certifications extends LightningElement {
    cssClass = 'fa fa-certificate';
    certificationList = [
        {
            name: 'Salesforce Certified JavaScript Developer I',
            url: 'https://trailblazer.me/id/amanmadov'
        },
        {
            name: 'Salesforce Certified Platform Developer I',
            url: 'https://trailblazer.me/id/amanmadov'
        },
        {
            name: 'Salesforce Certified Platform Developer II',
            url: 'https://trailblazer.me/id/amanmadov'
        },
        {
            name: 'Salesforce Certified Platform App Builder',
            url: 'https://trailblazer.me/id/amanmadov'
        },
        {
            name: 'Salesforce Certified Administrator',
            url: 'https://trailblazer.me/id/amanmadov'
        },
        {
            name: 'Certified Advanced RPA Professional',
            url: 'https://certificates.automationanywhere.com/60cc3632-60c6-4398-9584-6260430319bb'
        },
        {
            name: 'Google Data Analytics Certificate',
            url: 'https://www.credly.com/badges/66386424-79b6-4d8c-84a8-4ae49dbc6e9a'
        },
    ];
}