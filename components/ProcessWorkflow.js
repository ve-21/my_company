'use client';

import Image from 'next/image';

export default function ProcessWorkflow() {
    const steps = [
        {
            id: '01',
            title: 'Initiation & Planning',
            desc: 'We are leaders in creating and advancing new technology. We define the roadmap and ensure every step is aligned with your goals.',
            image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: '02',
            title: 'Execution & Development',
            desc: 'We turn ideas into reliable solutions that drive growth. Our engineering team builds with precision and scale in mind.',
            image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: '03',
            title: 'Testing & Maintenance',
            desc: 'We ensure quality with ongoing testing and maintenance. Deployment is smooth, secure, and monitored 24/7.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ];

    return (
        <section className="py-24 bg-white relative z-50" suppressHydrationWarning>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title without ScrollReveal to ensure visibility */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-[#020420] mb-4 tracking-tight" style={{ color: '#020420' }} suppressHydrationWarning>
                        Our process for driving <br /> business growth.
                    </h2>
                </div>

                <div className="relative mt-24">
                    {/* Dashed Connector Line */}
                    <div className="hidden md:block absolute top-[165px] left-0 w-full h-px border-t-2 border-dashed border-gray-200 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center">

                                {/* Image Container */}
                                <div className="mb-12 w-full h-[250px] relative rounded-tr-[50px] rounded-bl-[50px] rounded-tl-[16px] rounded-br-[16px] overflow-hidden shadow-2xl border border-gray-100">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover"
                                        priority={true}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>

                                {/* Number Bubble */}
                                <div className="w-14 h-14 rounded-full bg-[#3b82f6] text-white flex items-center justify-center font-bold text-xl mb-10 shadow-[0_10px_30px_rgba(59,130,246,0.5)] ring-8 ring-white z-20">
                                    {step.id}
                                </div>

                                {/* Text Content with forced colors */}
                                <h3 className="text-2xl font-black text-[#020420] mb-4" style={{ color: '#020420' }} suppressHydrationWarning>{step.title}</h3>
                                <p className="text-gray-600 text-lg font-bold leading-relaxed max-w-xs mx-auto" style={{ color: '#4b5563' }} suppressHydrationWarning>
                                    {step.desc}
                                </p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
