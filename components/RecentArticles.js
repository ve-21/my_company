'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

import { useState, useEffect } from 'react';

export default function RecentArticles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await fetch('/api/posts');
                const data = await res.json();
                if (data.success) {
                    // Take the first 2-3 for the "Recent" section
                    setArticles(data.data.slice(0, 2));
                }
            } catch (error) {
                console.error('Error fetching blog articles:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);
    return (
        <section className="py-24 bg-transparent border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <ScrollReveal>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white max-w-lg leading-tight">
                            Recent blog & articles <br /> about technology
                        </h2>
                        <Link href="/blog" className="hidden md:inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            View All Posts
                        </Link>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Left: Featured Large Article */}
                    {loading ? (
                        <div className="h-[500px] flex justify-center items-center bg-surface/50 rounded-3xl border border-white/5">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
                        </div>
                    ) : articles.length > 0 ? (
                        <ScrollReveal className="h-full">
                            <Link href={`/blog/${articles[0].slug}`} className="group relative block h-full min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-3xl cursor-pointer border border-white/10">
                                <Image
                                    src={articles[0].coverImage || articles[0].image || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c'}
                                    alt={articles[0].title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                                    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-white uppercase bg-primary rounded-full">
                                        {articles[0].category}
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                                        {articles[0].title}
                                    </h3>
                                    <div className="flex items-center text-gray-300 text-sm">
                                        <span>{new Date(articles[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                        <span className="mx-2">•</span>
                                        <span>{articles[0].readTime || '5 min read'}</span>
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ) : (
                        <div className="h-[500px] flex justify-center items-center bg-surface/50 rounded-3xl border border-white/5">
                            <p className="text-gray-500">No featured articles available.</p>
                        </div>
                    )}

                    {/* Right: List of Articles */}
                    <div className="flex flex-col gap-8 h-full">
                        {loading ? (
                            <div className="flex justify-center items-center h-full">
                                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-primary"></div>
                            </div>
                        ) : articles.length > 1 ? (
                            articles.slice(1).map((article, idx) => (
                                <ScrollReveal key={article._id || idx} delay={idx * 0.1} className="flex-1">
                                    <Link href={`/blog/${article.slug}`} className="flex flex-col md:flex-row gap-6 p-6 h-full bg-surface border border-white/5 rounded-3xl hover:border-white/20 transition-colors duration-300 group">
                                        {/* Image Wrapper */}
                                        <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0 overflow-hidden rounded-2xl">
                                            <Image
                                                src={article.coverImage || article.image || 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0'}
                                                alt={article.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col justify-center py-2">
                                            <div className="flex items-center text-sm text-gray-400 mb-2">
                                                <span className="font-medium text-gray-300">{article.category}</span>
                                                <span className="mx-2">•</span>
                                                <span>{new Date(article.date).toLocaleDateString()}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-primary transition-colors transition-colors">
                                                {article.title}
                                            </h3>
                                            <div className="inline-flex items-center text-primary font-semibold group/link mt-auto">
                                                Read More
                                                <ArrowRight size={18} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            ))
                        ) : (
                            <div className="flex-1 flex justify-center items-center bg-surface/30 rounded-3xl border border-white/5 p-12 text-center text-gray-500">
                                <p>More articles coming soon!</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/blog" className="btn-primary inline-flex">
                        View All Posts
                    </Link>
                </div>

            </div>
        </section>
    );
}
