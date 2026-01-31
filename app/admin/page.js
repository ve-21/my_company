'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Check, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function AdminPage() {
    // Add a mounted check to avoid hydration mismatch flickering
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const [activeTab, setActiveTab] = useState('project'); // 'project' or 'blog'
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    // Project State
    const [projectForm, setProjectForm] = useState({
        title: '',
        slug: '',
        category: '',
        image: '',
        description: '', // Project Overview
        challenge: '',
        solution: '', // Final Results text
        result: '', // The quote or key result
        link: '',
        client: '',
        isFeatured: false
    });

    // Blog State
    const [blogForm, setBlogForm] = useState({
        title: '',
        slug: '',
        category: '',
        coverImage: '',
        excerpt: '',
        content: '',
        author: 'Admin',
        readTime: '5 min read'
    });

    const generateSlug = (text) => {
        return text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
    };

    const handleProjectChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProjectForm(prev => {
            const newData = { ...prev, [name]: type === 'checkbox' ? checked : value };
            if (name === 'title') {
                newData.slug = generateSlug(value);
            }
            return newData;
        });
    };

    const handleBlogChange = (e) => {
        const { name, value } = e.target;
        setBlogForm(prev => {
            const newData = { ...prev, [name]: value };
            if (name === 'title') {
                newData.slug = generateSlug(value);
            }
            return newData;
        });
    };

    const submitProject = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const res = await fetch('/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(projectForm)
            });
            const data = await res.json();

            if (data.success) {
                setStatus({ type: 'success', message: 'Project added successfully!' });
                setProjectForm({
                    title: '', slug: '', category: '', image: '', description: '',
                    challenge: '', solution: '', result: '', link: '', client: '', isFeatured: false
                });
            } else {
                setStatus({ type: 'error', message: data.error || 'Failed to add project' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Network error occurred.' });
        } finally {
            setLoading(false);
        }
    };

    const submitBlog = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const res = await fetch('/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blogForm)
            });
            const data = await res.json();

            if (data.success) {
                setStatus({ type: 'success', message: 'Blog post created successfully!' });
                setBlogForm({
                    title: '', slug: '', category: '', coverImage: '',
                    excerpt: '', content: '', author: 'Admin', readTime: '5 min read'
                });
            } else {
                setStatus({ type: 'error', message: data.error || 'Failed to create post' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Network error occurred.' });
        } finally {
            setLoading(false);
        }
    };

    if (!mounted) {
        return <div className="min-h-screen bg-[#020420]"></div>;
    }

    return (
        <div className="min-h-screen pt-32 pb-20 bg-[#020420] text-white" suppressHydrationWarning>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-10 flex items-center justify-between">
                    <h1 className="text-4xl font-bold">Admin Dashboard</h1>
                    <Link href="/" className="flex items-center text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft className="mr-2" size={20} /> Back to Site
                    </Link>
                </div>

                {/* Tabs */}
                <div className="flex space-x-4 mb-10 border-b border-white/10 pb-1">
                    <button
                        onClick={() => { setActiveTab('project'); setStatus({ type: '', message: '' }); }}
                        className={`pb-4 px-4 font-medium text-lg transition-colors relative ${activeTab === 'project' ? 'text-primary' : 'text-gray-400 hover:text-white'}`}
                    >
                        Add Project
                        {activeTab === 'project' && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></div>}
                    </button>
                    <button
                        onClick={() => { setActiveTab('blog'); setStatus({ type: '', message: '' }); }}
                        className={`pb-4 px-4 font-medium text-lg transition-colors relative ${activeTab === 'blog' ? 'text-primary' : 'text-gray-400 hover:text-white'}`}
                    >
                        Add Blog Post
                        {activeTab === 'blog' && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></div>}
                    </button>
                </div>

                {/* Status Message */}
                {status.message && (
                    <div className={`mb-8 p-4 rounded-xl flex items-center gap-3 ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                        {status.type === 'success' ? <Check size={20} /> : <AlertCircle size={20} />}
                        {status.message}
                    </div>
                )}

                {/* Project Form - Using Solid Backgrounds to prevent Input Lag */}
                {activeTab === 'project' && (
                    <form onSubmit={submitProject} className="space-y-6 bg-[#0E102B] p-8 rounded-3xl border border-white/10 shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Project Title</label>
                                <input required type="text" name="title" value={projectForm.title} onChange={handleProjectChange} className="w-full bg-[#0B0C22] border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="e.g. Nexus Banking App" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Slug (Auto-generated)</label>
                                <input required type="text" name="slug" value={projectForm.slug} onChange={handleProjectChange} className="w-full bg-[#0B0C22] border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Category</label>
                                <select required name="category" value={projectForm.category} onChange={handleProjectChange} className="w-full bg-[#0B0C22] border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors text-white">
                                    <option value="" disabled>Select Category</option>
                                    <option value="Fintech">Fintech</option>
                                    <option value="HealthTech">HealthTech</option>
                                    <option value="E-Commerce">E-Commerce</option>
                                    <option value="AI Solutions">AI Solutions</option>
                                    <option value="Mobile App">Mobile App</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Client Name</label>
                                <input type="text" name="client" value={projectForm.client} onChange={handleProjectChange} className="w-full bg-[#0B0C22] border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="e.g. Global Finance Corp" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Image URL</label>
                            <input required type="url" name="image" value={projectForm.image} onChange={handleProjectChange} className="w-full bg-[#0B0C22] border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="https://..." />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Project Overview (Description)</label>
                            <textarea required name="description" value={projectForm.description} onChange={handleProjectChange} rows={3} className="w-full bg-[#0B0C22] border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="Brief summary of the project..." />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">The Challenge</label>
                            <textarea name="challenge" value={projectForm.challenge} onChange={handleProjectChange} rows={3} className="w-full bg-[#0B0C22] border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="What problems did we solve?" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Final Results (Solution Text)</label>
                            <textarea name="solution" value={projectForm.solution} onChange={handleProjectChange} rows={3} className="w-full bg-[#0B0C22] border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="How did we solve it?" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Key Result (Quote/Impact)</label>
                            <input type="text" name="result" value={projectForm.result} onChange={handleProjectChange} className="w-full bg-[#0B0C22] border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="e.g. 'Increased user retention by 40%'" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Project Website Link</label>
                            <input type="url" name="link" value={projectForm.link} onChange={handleProjectChange} className="w-full bg-[#0B0C22] border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="https://example.com" />
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                            <input type="checkbox" id="isFeatured" name="isFeatured" checked={projectForm.isFeatured} onChange={handleProjectChange} className="w-5 h-5 rounded border-gray-600 text-primary focus:ring-primary bg-[#0B0C22]" />
                            <label htmlFor="isFeatured" className="text-sm font-medium text-gray-400 select-none">Feature this project on homepage?</label>
                        </div>

                        <button disabled={loading} type="submit" className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed mt-4">
                            {loading ? 'Adding Project...' : 'Add Project'}
                        </button>
                    </form>
                )}

                {/* Blog Form */}
                {activeTab === 'blog' && (
                    <form onSubmit={submitBlog} className="space-y-6 bg-[#0E102B] p-8 rounded-3xl border border-white/10 shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Article Title</label>
                                <input required type="text" name="title" value={blogForm.title} onChange={handleBlogChange} className="w-full bg-[#0B0C22] border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="e.g. The Future of AI" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Slug (Auto-generated)</label>
                                <input required type="text" name="slug" value={blogForm.slug} onChange={handleBlogChange} className="w-full bg-[#0B0C22] border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Category</label>
                                <select required name="category" value={blogForm.category} onChange={handleBlogChange} className="w-full bg-[#0B0C22] border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors text-white">
                                    <option value="" disabled>Select Category</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Design">Design</option>
                                    <option value="Development">Development</option>
                                    <option value="Business">Business</option>
                                    <option value="Innovation">Innovation</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Author</label>
                                <input type="text" name="author" value={blogForm.author} onChange={handleBlogChange} className="w-full bg-[#0B0C22] border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Cover Image URL</label>
                            <input required type="url" name="coverImage" value={blogForm.coverImage} onChange={handleBlogChange} className="w-full bg-[#0B0C22] border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="https://..." />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Excerpt (Short Summary)</label>
                            <textarea required name="excerpt" value={blogForm.excerpt} onChange={handleBlogChange} rows={3} className="w-full bg-[#0B0C22] border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="A brief preview..." />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Full Content (HTML Supported)</label>
                            <textarea required name="content" value={blogForm.content} onChange={handleBlogChange} rows={10} className="w-full bg-[#0B0C22] border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors font-mono text-sm" placeholder="<p>Your article content here...</p>" />
                        </div>

                        <button disabled={loading} type="submit" className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed mt-4">
                            {loading ? 'Creating Post...' : 'Publish Article'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
