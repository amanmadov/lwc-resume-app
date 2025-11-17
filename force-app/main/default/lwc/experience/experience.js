import { LightningElement } from 'lwc';

export default class Experience extends LightningElement {
    experienceList = [
        {
            id: 0,
            yearRange: '2023 - Present',
            companyName: 'UNIVERSITY OF WASHINGTON',
            companyUrl: 'https://www.washington.edu/',
            title: 'Infrastructure Engineer',
            description: ['Architected and deployed a global-scale web application portal using Magentrix and Rise 360 LMS technologies, serving more than 20,000 collaborators across 170+ countries to advance worldwide collaboration in GBD health studies and research initiatives.','Re-engineered Salesforce database architecture to optimize data modeling and support highly customized solutions with complex relational structures, delivering significantly faster data retrieval times and establishing a scalable foundation for sustained database growth.',
            ]
        },
        {
            id: 1,
            yearRange: '2019 - 2022',
            companyName: 'SOFTTECH A.Ş',
            companyUrl: 'https://softtech.com.tr/en/',
            title: 'Software Architect',
            description: [
                'Built a cutting-edge RPA system with an AI-powered backend that leverages entity extraction capabilities to automate processes, resulting in a %70 increase in efficiency, as part of the digital transformation initiative at Türkiye İş Bankası, the largest private bank in Turkey',
                'Collaborated with Şişecam\'s sales team, a global manufacturing company in Turkey, to automate and optimize their invoice processing workflows using a combination of RPA and intelligent OCR technologies',
                'Implemented a highly interactive web application using Node.js and MongoDB that enabled user-friendly dashboard for easy monitoring and tracking of RPA transactions and workflows',
                'Leveraged an API-first approach to design and implement RESTful APIs, resulting in a 30% performance improvement for the legacy applications. Utilized Swagger for API testing and documentation',
                'Developed custom RPA modules within a .NET environment and integrated them with existing RPA technologies',
                'Designed, tested, and implemented robust automated processes and workflows using UiPath RPA ecosystem',
            ]
        },
        {
            id: 2,
            yearRange: '2016 - 2019',
            companyName: 'EFES VARLIK A.Ş',
            companyUrl: 'https://www.efesvarlik.com.tr/',
            title: 'Software Engineer',
            description: [
                'Contributed to the development of strategic technical/architectural plans for the company\’s CRM application',
                'Collaborated with external development teams to successfully migrate a legacy desktop application to a modern, web-based platform, leveraging a range of .NET stack to optimize performance and enhance user experience',
                'Implemented a complete intranet web application with ASP.NET MVC and jQuery',
                'Developed and maintained integrations with external APIs to exchange financial data using SOAP and REST APIs',
                'Reduced process cycle times by 50% through automation of manual tasks using UiPath RPA which enabled the organization to achieve compliance with regulatory requirements',
                'Created and optimized T-SQL queries and stored procedures using SQL Server Management Studio',
            ]
        },
    ]
}