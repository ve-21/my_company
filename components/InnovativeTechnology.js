'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const ProgressBar = ({ label, percentage }) => (
    <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
            <span className="text-[#020420] font-bold text-lg">{label}</span>
            <span className="text-primary font-bold">{percentage}%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-primary"
            />
        </div>
    </div>
);

export default function InnovativeTechnology() {
    return (
        <>
            {/* Section 1: Transforming ideas into digital success */}
            <section className="py-24 bg-white relative overflow-hidden" suppressHydrationWarning>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                        {/* Left Column: Content */}
                        <ScrollReveal>
                            <div className="max-w-xl">
                                <h2 className="text-4xl md:text-6xl font-extrabold text-[#020420] mb-8 leading-[1.1]" suppressHydrationWarning>
                                    Transforming ideas into <br />
                                    <span className="text-[#020420]">digital success.</span>
                                </h2>

                                <p className="text-gray-500 text-lg mb-12 leading-relaxed">
                                    At Ve Enterprise, we turn your visions into reality with innovative IT solutions that drive efficiency, growth, and success.
                                </p>

                                <div className="space-y-2 mb-12">
                                    <ProgressBar label="IT Solution & Management" percentage={95} />
                                    <ProgressBar label="Website & App Development" percentage={90} />
                                    <ProgressBar label="SEO & Digital Marketing" percentage={95} />
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Right Column: Image Collage */}
                        <ScrollReveal className="relative">
                            <div className="relative w-full aspect-square md:aspect-auto md:h-[600px]">

                                {/* Decorative Dots - Top Left */}
                                <div className="absolute -top-10 -left-10 z-0 opacity-40">
                                    <div className="grid grid-cols-6 gap-3">
                                        {[...Array(24)].map((_, i) => (
                                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Top Image (Asymmetric Leaf Shape) */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-0 right-0 w-[80%] h-[75%] rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[20px] rounded-br-[20px] overflow-hidden border-8 border-white shadow-2xl z-10"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                        alt="Team Collaboration"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>

                                {/* Bottom Image (Opposite Asymmetric Shape) */}
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-0 left-0 w-[65%] h-[60%] rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px] overflow-hidden border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-20"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                        alt="Success Meeting"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>

                                {/* Decorative Dots - Bottom Right */}
                                <div className="absolute -bottom-10 -right-10 z-0 opacity-40">
                                    <div className="grid grid-cols-6 gap-3">
                                        {[...Array(24)].map((_, i) => (
                                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                    </div>

                    {/* Features Row - With Hover and Animations */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ScrollReveal delay={0.1}>
                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="flex items-start gap-5 p-6 rounded-[24px] transition-all duration-300 hover:bg-gray-50/80 group cursor-default border border-transparent hover:border-gray-100 hover:shadow-xl"
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                    <motion.div whileHover={{ rotate: 15 }}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0" /><circle cx="10" cy="8" r="5" /><path d="M22 20c0-3.37-2-6.19-5.02-7a5 5 0 0 0 0-6" /><path d="M16 21h4" /></svg>
                                    </motion.div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#020420] mb-2 group-hover:text-primary transition-colors">Highly Expert Team</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">Our skilled team delivers top-notch, responsive, and functional IT designs.</p>
                                </div>
                            </motion.div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="flex items-start gap-5 p-6 rounded-[24px] transition-all duration-300 hover:bg-gray-50/80 group cursor-default border border-transparent hover:border-gray-100 hover:shadow-xl"
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white transition-all duration-500 shadow-sm">
                                    <motion.div whileHover={{ rotate: 15 }}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headset"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5Z" /><path d="M21 16v2a2 2 0 0 1-2 2h-5" /><path d="M8.27 20a2 2 0 0 1-2-2" /></svg>
                                    </motion.div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#020420] mb-2 group-hover:text-[#3b82f6] transition-colors">24/7 Customer Service</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">Our support team is available 24/7 for quick resolutions.</p>
                                </div>
                            </motion.div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="flex items-start gap-5 p-6 rounded-[24px] transition-all duration-300 hover:bg-gray-50/80 group cursor-default border border-transparent hover:border-gray-100 hover:shadow-xl"
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                    <motion.div whileHover={{ rotate: 15 }}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-banknote"><rect width="20" height="12" x="2" y="6" rx="2" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" /></svg>
                                    </motion.div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#020420] mb-2 group-hover:text-indigo-600 transition-colors">Competitive Pricing</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">We offer cost-effective IT solutions without compromising quality.</p>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <hr className="border-gray-100" />
            </div>

            {/* Section 2: Innovative Technology for Advanced IT Solutions */}
            <section className="py-24 bg-white relative overflow-hidden" suppressHydrationWarning>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                        {/* Left Column: Image Collage (Reversed layout for visual variety) */}
                        <ScrollReveal className="relative order-2 lg:order-1">
                            <div className="relative w-full aspect-square md:aspect-auto md:h-[550px]">
                                {/* Decorative Dots */}
                                <div className="absolute -bottom-10 -left-10 z-0 opacity-40">
                                    <div className="grid grid-cols-6 gap-3">
                                        {[...Array(24)].map((_, i) => (
                                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Main Image (Asymmetric Leaf Shape) */}
                                <div className="absolute top-0 left-0 w-[80%] h-[80%] rounded-tl-[120px] rounded-br-[120px] rounded-tr-[30px] rounded-bl-[30px] overflow-hidden border-8 border-white shadow-2xl z-10">
                                    <Image
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                        alt="Innovation Team"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Secondary Image (Opposite Asymmetric Shape) */}
                                <div className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[20px] rounded-br-[20px] overflow-hidden border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-20">
                                    <Image
                                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                        alt="Advanced Solutions"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Right Column: Content */}
                        <ScrollReveal className="order-1 lg:order-2">
                            <div className="max-w-xl">
                                <h2 className="text-4xl md:text-5xl font-extrabold text-[#020420] mb-8 leading-tight" suppressHydrationWarning>
                                    Innovative Technology for <br />
                                    <span className="text-[#020420]">Advanced IT Solutions</span>
                                </h2>

                                <p className="text-[#020420] font-bold text-lg mb-6 leading-relaxed">
                                    At Ve Enterprise, we leverage cutting-edge technology to deliver tailored IT solutions that drive success.
                                </p>

                                <p className="text-gray-500 text-base mb-10 leading-relaxed">
                                    At Ve Enterprise, we deliver custom software solutions that are scalable, efficient, and tailored to your business needs, ensuring seamless integration and high performance.
                                </p>

                                <Link href="/about" className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:brightness-110 hover:shadow-primary/30 transition-all transform hover:-translate-y-1">
                                    More About Us
                                </Link>
                            </div>
                        </ScrollReveal>

                    </div>
                </div>
            </section>
        </>
    );
}
