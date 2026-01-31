'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User, Smartphone, HelpCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Message sent successfully!');
            setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <div className="min-h-screen pt-32 pb-20 overflow-hidden">

            {/* Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen opacity-30 transform translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 blur-[100px] rounded-full mix-blend-screen opacity-20 transform -translate-x-1/4"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <span className="text-primary font-semibold tracking-wider uppercase text-lg mb-2 block">Get in Touch</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Let's Build An Awesome <br /> Project Together
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Have a project in mind? We'd love to hear from you. Send us a message and we'll reply as soon as possible.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">

                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <ScrollReveal delay={0.1}>
                            <div className="bg-surface/50 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm mb-1 font-medium">Address</p>
                                            <p className="text-white text-lg font-medium leading-relaxed">
                                                73/1 New Boundary Road,<br />
                                                Batticaloa, Sri Lanka 30000
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm mb-1 font-medium">Email Us</p>
                                            <a href="mailto:info@lushanth.com" className="text-white text-lg font-medium hover:text-primary transition-colors">
                                                info@lushanth.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 flex-shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm mb-1 font-medium">Call Anytime</p>
                                            <a href="tel:+94775386670" className="text-white text-lg font-medium hover:text-primary transition-colors">
                                                +94 77 538 6670
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm mb-1 font-medium">Office Hours</p>
                                            <p className="text-white text-lg font-medium">
                                                Mon – Fri: 8:30 AM – 5:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Map Snippet (Optional: Could be an image or real map) */}
                        <ScrollReveal delay={0.2} className="h-[300px] w-full relative rounded-3xl overflow-hidden border border-white/10">
                            {/* Placeholder for map - using a dark map style image or gradient */}
                            <div className="absolute inset-0 bg-[#1A1F36] flex items-center justify-center">
                                <div className="text-center p-6">
                                    <MapPin className="mx-auto text-primary mb-2 opacity-50" size={40} />
                                    <p className="text-gray-400">Map Integration</p>
                                    <span className="text-xs text-gray-500 block mt-2">(Google Maps iframe would go here)</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <ScrollReveal delay={0.2} className="h-full">
                            <div className="bg-surface/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/5 h-full">
                                <h3 className="text-3xl font-bold mb-2">Send us a Message</h3>
                                <p className="text-gray-400 mb-10">Fill out the form below and we will help you start your new project.</p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-[#0B0F19] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-600"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-[#0B0F19] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-600"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300 ml-1">Phone Number</label>
                                            <div className="relative">
                                                <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formState.phone}
                                                    onChange={handleChange}
                                                    className="w-full bg-[#0B0F19] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-600"
                                                    placeholder="+94 (77) 000-0000"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300 ml-1">Subject</label>
                                            <div className="relative">
                                                <HelpCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={formState.subject}
                                                    onChange={handleChange}
                                                    className="w-full bg-[#0B0F19] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-600"
                                                    placeholder="Project Inquiry"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-4 top-6 text-gray-500" size={20} />
                                            <textarea
                                                name="message"
                                                value={formState.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                className="w-full bg-[#0B0F19] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-600 resize-none"
                                                placeholder="Tell us about your project..."
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            'Sending...'
                                        ) : (
                                            <>
                                                Send Message <Send size={20} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </div>
    );
}
