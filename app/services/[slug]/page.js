'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { services } from '@/lib/data';

export default function ServicePage({ params }) {
    const resolveParams = use(params);
    const { slug } = resolveParams;

    const service = services.find(s => s.slug === slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <div className="min-h-screen pt-32 pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Button */}
                <div className="mb-8">
                    <Link href="/services" className="inline-flex items-center text-gray-600 hover:text-primary transition-colors font-medium">
                        <ArrowLeft size={20} className="mr-2" /> Back to Services
                    </Link>
                </div>

                {/* Hero Image */}
                <div className="mb-12 w-full h-[400px] relative rounded-[40px] overflow-hidden shadow-2xl">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-10">
                        <div className="flex items-center gap-6 mb-4">
                            <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                                <Icon size={40} />
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-white">{service.title}</h1>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2">

                        {/* Overview Section */}
                        <section className="mb-16">
                            <h3 className="text-3xl font-bold text-[#020420] mb-6">Overview</h3>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                {service.fullDesc}
                            </p>
                        </section>

                        {/* Features Section */}
                        <section className="mb-16">
                            <h3 className="text-3xl font-bold text-[#020420] mb-8">Features</h3>
                            <div className="space-y-4">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/30 transition-colors">
                                        <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                                        <span className="font-semibold text-gray-800 text-lg">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Goal Section */}
                        <section className="mb-16">
                            <h3 className="text-3xl font-bold text-[#020420] mb-6">Goal</h3>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Our {service.title} services empower businesses with cutting-edge solutions designed to deliver exceptional results.
                                We combine creativity, functionality, and innovation to create solutions that not only meet your needs but exceed expectations.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        <span className="font-semibold text-gray-800">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl p-10 border border-primary/20">
                            <h3 className="text-3xl font-bold text-[#020420] mb-4">Don't hesitate to contact us</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                At Ve Enterprise, we are committed to exceptional service delivery and innovative solutions tailored to your business needs.
                            </p>
                            <Link href="/contact" className="inline-block bg-primary hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-primary/30">
                                Get in Touch
                            </Link>
                        </section>
                    </div>

                    {/* Sidebar - Other Services */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32">
                            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                                <h3 className="text-2xl font-bold text-[#020420] mb-6">Our Services</h3>
                                <div className="space-y-3">
                                    {services.map((s, idx) => (
                                        <Link
                                            key={idx}
                                            href={`/services/${s.slug}`}
                                            className={`block p-4 rounded-xl transition-all font-semibold ${s.slug === slug
                                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                                }`}
                                        >
                                            {s.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
