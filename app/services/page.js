'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Home as HomeIcon, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { services } from '@/lib/data';

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-[#020420] text-white">

            {/* Page Header (Breadcrumbs + Title) */}
            <div className="pt-40 pb-20 bg-[#020420] border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                        <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors">
                            <HomeIcon size={14} /> Home
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-white font-medium">Services</span>
                    </nav>
                    <ScrollReveal>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase italic">
                            Services <span className="text-primary">we offer</span>
                        </h1>
                        <div className="w-24 h-1.5 bg-primary rounded-full"></div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Main Content */}
            <div className="py-24 bg-[#0a0f25]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Intro Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                We help your business <br />
                                <span className="text-primary italic">reach new heights</span>
                            </h2>
                            <p className="text-gray-400 text-xl leading-relaxed mb-10">
                                At Ve Enterprise, we offer a comprehensive suite of IT services designed to streamline your operations, protect your data, and drive growth. Our expert team leverages the latest technology to create custom solutions that fit your unique business needs.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {['24/7 Expert Support', 'Scalable Solutions', 'Innovative Design', 'Performance Focused'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="bg-primary/20 p-1 rounded-full">
                                            <CheckCircle2 size={20} className="text-primary" />
                                        </div>
                                        <span className="font-bold text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                        <ScrollReveal className="relative h-[450px] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Team Working"
                                fill
                                className="object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020420] to-transparent opacity-40"></div>
                        </ScrollReveal>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {services.map((service, idx) => (
                            <ScrollReveal key={idx}>
                                <Link href={`/services/${service.slug}`} className="group block h-full">
                                    <div className="luxury-card p-10 bg-[#1A1F36]/50 border border-white/5 hover:border-primary/50 transition-all duration-500 h-full flex flex-col md:flex-row gap-8 items-start backdrop-blur-sm relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                        <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 flex-shrink-0 border border-white/10">
                                            <service.icon size={40} strokeWidth={1.5} />
                                        </div>

                                        <div className="flex-grow">
                                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors text-white">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-400 group-hover:text-gray-200 leading-relaxed mb-8 transition-colors">
                                                {service.fullDesc.split('.')[0]}. {service.fullDesc.split('.')[1]}. We build the high-performance foundations for your digital success.
                                            </p>
                                            <div className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all">
                                                LEARN MORE <ArrowRight size={20} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Working Process Section */}
                    <div className="mt-40 text-center mb-20 bg-[#020420]/50 py-20 rounded-[60px] border border-white/5">
                        <ScrollReveal>
                            <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Working Process</span>
                            <h2 className="text-5xl font-extrabold mt-4 mb-16 text-white">How we work for you</h2>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-10">
                            {[
                                { step: '01', title: 'Initiation & Planning', color: 'bg-blue-600' },
                                { step: '02', title: 'Execution & Development', color: 'bg-primary' },
                                { step: '03', title: 'Testing & Launch', color: 'bg-indigo-600' },
                                { step: '04', title: 'Support & Maintenance', color: 'bg-purple-600' }
                            ].map((step, i) => (
                                <ScrollReveal key={i} delay={i * 0.1}>
                                    <div className="relative p-10 text-center bg-white/5 border border-white/5 rounded-[40px] group hover:bg-white/10 transition-all duration-500 h-full">
                                        <div className={`w-16 h-16 ${step.color} text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 group-hover:rotate-12 transition-transform shadow-lg shadow-black/50`}>
                                            {step.step}
                                        </div>
                                        <h4 className="text-xl font-bold mb-3 text-white">{step.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">We ensure every phase of your project is handled with precision and care.</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <ScrollReveal className="mt-40">
                        <div className="bg-primary rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden group">
                            <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full group-hover:scale-110 transition-transform duration-1000"></div>

                            <h2 className="relative z-10 text-5xl md:text-7xl font-black mb-8 leading-[1.1]">
                                Ready to start your <br />
                                <span className="text-white italic opacity-80 font-light">next digital project?</span>
                            </h2>
                            <p className="relative z-10 text-white/80 text-xl max-w-2xl mx-auto mb-12 font-medium">
                                Contact us today to learn more about how our IT services can help your business reach its full potential.
                            </p>
                            <Link href="/contact" className="relative z-10 inline-flex items-center gap-3 bg-white text-primary px-12 py-5 rounded-full font-bold text-xl hover:bg-[#020420] hover:text-white transition-all transform hover:-translate-y-2 shadow-2xl">
                                Get In Touch <ArrowRight />
                            </Link>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </div>
    );
}
