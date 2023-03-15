import { LightningElement } from 'lwc';

export default class Education extends LightningElement {
    educationList = [
        {
            yearRange: '2022-2023',
            degree: 'MS of Information Systems',
            schoolName: 'Touro University',
            schoolUrl: 'https://gst.touro.edu',
        },
        {
            yearRange: '2014-2016',
            degree: 'MS of Computer Engineering',
            schoolName: 'Yıldız Technical University',
            schoolUrl: 'https://yildiz.edu.tr',
        },
        {
            yearRange: '2008-2014',
            degree: 'BS of Electrical Engineering',
            schoolName: 'Yıldız Technical University',
            schoolUrl: 'https://yildiz.edu.tr',
        },
    ];
}