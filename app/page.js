'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import LogoTicker from '@/components/LogoTicker';
import TestimonialSlider from '@/components/Testimonials';
import StatsSection from '@/components/StatsSection';
import InnovativeTechnology from '@/components/InnovativeTechnology';
import ProcessWorkflow from '@/components/ProcessWorkflow';
import RecentArticles from '@/components/RecentArticles';
import { services, projects } from '@/lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggeredChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  const [dbProjects, setDbProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        if (data.success) {
          setDbProjects(data.data.slice(0, 2));
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoadingProjects(false);
      }
    };
    fetchProjects();
  }, []);

  // Use DB projects if available, otherwise fallback to static data
  const displayProjects = dbProjects.length > 0 ? dbProjects : projects.slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-primary/20 blur-[120px] opacity-30 rounded-full mix-blend-screen transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] opacity-20 rounded-full mix-blend-screen"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "var(--grid-url)" }}></div>
      </div>

      {/* Hero Section - Text Left, Image Right */}
      <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)',
              borderRadius: '15px'
            }}
            className="text-left relative z-20 p-8 md:p-12 bg-[#0f172a]/90 border border-white/20 backdrop-blur-md overflow-hidden group hover:shadow-[0_0_60px_rgba(79,108,246,0.3)] transition-all duration-500"
          >
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-900/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/30 rounded-full blur-[80px] group-hover:bg-primary/50 transition-colors duration-700"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/30 rounded-full blur-[80px] group-hover:bg-purple-600/50 transition-colors duration-700"></div>

            <div className="relative z-10">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-8 backdrop-blur-md shadow-lg">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_#4ade80]"></span>
                Innovating the Future
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] drop-shadow-xl">
                Innovating <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 italic">the Future</span> <br />
                <span className="text-white">Scalable Software</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Built for Growth.</span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg text-gray-300 max-w-xl mb-10 font-light leading-relaxed drop-shadow-md">
                We don’t just write code; we build the digital backbone of your business. From enterprise-grade platforms to intuitive mobile apps, we deliver high-performance solutions that turn your vision into a competitive advantage.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary flex items-center gap-2 px-8 py-4 text-lg shadow-[0_0_30px_rgba(79,108,246,0.4)] hover:shadow-[0_0_50px_rgba(79,108,246,0.6)] transform hover:scale-105 transition-all">
                  Start a Project <ArrowRight size={20} />
                </Link>
                <Link href="/portfolio" className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all hover:scale-105">
                  View Work
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -15, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)',
              borderRadius: '15px'
            }}
            className="relative h-[400px] lg:h-[600px] w-full overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Team Collaboration"
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>

            {/* (Floating Stats Card Removed) */}
          </motion.div>
        </div>
      </section>

      {/* Logo Ticker / Trusted By Section */}
      <section className="border-y border-white/5 bg-black/20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <p className="text-center text-sm text-white/60 mb-8 uppercase tracking-[0.3em] font-medium">Trusted by Industry Leaders</p>
          <LogoTicker />
        </div>
      </section>

      {/* Stats Section - Positioned comfortably after Logo Ticker */}
      <StatsSection className="py-12 relative z-10" />

      {/* About / Impact Section - Matching 'Transforming ideas' from reference */}
      {/* Innovative Technology Section (New About) */}
      <InnovativeTechnology />

      {/* Services Grid */}
      <section className="py-24 relative z-10 bg-surface/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 md:flex md:justify-between md:items-end">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
                <p className="text-muted text-lg">Comprehensive technology solutions tailored for modern businesses.</p>
              </div>
              <Link href="/services" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                All Services <ArrowRight size={20} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, idx) => (
              <ScrollReveal key={idx} className="h-full">
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <div className="luxury-card p-8 group hover:bg-surface/80 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6">
                      <service.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted leading-relaxed flex-grow">{service.shortDesc}</p>
                    <div className="mt-8 flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                      Learn More <span className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">&rarr;</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/services" className="btn-primary inline-flex items-center gap-2">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects (Carousel Style) */}
      <section className="py-24 bg-surface/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Portfolio</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">Recent Success Stories</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayProjects.map((project, idx) => (
              <ScrollReveal key={project._id || idx} className="h-full" enableBlur={true}>
                <Link href={`/projects/${project.slug}`} className="block h-full relative overflow-hidden rounded-tl-[40px] rounded-br-[40px] rounded-tr-[10px] rounded-bl-[10px]">
                  <div className="relative h-[400px] w-full overflow-hidden border border-white/10 shadow-2xl group">
                    {/* Background Image */}
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />

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

          <div className="mt-12 text-center">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-white font-semibold border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 group">
              View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* New Illustrated Process Section */}
      <ProcessWorkflow />

      {/* Testimonials */}
      <section className="py-24 bg-surface/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Feedback</h2>
            </div>
            <TestimonialSlider />
          </ScrollReveal>
        </div>
      </section>

      {/* Recent Articles / Blog */}
      <RecentArticles />

      {/* Simple FAQ Accordion Placeholder */}
      <section className="py-24 bg-surface/20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              "How long does a typical project take?",
              "Do you provide post-launch support?",
              "What technologies do you specialize in?",
              "Can you take over an existing project?"
            ].map((q, i) => (
              <div key={i} className="p-6 rounded-2xl bg-background border border-white/5 hover:border-white/20 transition-colors cursor-pointer flex justify-between items-center group">
                <span className="font-medium text-white">{q}</span>
                <span className="text-gray-500 text-xl group-hover:text-white transition-colors">+</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief CTA */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full transform scale-75"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Scale?</h2>
            <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
              Let's turn your vision into a digital reality. Our team is ready to engineer your success.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-10 py-4 shadow-[0_0_40px_rgba(79,108,246,0.5)]">
              Get Your Free Quote
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
