
import { Code, Cloud, Smartphone, Globe, Shield, Zap, Database, Server, Cpu, Radio, BarChart, Lock } from 'lucide-react';

export const services = [
    {
        slug: 'web-development',
        title: 'Custom Web Development',
        icon: Globe,
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        shortDesc: 'Performance-obsessed websites built with Next.js and React.',
        fullDesc: 'We build blazingly fast, SEO-optimized, and highly interactive web applications using the latest modern web technologies. Our approach ensures your website is not just a digital brochure, but a powerful business tool.',
        features: ['Next.js App Router', 'Server Side Rendering', 'Interactive UI/UX', 'CMS Integration'],
        benefits: ['Higher Conversion Rates', 'Better Search Engine Rankings', 'Seamless User Experience']
    },
    {
        slug: 'mobile-app-development',
        title: 'Mobile App Development',
        icon: Smartphone,
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        shortDesc: 'Native iOS & Android apps with seamless user experiences.',
        fullDesc: 'Reach your customers on their most personal devices with our top-tier mobile application development services. We use React Native and Flutter to deliver near-native performance across both iOS and Android platforms from a single codebase.',
        features: ['Cross-Platform Compatibility', 'Offline Mode', 'Push Notifications', 'App Store Optimization'],
        benefits: ['Wider Audience Reach', 'Increased Customer Engagement', 'Brand Loyalty']
    },
    {
        slug: 'cloud-infrastructure',
        title: 'Cloud Infrastructure',
        icon: Cloud,
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        shortDesc: 'Scalable cloud solutions using AWS, Azure, and Google Cloud.',
        fullDesc: 'Migrate to the cloud with confidence. We design, deploy, and manage secure and scalable cloud architectures that grow with your business. Lower your operational costs while increasing reliability.',
        features: ['Cloud Migration Strategy', 'Serverless Architecture', 'Docker & Kubernetes', '24/7 Monitoring'],
        benefits: ['Cost Efficiency', 'High Availability', 'Disaster Recovery']
    },
    {
        slug: 'software-engineering',
        title: 'Enterprise Software',
        icon: Code,
        image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        shortDesc: 'Custom enterprise software to streamline operations.',
        fullDesc: 'We solve complex business problems with robust, scalable, and secure enterprise software solutions. From CRM to ERP systems, we build the backbone of your digital operations.',
        features: ['Microservices Architecture', 'Legacy System Modernization', 'API Development', 'Database Optimization'],
        benefits: ['Operational Efficiency', 'Data-Driven Insights', 'Automated Workflows']
    },
    {
        slug: 'cyber-security',
        title: 'Cyber Security',
        icon: Shield,
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        shortDesc: 'Advanced threat protection and security auditing.',
        fullDesc: 'Protect your digital assets with our comprehensive cybersecurity services. We perform penetration testing, vulnerability assessments, and implement hardened security protocols to keep your data safe.',
        features: ['Penetration Testing', 'Security Audits', 'Compliance (GDPR/HIPAA)', 'Incident Response'],
        benefits: ['Risk Mitigation', 'Regulatory Compliance', 'Brand Reputation Protection']
    },
    {
        slug: 'digital-marketing',
        title: 'Digital Marketing',
        icon: Zap,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        shortDesc: 'Data-driven strategies to amplify your brand presence.',
        fullDesc: 'Drive traffic and convert leads with our full-spectrum digital marketing services. We combine creativity with data analytics to deliver campaigns that generate real ROI.',
        features: ['SEO & SEM', 'Social Media Management', 'Content Marketing', 'Email Campaigns'],
        benefits: ['Increased Traffic', 'Higher Lead Gen', 'Brand Awareness']
    },
    {
        slug: 'data-analytics',
        title: 'Data Analytics',
        icon: BarChart,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        shortDesc: 'Turn raw data into actionable business insights.',
        fullDesc: 'Unlock the power of your data. We build custom dashboards and analytics pipelines that give you a 360-degree view of your business performance in real-time.',
        features: ['Business Intelligence', 'Data Warehousing', 'Predictive Analytics', 'Custom Dashboards'],
        benefits: ['Informed Decision Making', 'Trend Identification', 'Performance Tracking']
    },
    {
        slug: 'iot-solutions',
        title: 'IoT Solutions',
        icon: Radio,
        image: 'https://images.unsplash.com/photo-1558002038-109177381793?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        shortDesc: 'Connect physical devices to the digital world.',
        fullDesc: 'We develop end-to-end IoT solutions that connect your devices, sensors, and equipment to the cloud, enabling remote monitoring, control, and automation.',
        features: ['Firmware Development', 'MQTT Messaging', 'Edge Computing', 'Hardware Prototyping'],
        benefits: ['Real-time Monitoring', 'Predictive Maintenance', 'Process Automation']
    },
    {
        slug: 'blockchain-development',
        title: 'Blockchain Development',
        icon: Lock,
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        shortDesc: 'Decentralized solutions for trust and transparency.',
        fullDesc: 'Leverage the power of blockchain for secure, transparent, and tamper-proof transactions. We specialize in Smart Contracts, DApps, and private blockchain networks.',
        features: ['Smart Contracts', 'DeFi Applications', 'Tokenization', 'Private Blockchains'],
        benefits: ['Enhanced Security', 'Traceability', 'Trustless Transactions']
    },
    {
        slug: 'ai-machine-learning',
        title: 'AI & Machine Learning',
        icon: Cpu,
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        shortDesc: 'Intelligent algorithms to automate and predict.',
        fullDesc: 'Integrate artificial intelligence into your business processes. From chatbots to predictive models, we help you harness the power of AI to stay ahead of the curve.',
        features: ['NLP & Chatbots', 'Computer Vision', 'Recommendation Engines', 'Predictive Modeling'],
        benefits: ['Automation', 'Personalization', 'Innovation']
    },
    {
        slug: 'devops-services',
        title: 'DevOps Services',
        icon: Server,
        image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        shortDesc: 'Streamline your development and deployment pipelines.',
        fullDesc: 'Accelerate your software delivery with our DevOps expertise. We implement CI/CD pipelines, infrastructure as code, and automated testing to ensure rapid and reliable releases.',
        features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Configuration Management'],
        benefits: ['Faster Time to Market', 'Higher Code Quality', 'Reliable Releases']
    },
    {
        slug: 'database-management',
        title: 'Database Management',
        icon: Database,
        image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        shortDesc: 'Optimized database solutions for high performance.',
        fullDesc: 'Ensure your data is organized, accessible, and secure. We design, optimize, and manage various database systems including SQL, NoSQL, and NewSQL solutions.',
        features: ['Database Architecture', 'Performance Tuning', 'Backup & Recovery', 'Data Migration'],
        benefits: ['Data Integrity', 'High Performance', 'Scalability']
    }
];

export const projects = [
    {
        slug: 'fintech-dashboard',
        title: 'FinTech Analytics Dashboard',
        category: 'Web App',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'A comprehensive financial analytics platform for the banking sector.',
        challenge: 'The client needed a real-time view of millions of transactions with sub-second latency.',
        solution: 'We built a high-performance dashboard using Next.js and WebSockets, backed by a ClickHouse database for real-time analytics.',
        result: 'Reduced reporting time from hours to seconds and improved executive decision-making speed by 40%.'
    },
    {
        slug: 'ecommerce-app',
        title: 'Fashion E-Commerce App',
        category: 'Mobile App',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Mobile-first shopping experience with AI-driven recommendations.',
        challenge: 'Increasing cart abandonment rates and low user engagement on the legacy mobile web view.',
        solution: 'Developed a native iOS and Android app with Flutter, featuring an AI recommendation engine and one-click checkout.',
        result: '300% increase in mobile conversions and a 4.8-star average rating on the App Store.'
    },
    {
        slug: 'healthcare-portal',
        title: 'Patient Health Portal',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Secure patient management system compliant with HIPAA.',
        challenge: 'Legacy paper-based systems were causing errors and delays in patient care.',
        solution: 'Built a secure, HIPAA-compliant web portal allowing patients to schedule appointments, view records, and communicate with doctors.',
        result: 'Reduced administrative overhead by 60% and significantly improved patient satisfaction scores.'
    },
    {
        slug: 'logistics-tracker',
        title: 'Global Logistics Tracker',
        category: 'IoT & Cloud',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Real-time fleet tracking and management system.',
        challenge: 'Lack of visibility into global shipping containers was leading to lost inventory.',
        solution: 'Implemented IoT sensors on containers communicating via satellite to a cloud-based tracking platform.',
        result: '100% visibility of supply chain and $2M annual savings in lost inventory prevention.'
    },
    {
        slug: 'real-estate-crm',
        title: 'Luxury Real Estate CRM',
        category: 'Enterprise Software',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Custom CRM for managing high-net-worth real estate clients.',
        challenge: 'Generic CRMs were insufficient for the bespoke needs of the luxury market.',
        solution: 'Custom-built a CRM with virtual tour integrations, automated document generation, and client matching algorithms.',
        result: 'Agents doubled their closing rate within the first 6 months of adoption.'
    },
    {
        slug: 'edtech-platform',
        title: 'Adaptive Learning Platform',
        category: 'Web App',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'AI-powered education platform that adapts to student pace.',
        challenge: 'Static online courses resulted in low completion rates.',
        solution: 'Created an adaptive learning engine that modifies curriculum based on student performance in real-time.',
        result: 'Course completion rates jumped from 15% to 75%.'
    },
    {
        slug: 'crypto-exchange',
        title: 'Decentralized Exchange',
        category: 'Blockchain',
        image: 'https://images.unsplash.com/photo-1621504450168-38f6473126b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Secure platform for swapping tokens with low fees.',
        challenge: 'Users demanded a non-custodial way to trade tokens without high gas fees.',
        solution: 'Built a Layer-2 DEX with automated market makers (AMM) and yield farming features.',
        result: '$50M Total Value Locked (TVL) within the first month of launch.'
    },
    {
        slug: 'smart-home-hub',
        title: 'Smart Home Control Hub',
        category: 'IoT',
        image: 'https://images.unsplash.com/photo-1558002038-109177381793?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Centralized control for all smart home devices.',
        challenge: 'Fragmented ecosystem of smart devices made home automation difficult.',
        solution: 'Developed a universal hub and mobile app that unifies control of lights, locks, and thermostats.',
        result: 'Partnerships secured with 3 major appliance manufacturers.'
    },
    {
        slug: 'travel-booking-engine',
        title: 'Corporate Travel Engine',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Booking platform for large enterprise travel needs.',
        challenge: 'Companies were overspending on travel due to lack of policy enforcement.',
        solution: 'Built a booking engine with built-in policy checks, approval workflows, and expense integration.',
        result: 'Clients saved an average of 15% on travel spend annually.'
    },
    {
        slug: 'fitness-tracker-app',
        title: 'Social Fitness App',
        category: 'Mobile App',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Workout tracking with social competition features.',
        challenge: 'Users found solo workout apps boring and lacked motivation.',
        solution: 'Gamified the fitness experience with leaderboards, challenges, and social sharing.',
        result: '1M+ downloads and featured as "App of the Day" on App Store.'
    },
    {
        slug: 'energy-grid-monitor',
        title: 'Smart Grid Monitor',
        category: 'Data Analytics',
        image: 'https://images.unsplash.com/photo-1473341304170-5799d233d345?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Analytics for renewable energy distribution.',
        challenge: 'Utility provider struggled to balance load with intermittent renewable sources.',
        solution: 'Implemented predictive analytics keying off weather data to forecast energy production and demand.',
        result: 'Grid stability improved by 25% and reduced reliance on fossil fuel peaker plants.'
    },
    {
        slug: 'restaurant-pos',
        title: 'Cloud POS System',
        category: 'Enterprise Software',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'modern Point of Sale for hospitality chains.',
        challenge: 'Existing POS was crashing during peak hours and lacked cloud sync.',
        solution: 'Built a robust, offline-first cloud POS that syncs instantly when connectivity returns.',
        result: 'Zero downtime reported during Black Friday rush.'
    },
    {
        slug: 'legal-doc-automation',
        title: 'Legal AI Assistant',
        category: 'AI & Machine Learning',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'Automated contract review and generation.',
        challenge: 'Lawyers were spending too much time on routine contract reviews.',
        solution: 'Trained an NLP model to highlight risks and suggest standard clauses in contracts.',
        result: 'Contract review time cut by 70%, allowing lawyers to focus on high-value strategy.'
    }
];
