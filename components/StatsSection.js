'use client';

import { useEffect, useRef } from 'react';
import { ThumbsUp, Trophy, Briefcase, Users } from 'lucide-react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

function Counter({ value, className }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 10,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Extract number and suffix (e.g., "120+" -> 120 and "+")
    const numericValue = parseInt(value, 10);
    const suffix = value.replace(numericValue.toString(), '');

    useEffect(() => {
        if (isInView) {
            motionValue.set(numericValue);
        }
    }, [isInView, motionValue, numericValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} className={className} suppressHydrationWarning>0{suffix}</span>;
}

export default function StatsSection({ className = "-mt-24" }) {
    const stats = [
        { icon: ThumbsUp, value: '120+', label: 'Happy Clients' },
        { icon: Trophy, value: '154+', label: 'Finished Projects' },
        { icon: Briefcase, value: '15+', label: 'Skilled Experts' },
        { icon: Users, value: '99%', label: 'Clients Satisfaction' },
    ];

    return (
        <section className={`relative z-20 w-full px-4 md:px-0 ${className}`}>
            <ScrollReveal className="w-full max-w-[1400px] mx-auto">
                <div className="bg-[#020420] text-white rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px] p-12 md:p-16 shadow-2xl relative overflow-hidden">

                    {/* Decorative Background Shape */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/10 gap-8 md:gap-0">
                        {stats.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center px-4">
                                <div className="w-20 h-20 bg-[#3b82f6] rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg hover:scale-110 transition-transform duration-300">
                                    <item.icon size={36} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 mb-2">
                                    <Counter value={item.value} />
                                </h3>
                                <p className="text-gray-400 font-medium uppercase tracking-wide text-sm">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
