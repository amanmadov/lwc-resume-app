import { LightningElement } from 'lwc';

export default class Experience extends LightningElement {
    experienceList = [
        {
            id: 1,
            yearRange: '2019 - Present',
            companyName: 'SOFTTECH A.Ş',
            companyUrl: 'https://softtech.com.tr/en/',
            title: 'Senior Software Engineer',
            description: [
                'Built a cutting-edge RPA system with an AI-powered backend that leverages entity extraction capabilities to automate processes, resulting in a %70 increase in efficiency, as part of the digital transformation initiative at Türkiye İş Bankası, the largest private bank in Turkey', 
                'Collaborated with Şişecam\'s sales team, a global manufacturing company in Turkey, to automate and optimize their invoice processing workflows using a combination of RPA and intelligent OCR technologies',
                'Implemented a highly interactive web application using Node.js and MongoDB that enabled user-friendly dashboard for easy monitoring and tracking of RPA transactions and workflows',
                'Leveraged an API-first approach to design and implement RESTful APIs, resulting in a 30% performance improvement for the legacy applications. Utilized Swagger for API testing and documentation',
                'Developed custom RPA modules within a .NET environment and integrated them with existing RPA technologies',
                'Designed, tested, and implemented robust automated processes and workflows using UiPath RPA ecosystem',
                'Deployed and orchestrated components of automation and development tools on UiPath Automation Cloud',
            ]
        },
        {
            id: 2,
            yearRange: '2016 - 2019',
            companyName: 'EFES VARLIK A.Ş',
            companyUrl: 'https://www.efesvarlik.com.tr/',
            title: 'Fullstack Software Engineer',
            description: [
                'Contributed to the development of strategic technical/architectural plans for the company\’s CRM application',
                'Collaborated with external development teams to successfully migrate a legacy desktop application to a modern, web-based platform, leveraging a range of .NET stack to optimize performance and enhance user experience',
                'Implemented a complete intranet web application with ASP.NET MVC and jQuery',
                'Developed and maintained integrations with external APIs to exchange financial data using SOAP and REST APIs',
                'Reduced process cycle times by 50% through automation of manual tasks using UiPath RPA which enabled the organization to achieve compliance with regulatory requirements',
                'Created and optimized T-SQL queries and stored procedures using SQL Server Management Studio',
                'Designed and developed reports using SQL Server Reporting Services to support data-driven decision-making',
                'Developed SSIS packages to extract, transform, and load (ETL) data into SQL Server databases',
                // 'Performed data modeling to identify database requirements and designed necessary data structures',
                // 'Implemented a company website with a responsive mobile-first approach which increased mobile traffic by %40',
            ]
        },
        // {
        //     id: 3,
        //     yearRange: '2015 - 2016',
        //     companyName: 'SİLİKON AKADEMİ',
        //     companyUrl: 'https://silikonakademi.com/',
        //     title: 'Database Developer',
        //     description: ['Created working database back-ends for several web applications.', 'Optimized stored procedures and performed ad-hoc analysis of production data.', 'Designed and developed reports for end users using SSRS.', 'Performed data cleansing, data loading and routine updates on an ongoing basis using SSIS ETL.', 'Managed and maintained a group of 30+ databases on SSMS.']
        // }
    ]
}