'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2 } from 'lucide-react';

export default function ProjectsPage() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await fetch('/api/projects');
            const data = await res.json();
            if (data.success) {
                setProjects(data.data);
            }
        } catch (error) {
            console.error('Failed to fetch projects:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this project?')) return;

        try {
            const res = await fetch(`/api/projects/${id}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (data.success) {
                setProjects(projects.filter(p => p._id !== id));
            }
        } catch (error) {
            console.error('Failed to delete project:', error);
        }
    };

    if (loading) return <div className="text-white">Loading...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-white">Manage Projects</h1>
                <Link href="/admin/projects/new" className="btn-primary flex items-center gap-2">
                    <Plus size={20} /> Create New
                </Link>
            </div>

            <div className="bg-surface rounded-[24px] border border-white/10 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-white/5 text-gray-400">
                        <tr>
                            <th className="p-4">Title</th>
                            <th className="p-4">Category</th>
                            <th className="p-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {projects.map((project) => (
                            <tr key={project._id} className="hover:bg-white/5 transition-colors">
                                <td className="p-4 font-medium text-white">{project.title}</td>
                                <td className="p-4 text-gray-400">{project.category}</td>
                                <td className="p-4 flex gap-3 justify-end">
                                    <Link href={`/admin/projects/${project._id}`} className="text-blue-400 hover:text-blue-300">
                                        <Edit size={18} />
                                    </Link>
                                    <button onClick={() => handleDelete(project._id)} className="text-red-400 hover:text-red-300">
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {projects.length === 0 && (
                            <tr>
                                <td colSpan="3" className="p-8 text-center text-gray-500">No projects found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
