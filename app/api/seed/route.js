import dbConnect from '@/lib/mongodb';
import Post from '@/models/Post';
import Project from '@/models/Project';
import { NextResponse } from 'next/server';

const blogPosts = [
    {
        category: 'Development',
        date: '2025-01-15',
        title: 'Building Scalable Architectures with Next.js 15',
        excerpt: 'Explore how Ve Enterprise leverages the latest Next.js features to build ultra-fast, scalable web applications for global brands.',
        coverImage: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        slug: 'building-scalable-nextjs-15',
        content: `
            <h2>The New Era of Web Development</h2>
            <p>At Ve Enterprise, we are constantly pushing the boundaries of what is possible on the web. Next.js 15 brings revolutionary changes to how we handle data fetching and server-side rendering.</p>
            <p>Our engineering team has already migrated several enterprise-grade platforms to this new version, resulting in a 40% improvement in First Contentful Paint (FCP) and a much smoother developer experience.</p>
            <blockquote>"Scalability isn't just about handling traffic; it's about maintaining performance as complexity grows."</blockquote>
            <p>Key features we are exploring include the improved partial pre-rendering and the new caching heuristics that allow for more predictable application behavior.</p>
        `,
        author: 'Ve Tech Team'
    },
    {
        category: 'UI/UX Design',
        date: '2025-01-20',
        title: 'The Psychology of Color in Modern Enterprise Software',
        excerpt: 'How Ve Enterprise uses data-driven design to create software that reduces user fatigue and increases productivity.',
        coverImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        slug: 'psychology-of-color-uiux',
        content: `
            <h2>Design That Works</h2>
            <p>Enterprise software doesn't have to be boring or difficult to use. In fact, at Ve Enterprise, we believe that the more complex the task, the more intuitive the interface must be.</p>
            <p>Color plays a vital role in this. By using high-contrast themes for critical alerts and soft, balanced palettes for analytical dashboards, we guide the user's focus where it matters most.</p>
            <p>Our recent user testing showed that a custom-tailored dark mode, similar to the one on this website, can reduce eye strain for power users by over 60% during 8-hour workdays.</p>
        `,
        author: 'Ve Design Studio'
    },
    {
        category: 'Innovation',
        date: '2025-01-28',
        title: 'Beyond the Cloud: The Rise of Edge Computing',
        excerpt: 'Why local processing is becoming the next big hurdle for enterprise digital transformation and how Ve Enterprise is leading the way.',
        coverImage: 'https://images.unsplash.com/photo-1558494949-ef8b5656d8d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        slug: 'rise-of-edge-computing',
        content: `
            <h2>Processing at the Speed of Light</h2>
            <p>The traditional cloud model is reaching its latency limits. For real-time applications like IoT and autonomous systems, milliseconds matter. This is where Edge Computing comes in.</p>
            <p>Ve Enterprise is currently implementing Edge-first solutions for logistics clients, allowing them to process routing data on-site, reducing latency from 200ms to under 10ms.</p>
            <p>This shift represents a fundamental change in how we architect distributed systems, moving logic closer to the data source.</p>
        `,
        author: 'Ve Innovation Lab'
    }
];

const projectsData = [
    {
        slug: 'nexus-banking-platform',
        title: 'Nexus Banking Platform',
        category: 'FinTech',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'A revolutionary core banking system built for the digital age, handling millions of daily transactions.',
        content: 'Ve Enterprise developed Nexus from the ground up using a microservices architecture. It includes real-time fraud detection, automated compliance reporting, and a seamless mobile experience for retail customers.',
        client: 'Nexus Finance Group',
        completionDate: 'December 2024',
        isFeatured: true
    },
    {
        slug: 'astra-logistics-ai',
        title: 'Astra Logistics AI',
        category: 'AI / Logistics',
        image: 'https://images.unsplash.com/photo-1586528116311-ad86d3767cc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'AI-driven route optimization and inventory management system for international shipping.',
        content: 'Using advanced machine learning models, Ve Enterprise built a system that reduced fuel consumption by 15% and improved delivery accuracy by 22% for a fleet of over 5,000 vehicles.',
        client: 'Global Shipping Co.',
        completionDate: 'October 2024',
        isFeatured: true
    },
    {
        slug: 'horizon-smart-city',
        title: 'Horizon Smart City Portal',
        category: 'Public Sector',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        description: 'A centralized digital hub for city residents to access services, report issues, and participate in governance.',
        content: 'This multi-platform portal connects city departments with over 2 million residents. It features accessible design, integrated payment gateways, and real-time transit tracking.',
        client: 'Metro City Council',
        completionDate: 'November 2024',
        isFeatured: false
    }
];

export async function GET() {
    await dbConnect();

    try {
        // Clear existing data
        await Post.deleteMany({});
        await Project.deleteMany({});

        // Insert new data
        const createdPosts = await Post.insertMany(blogPosts);
        const createdProjects = await Project.insertMany(projectsData);

        return NextResponse.json({
            success: true,
            message: 'Database seeded successfully with Ve Enterprise samples',
            postsCount: createdPosts.length,
            projectsCount: createdProjects.length
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}
