'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Target, Lightbulb, Users, Award, ShieldCheck, Zap } from 'lucide-react';
import StatsSection from '@/components/StatsSection';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-[#020420] text-white">

            {/* Background Elements - Simplified */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-[#020420]">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: "var(--grid-url)" }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Intro Section - No animation for immediate visibility */}
                <div className="text-center mb-20">
                    <span className="text-primary font-semibold tracking-wider uppercase text-lg mb-2 block" suppressHydrationWarning>About Ve Enterprise</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" suppressHydrationWarning>
                        Elevating Digital <br /> <span className="text-primary italic">Transformation</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed" suppressHydrationWarning>
                        We are more than just a software company. We are a team of visionary engineers and designers dedicated to building the high-performance foundations of the modern digital economy.
                    </p>
                </div>

                {/* Story / Mission Grid */}
                <section className="py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                        {/* Image Composition */}
                        <div className="relative h-[600px] w-full">
                            <div className="absolute top-0 right-0 w-[85%] h-[80%] rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[20px] rounded-br-[20px] overflow-hidden border border-white/10 z-10">
                                <Image
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Collaboration at Ve Enterprise"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute bottom-10 left-0 w-[55%] h-[45%] rounded-tl-[60px] rounded-br-[60px] rounded-tr-[16px] rounded-bl-[16px] overflow-hidden border-4 border-[#020420] shadow-2xl z-20">
                                <Image
                                    src="https://images.unsplash.com/photo-1622675363211-6579044c734b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Technical Excellence"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative Dot Pattern */}
                            <div className="absolute -bottom-10 -left-10 z-0 opacity-20">
                                <div className="w-40 h-40" style={{ backgroundImage: "var(--grid-url)" }}></div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Journey & Philosophy</h2>
                            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                                Founded in 2024, Ve Enterprise emerged from a desire to redefine how businesses interact with technology. We saw a world of cluttered, slow, and overly complex systems, and decided to build something better.
                            </p>
                            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                Our philosophy is simple: <strong>Excellence by Design</strong>. Every line of code we write and every pixel we place is part of a larger strategy to drive measurable growth and operational efficiency for our partners.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                {[
                                    { text: "Architectural Integrity", icon: ShieldCheck },
                                    { text: "Rapid Deployment", icon: Zap },
                                    { text: "User-Centered Logic", icon: Users },
                                    { text: "Global Standards", icon: Award }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="font-semibold text-white">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-8 bg-surface/30 backdrop-blur-md border-l-4 border-primary rounded-r-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                                <p className="text-white italic text-xl relative z-10 leading-relaxed">
                                    "Innovation isn't just about the new; it's about the necessary. We build what businesses need to thrive in an unpredictable future."
                                </p>
                                <p className="text-sm text-primary mt-4 font-black uppercase tracking-[0.2em] relative z-10">— Leadership Team</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section with proper context */}
                <div className="py-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">Metrics that Matter</h2>
                    </div>
                    <StatsSection className="mt-0" />
                </div>

                {/* Detailed Values & Impact */}
                <section className="py-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Vision */}
                        <div className="bg-surface/40 backdrop-blur-sm p-12 rounded-[40px] border border-white/5 hover:border-primary/30 transition-all duration-500 h-full flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
                                <Target size={48} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                To be the global benchmark for technical craftsmanship, where every digital product is a masterpiece of efficiency and security.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-surface/40 backdrop-blur-sm p-12 rounded-[40px] border border-white/5 hover:border-purple-500/30 transition-all duration-500 h-full flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-3xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-8 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 shadow-xl">
                                <Lightbulb size={48} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                To empower ambitious brands by engineering the complex digital infrastructures that enable them to scale fearlessly.
                            </p>
                        </div>

                        {/* Why Us? */}
                        <div className="bg-surface/40 backdrop-blur-sm p-12 rounded-[40px] border border-white/5 hover:border-blue-400/30 transition-all duration-500 h-full flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-3xl bg-blue-400/10 flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-400 group-hover:text-white transition-all duration-500 shadow-xl">
                                <ShieldCheck size={48} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6">Our Values</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Uncompromising quality, radical transparency, and a relentless focus on the user's end goal. We don't just build, we partner.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team & Culture CTA */}
                <section className="py-24 text-center">
                    <div className="bg-gradient-to-br from-[#0a0f25] to-[#020420] rounded-[60px] p-12 md:p-24 border border-white/10 relative overflow-hidden group">
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to evolve?</h2>
                            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                                Our experts are ready to translate your business goals into technical reality. Explore our team or get in touch today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link href="/team" className="btn-primary text-lg px-12 py-5 shadow-2xl">
                                    Meet our Experts
                                </Link>
                                <Link href="/contact" className="px-12 py-5 rounded-2xl border border-white/20 font-bold hover:bg-white/5 transition-all">
                                    Partner with Us
                                </Link>
                            </div>
                        </div>

                        {/* Dynamic Background Elements */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors"></div>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
                    </div>
                </section>

            </div>
        </div>
    );
}
