'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (pathname && pathname.startsWith('/admin')) {
        return null;
    }

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${scrolled ? 'bg-[#020420]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* 1. Logo Left */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <span className="text-4xl font-bold tracking-tighter text-white leading-none group-hover:text-primary transition-colors">ꪜꫀ</span>
                        </Link>
                    </div>

                    {/* 2. Centered Navigation Links */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <div className="flex items-center space-x-14">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Services', href: '/services' },
                                { name: 'Portfolio', href: '/portfolio' },
                                { name: 'Blog', href: '/blog' }
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-300 hover:text-white transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* 3. Right CTA Button */}
                    <div className="hidden md:flex items-center">
                        <Link href="/contact" className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 text-base shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] animate-pulse hover:animate-none">
                            Kickstart Project <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#020420] border-t border-white/10 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Services', href: '/services' },
                                { name: 'Portfolio', href: '/portfolio' },
                                { name: 'Blog', href: '/blog' }
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block text-lg font-medium text-white hover:text-primary transition-colors py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="block w-full text-center bg-white text-black font-bold py-3.5 rounded-xl hover:bg-primary hover:text-white transition-colors mt-6"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Kickstart Project
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
