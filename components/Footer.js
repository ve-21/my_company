'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, Clock, ArrowUp } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (pathname && pathname.startsWith('/admin')) {
        return null;
    }

    return (
        <footer className="bg-[#020420] text-white pt-20 pb-8 relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Contact Banner Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    <div className="bg-[#1A1F36] border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <Phone className="text-white" size={24} />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm mb-1">Call anytime</p>
                            <p className="text-white font-bold text-lg">+94 77-425-2727</p>
                        </div>
                    </div>

                    <div className="bg-[#1A1F36] border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail className="text-white" size={24} />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm mb-1">Email address</p>
                            <p className="text-white font-bold text-lg break-all">vithuve21@gmail.com</p>
                        </div>
                    </div>

                    <div className="bg-[#1A1F36] border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <Clock className="text-white" size={24} />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm mb-1">Office Hours</p>
                            <p className="text-white font-bold text-lg">8:30 AM – 5:00 PM</p>
                        </div>
                    </div>
                </div>

                {/* Main Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 lg:mb-24">

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Our Team', href: '/team' },
                                { name: 'Pricing', href: '/pricing' },
                                { name: 'Blogs', href: '/blog' },
                                { name: 'Contact Us', href: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Services</h3>
                        <ul className="space-y-4">
                            {[
                                'UI/UX Design', 'App Development', 'Digital Marketing',
                                'Web Development', 'Cyber Security'
                            ].map((service) => (
                                <li key={service} className="text-gray-300 hover:text-primary transition-colors text-sm font-medium cursor-pointer">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Information</h3>
                        <ul className="space-y-4">
                            {['Working Process', 'Privacy Policy', 'Terms & Conditions', 'Faqs'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Subscribe Our Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            Get ready to work together for the better solution for your business
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-lg bg-white border-0 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary outline-none"
                            />
                            <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-primary/30">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center relative">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        Copyright © {new Date().getFullYear()} Ve Enterprise. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                            {[Facebook, Linkedin, Twitter, Instagram].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-lg bg-[#1A1F36] hover:bg-primary flex items-center justify-center text-white transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>

                        {/* Back to Top Button */}
                        <button
                            onClick={scrollToTop}
                            className="w-10 h-10 rounded-full bg-primary hover:bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-1 ml-4"
                        >
                            <ArrowUp size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
