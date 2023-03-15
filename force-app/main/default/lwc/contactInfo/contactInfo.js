import { LightningElement } from 'lwc';

export default class ContactInfo extends LightningElement {
    contactList =
        [
            {
                contactText: 'amanmadov@gmail.com',
                contactUrl: 'mailto:amanmadov@gmail.com',
                contactCss: 'fa fa-envelope-o'
            },
            {
                contactText: 'linkedin/amanmadov',
                contactUrl: 'https://www.linkedin.com/in/amanmadov',
                contactCss: 'fa fa-linkedin'
            },
            {
                contactText: 'github/amanmadov',
                contactUrl: 'https://github.com/amanmadov',
                contactCss: 'fa fa-github'
            },
            {
                contactText: 'trailblazer/amanmadov',
                contactUrl: 'https://trailblazer.me/id/amanmadov',
                contactCss: 'fa fa-cloud'
            },
            {
                contactText: 'hackerrank/amanmadov',
                contactUrl: 'https://www.hackerrank.com/amanmadov',
                contactCss: 'fa fa-code'
            },
            {
                contactText: 'Seattle/WA',
                contactUrl: '',
                contactCss: 'fa fa-globe'
            }
        ];
}