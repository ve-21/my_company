'use client';

import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Thompson",
        role: "CEO, TechFlow",
        text: "The team transformed our legacy system into a high-performance cloud platform. Their attention to detail and engineering quality is unmatched.",
        rating: 5
    },
    {
        name: "James Chen",
        role: "Director, InnovateX",
        text: "We needed a partner who understood both design and deep tech. They delivered a product that not only looks stunning but scales effortlessly.",
        rating: 5
    },
    {
        name: "Emily Rodriguez",
        role: "Founder, StartUp A",
        text: "Outstanding communication and delivery. They acted more like a partner than a vendor. Highly recommended for any complex dev work.",
        rating: 5
    }
];

export default function TestimonialSlider() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="luxury-card p-8 flex flex-col justify-between"
                >
                    <div>
                        <div className="flex gap-1 text-yellow-500 mb-4">
                            {[...Array(t.rating)].map((_, r) => <Star key={r} size={16} fill="currentColor" />)}
                        </div>
                        <div className="mb-6 relative">
                            <MessageSquare size={40} className="text-primary/10 absolute -top-2 -left-2 z-0" />
                            <p className="relative z-10 text-gray-300 leading-usage italic">"{t.text}"</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                            {t.name.charAt(0)}
                        </div>
                        <div>
                            <p className="text-white font-medium text-sm">{t.name}</p>
                            <p className="text-xs text-gray-500">{t.role}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
