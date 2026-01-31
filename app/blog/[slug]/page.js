'use client';

import { use, useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function BlogPostPage({ params }) {
    const resolveParams = use(params);
    const { slug } = resolveParams;

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`/api/posts/slug/${slug}`);
                const data = await res.json();
                if (data.success) {
                    setPost(data.data);
                } else {
                    setPost(null);
                }
            } catch (error) {
                console.error('Error fetching blog post:', error);
                setPost(null);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchPost();
        }
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#020420]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
            </div>
        );
    }

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-32 pb-20 bg-[#020420]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="mb-8">
                    <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6 text-sm font-medium tracking-wide uppercase">
                        <ArrowLeft size={16} className="mr-2" /> Back to Blog
                    </Link>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                            {post.category}
                        </span>
                        <div className="flex items-center text-gray-400 text-sm gap-4">
                            <span className="flex items-center gap-1.5">
                                <Calendar size={14} /> {new Date(post.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock size={14} /> {post.readTime || '5 min read'}
                            </span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                            {post.author ? post.author[0] : 'A'}
                        </div>
                        <div>
                            <p className="text-white font-semibold">{post.author || 'Admin'}</p>
                            <p className="text-gray-400 text-xs">Digital Content Specialist</p>
                        </div>
                    </div>
                </div>

                <div className="relative w-full aspect-video rounded-[32px] overflow-hidden border border-white/10 mb-12 shadow-2xl">
                    <Image
                        src={post.coverImage || post.image || 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0'}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-blockquote:border-primary prose-a:text-primary">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <span className="text-white font-medium flex items-center gap-2">
                            <Share2 size={18} /> Share this article:
                        </span>
                        <div className="flex gap-2">
                            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#1877F2] transition-colors">
                                <Facebook size={18} />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#1DA1F2] transition-colors">
                                <Twitter size={18} />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#0A66C2] transition-colors">
                                <Linkedin size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Newsletter Box */}
                <div className="mt-20 p-10 md:p-16 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-[40px] border border-white/10 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-4">Subscribe to our newsletter</h2>
                        <p className="text-gray-400 mb-8 max-w-md mx-auto">Get the latest insights, thoughts, and trends delivered straight to your inbox.</p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                            />
                            <button className="btn-primary whitespace-nowrap px-8 py-4">Subscribe Now</button>
                        </div>
                    </div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"></div>
                </div>
            </div>
        </div>
    );
}
