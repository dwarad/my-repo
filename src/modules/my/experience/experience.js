import { LightningElement } from 'lwc';

export default class Experience extends LightningElement {
    experiences = [
        {
            id: 1,
            role: 'Application Engineer III',
            company: 'Avalara',
            period: 'June 2024 – Present',
            bullets: [
                'Architected a complex Independent Tier Selection framework within Salesforce Revenue Cloud, enhancing product accessibility and driving measurable financial revenue growth.',
                'Developed a custom Generative AI agent integrated with Jira to automate ticket analysis, clarifying technical requirements and streamlining Agile team workflows.',
                'Engineered high-performance Batch Apex and metadata-driven solutions to optimize millions of cross-border tax transactions between NetSuite OM and Salesforce CPQ, significantly reducing technical debt.',
                'Led system stabilization initiatives during peak tax filing seasons, implementing robust CI/CD practices and code optimizations to ensure 100% uptime with zero service disruptions.',
                'Modernized customer experience by implementing LWC UI/UX enhancements and complex CPQ logic, integrating third-party payment systems to accelerate accounts receivable cycles.'
            ]
        },
        {
            id: 2,
            role: 'Technical Support Engineer',
            company: 'Salesforce',
            period: 'Oct 2023 – May 2024',
            bullets: [
                'Facilitated rapid resolution of critical customer escalations within a high-impact technical support division.',
                'Diagnosed and resolved complex platform issues while ensuring minimal disruption to client Salesforce operations.',
                'Delivered expert support on OmniStudio, Vlocity CPQ, and Salesforce Industries Cloud solutions.',
                'Collaborated closely with core product development teams to triage and resolve platform bugs, directly contributing to product enhancement.',
                'Demonstrated platform expertise by advising enterprise clients on Salesforce best practices, configuration, and customizations.'
            ]
        },
        {
            id: 3,
            role: 'Salesforce Developer',
            company: 'CloudEspacio',
            period: 'Jan 2022 – Oct 2023',
            bullets: [
                'Engineered a high-transaction B2C Salesforce implementation serving millions of financial transactions.',
                'Gained deep functional domain expertise in complex financial services workflows.',
                'Consistently delivered 2 to 3 major business-critical features monthly under tight deadlines.',
                'Leveraged Sales Cloud, Experience Cloud, custom LWC, Platform Events, Apex Triggers, Flows, and REST APIs.',
                'Managed concurrent development modules efficiently under rigorous release schedules.',
                'Spearheaded backlog cleanup by identifying, debugging, and resolving critical legacy issues.',
                'Thrived under high-pressure scenarios to deliver reliable, robust resolutions.'
            ]
        },
        {
            id: 4,
            role: 'Salesforce Developer',
            company: 'TeamLease (Bajaj Finserv)',
            period: 'Apr 2021 – Nov 2021',
            bullets: [
                'Administered the Salesforce enterprise instance, executing all configuration, customization, and maintenance activities.',
                'Designed and maintained custom schemas, validation rules, approval processes, and workflows to optimize user experience.',
                'Executed complex data migrations, preserving data integrity and quality during high-volume record transfers.',
                'Streamlined business operations by designing automation pipelines via Flow, Process Builder, and Apex Triggers.'
            ]
        }
    ];

    projects = [
        {
            id: 1,
            title: 'Stronghill B2C Experience Portal',
            description: 'Architected and built interactive, customer-facing portals on Sales and Experience Cloud serving millions of B2C transactions. Developed custom LWC using Lightning Message Service (LMS), wire services, component lifecycle hooks, and lightning events to create high-performance dynamic UIs.',
            techStack: ['LWC', 'Apex', 'Experience Cloud', 'LMS', 'Platform Events']
        },
        {
            id: 2,
            title: 'Independent Tier Selection CPQ Framework',
            description: 'Designed and deployed an independent tier selection module inside Salesforce Revenue Cloud (CPQ). Optimized complex CPQ pricing/configuration rules and automated accounts receivable flows by integrating secure third-party payment systems.',
            techStack: ['Salesforce CPQ', 'Revenue Cloud', 'Apex', 'LWC', 'REST API']
        },
        {
            id: 3,
            title: 'Jira GenAI Agent Integration',
            description: 'Developed a custom Generative AI agent integrated with Jira to automate ticket analysis, clarify technical requirements, and streamline Agile team workflows, directly reducing team overhead and improving time-to-delivery.',
            techStack: ['Generative AI', 'REST API', 'Jira Integration', 'Apex']
        },
        {
            id: 4,
            title: 'POS Partner Community Portal',
            description: 'Configured and developed a secure partner community portal using Experience Cloud for Bajaj Finserv. Built custom automated workflows, approval processes, validation rules, and transactional Apex triggers to ensure seamless retail operations.',
            techStack: ['Experience Cloud', 'Sales Cloud', 'Apex Triggers', 'Flow Builder']
        }
    ];
}
