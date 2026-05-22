import { LightningElement } from 'lwc';

export default class Projects extends LightningElement {
    projects = [
        {
            id: 1,
            title: 'Stronghill B2C Experience Portal',
            description: 'Architected and built interactive, customer-facing portals on Sales and Experience Cloud serving millions of B2C transactions. Developed custom LWC using Lightning Message Service (LMS), wire services, component lifecycle hooks, and lightning events to create high-performance dynamic UIs.',
            techStack: ['LWC', 'Apex', 'Experience Cloud', 'LMS', 'Platform Events'],
            link: '#'
        },
        {
            id: 2,
            title: 'Independent Tier Selection CPQ Framework',
            description: 'Designed and deployed an independent tier selection module inside Salesforce Revenue Cloud (CPQ). Optimized complex CPQ pricing/configuration rules and automated accounts receivable flows by integrating secure third-party payment systems.',
            techStack: ['Salesforce CPQ', 'Revenue Cloud', 'Apex', 'LWC', 'REST API'],
            link: '#'
        },
        {
            id: 3,
            title: 'Jira GenAI Agent Integration',
            description: 'Developed a custom Generative AI agent integrated with Jira to automate ticket analysis, clarify technical requirements, and streamline Agile team workflows, directly reducing team overhead and improving time-to-delivery.',
            techStack: ['Generative AI', 'REST API', 'Jira Integration', 'Apex'],
            link: '#'
        },
        {
            id: 4,
            title: 'POS Partner Community Portal',
            description: 'Configured and developed a secure partner community portal using Experience Cloud for Bajaj Finserv. Built custom automated workflows, approval processes, validation rules, and transactional Apex triggers to ensure seamless retail operations.',
            techStack: ['Experience Cloud', 'Sales Cloud', 'Apex Triggers', 'Flow Builder'],
            link: '#'
        }
    ];
}
