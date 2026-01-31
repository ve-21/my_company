'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, CheckCircle2, Facebook, Instagram, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ProjectPage({ params }) {
    const resolveParams = use(params);
    const { slug } = resolveParams;

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await fetch(`/api/projects/slug/${slug}`);
                const data = await res.json();
                if (data.success) {
                    setProject(data.data);
                } else {
                    setProject(null);
                }
            } catch (error) {
                console.error('Error fetching project:', error);
                setProject(null);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchProject();
        }
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#020420]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
            </div>
        );
    }

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-32 pb-20 bg-[#020420]">

            {/* Background pattern */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "var(--grid-url)" }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* 1. Header Section */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <Link href="/portfolio" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 text-sm font-medium tracking-wide uppercase">
                        <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
                    </Link>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                        {project.title}
                    </h1>
                    <div className="flex justify-center gap-3">
                        <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
                            {project.category}
                        </span>
                    </div>
                </div>

                {/* 2. Hero Image */}
                <div className="mb-20">
                    <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020420] via-transparent to-transparent opacity-60"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* 3. Main Content Content */}
                    <div className="lg:col-span-8 space-y-16">
                        {/* Project Overview */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-primary pl-6">Project Overview</h2>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                {project.description}
                                <br /><br />
                                Designed for a smooth user experience, the solution represents the brand's core values while ensuring effortless navigation and accessibility across all devices.
                            </p>
                        </div>

                        {/* The Challenge */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-primary pl-6">The Challenge</h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                {project.challenge}
                            </p>

                            {/* Feature List (Simulated based on typical content) */}
                            <div className="space-y-4">
                                {[
                                    "Showcases the authentic experience with high-quality imagery.",
                                    "Features a user-friendly design for easy navigation.",
                                    "Detailed descriptions to inform and engage users.",
                                    "Enhanced mobile responsiveness for seamless access."
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <p className="text-gray-300">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Final Results */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-primary pl-6">Final Results</h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                {project.solution}
                            </p>
                            <div className="bg-surface/30 p-8 rounded-2xl border border-white/5">
                                <p className="text-xl italic text-white font-medium">"{project.result}"</p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Sidebar Details */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-surface/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-colors">
                                <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">Project Details</h3>

                                <div className="space-y-6">
                                    <div>
                                        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Client</p>
                                        <p className="text-white font-medium">{project.client || 'Confidential Client'}</p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Service</p>
                                        <p className="text-white font-medium">{project.category}</p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Project Link</p>
                                        <a href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline flex items-center gap-1">
                                            Visit Live Site <Globe size={14} />
                                        </a>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Share</p>
                                        <div className="flex gap-4 mt-2">
                                            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                                                <Facebook size={18} />
                                            </button>
                                            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                                                <Instagram size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary to-purple-600 rounded-3xl p-8 text-center text-white">
                                <h3 className="text-2xl font-bold mb-4">Have a similar project?</h3>
                                <p className="text-white/80 mb-6 text-sm">Let's discuss how we can help you achieve your goals.</p>
                                <Link href="/contact" className="inline-flex items-center justify-center bg-white text-primary font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors w-full">
                                    Get in Touch <ArrowRight size={16} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. Bottom CTA */}
                <div className="mt-32 mb-16">
                    <div className="bg-surface/30 border border-white/5 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Don't hesitate to contact us</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
                                At our IT solution company, we are committed to exceptional results. Let's build something amazing together.
                            </p>
                            <Link href="/contact" className="btn-primary text-lg px-10 py-4 shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                                Start Your Project
                            </Link>
                        </div>

                        {/* Decorative blobs */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3"></div>
                    </div>
                </div>

            </div>
        </div>
    );
}
