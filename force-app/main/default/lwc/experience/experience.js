import { LightningElement } from 'lwc';

export default class Experience extends LightningElement {
    experienceList = [
        {
            id: 1,
            yearRange: '2019 - Present',
            companyName: 'SOFTTECH A.Ş',
            companyUrl: 'https://softtech.com.tr/en/',
            title: 'Senior Software Engineer',
            description: ['Built one of the most innovative RPA products for the largest private bank in Turkey, Türkiye İş Bankası, as part of the digital transformation project.', 'Provided consultancy services, regarding RPA solutions for companies like Türkiye İş Bankası, İş Leasing and İş Faktoring.', 'Implemented modern technologies like OCR, NLP and Machine Learning for RPA solutions.', 'Developed custom modules and integrated with UiPath.', 'Trained business experts and citizen developers on UiPath RPA technology.', 'Designed and developed automated processes using UiPath technology.']
        },
        {
            id: 2,
            yearRange: '2016 - 2019',
            companyName: 'EFES VARLIK A.Ş',
            companyUrl: 'https://www.efesvarlik.com.tr/',
            title: 'Fullstack Software Engineer',
            description: ['Designed and developed a complete intranet web application from concept through deployment.', 'Created a task management software which helps managers track tasks more effectively.', 'Developed a call center KPI module to measure the organization’s ability to manage customer relations.', 'Implemented a company website from scratch with new responsive, mobile-first approach which increased mobile traffic.', 'Worked with external web API’s to automate business processes.']
        },
        {
            id: 3,
            yearRange: '2015 - 2016',
            companyName: 'SİLİKON AKADEMİ',
            companyUrl: 'https://silikonakademi.com/',
            title: 'Database Developer',
            description: ['Created working database back-ends for several web applications.', 'Optimized stored procedures and performed ad-hoc analysis of production data.', 'Designed and developed reports for end users using SSRS.', 'Performed data cleansing, data loading and routine updates on an ongoing basis using SSIS ETL.', 'Managed and maintained a group of 30+ databases on SSMS.']
        }
    ]
}