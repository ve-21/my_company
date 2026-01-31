'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useState, useEffect } from 'react';

export default function PortfolioPage() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('/api/projects');
                const data = await res.json();
                if (data.success) {
                    setProjects(data.data);
                }
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <ScrollReveal>
                    <div className="text-center mb-20">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Work</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-2">Recent Projects We finished</h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            A showcase of our recent technical achievements and digital transformations.
                        </p>
                    </div>
                </ScrollReveal>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {projects.map((project, idx) => (
                            <ScrollReveal key={project._id || idx} className="h-full group">
                                <Link href={`/projects/${project.slug}`} className="block h-full relative overflow-hidden rounded-tl-[40px] rounded-br-[40px] rounded-tr-[10px] rounded-bl-[10px]">
                                    <div className="relative h-[450px] w-full overflow-hidden border border-white/10 shadow-2xl">
                                        {/* Background Image */}
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Default Dark Gradient (Always Visible) */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-300"></div>

                                        {/* Hover Overlay - Blue Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-[#020420]/80 via-primary/80 to-blue-600/90 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] flex flex-col items-center justify-center">

                                            {/* Center Icon Button */}
                                            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-300 delay-75 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                                                <ArrowUpRight className="text-primary w-8 h-8 font-bold" strokeWidth={3} />
                                            </div>

                                            {/* Bottom Text */}
                                            <div className="absolute bottom-10 left-0 w-full text-center px-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                                <p className="text-blue-100 font-medium text-lg uppercase tracking-wide">{project.category}</p>
                                            </div>
                                        </div>

                                        {/* Default Visible Title (Hidden on Hover) */}
                                        <div className="absolute bottom-8 left-8 right-8 transition-opacity duration-300 group-hover:opacity-0">
                                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                            <p className="text-primary text-sm font-bold uppercase tracking-wider mt-1">{project.category}</p>
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
