'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LogoTicker() {
    const logos = [
        { name: "Next.js", src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
        { name: "React", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { name: "Tailwind", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
        { name: "Vercel", src: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
        { name: "AWS", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Google Cloud", src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
    ];

    // Triple the logos to ensure seamless looping
    const tickerItems = [...logos, ...logos, ...logos, ...logos];

    return (
        <div className="w-full py-6 overflow-hidden flex items-center relative">
            {/* Gradient Masks for smooth fade */}
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

            <motion.div
                className="flex gap-16 items-center flex-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear"
                }}
            >
                {tickerItems.map((logo, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 flex-shrink-0 min-w-[120px] group transition-all duration-300">
                        {/* Name on Top */}
                        <span className="text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-primary transition-colors">
                            {logo.name}
                        </span>

                        {/* Image Below Name */}
                        <div className="relative w-12 h-12 opacity-80 group-hover:opacity-100 transition-all duration-500">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
