'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Search, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';

const categories = ['All', 'Development', 'UI/UX Design', 'Innovation', 'Technology', 'Design', 'Architecture', 'Business'];

export default function BlogPage() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await fetch('/api/posts');
                const data = await res.json();
                if (data.success) {
                    setArticles(data.data);
                }
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    const filteredArticles = articles.filter(article => {
        const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen pt-32 pb-20 overflow-hidden">

            {/* Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full mix-blend-screen opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Blog</h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Insights, thoughts, and trends from the world of technology, design, and innovation.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Filter & Search Bar */}
                <ScrollReveal delay={0.1}>
                    <div className="flex flex-col md:flex-row justify-between items-center bg-surface/30 backdrop-blur-md border border-white/5 p-4 rounded-2xl mb-12 gap-4">

                        {/* Categories */}
                        <div className="flex overflow-x-auto gap-2 w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat
                                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-full py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            />
                        </div>
                    </div>
                </ScrollReveal>

                {/* Blog Grid */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
                    </div>
                ) : filteredArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map((article, idx) => (
                            <ScrollReveal key={article._id || idx} delay={idx * 0.1} className="h-full">
                                <Link href={`/blog/${article.slug}`} className="block h-full group">
                                    <article className="bg-[#020420] border border-white/5 rounded-3xl overflow-hidden h-full flex flex-col hover:border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                                        {/* Image */}
                                        <div className="relative h-60 overflow-hidden">
                                            <Image
                                                src={article.coverImage || article.image || 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0'}
                                                alt={article.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider rounded-full border border-white/10">
                                                    {article.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center text-xs text-gray-400 mb-4 space-x-2">
                                                <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                                                <span>{article.readTime || '5 min read'}</span>
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-primary transition-colors">
                                                {article.title}
                                            </h3>

                                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                                {article.excerpt}
                                            </p>

                                            <div className="flex items-center text-primary font-semibold text-sm group/link pt-4 border-t border-white/5">
                                                Read Article
                                                <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
                        <button
                            onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                            className="mt-4 text-primary hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}
