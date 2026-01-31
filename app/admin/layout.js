'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, Briefcase, Plus } from 'lucide-react';

export default function AdminLayout({ children }) {
    const pathname = usePathname();

    const navItems = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Blogs', href: '/admin/blogs', icon: FileText },
        { name: 'Projects', href: '/admin/projects', icon: Briefcase },
    ];

    return (
        <div className="min-h-screen pt-24 pb-8 flex bg-background">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="bg-surface border border-white/10 rounded-[32px] p-6 sticky top-32">
                        <h2 className="text-xl font-bold text-white mb-8 px-4">Admin Panel</h2>
                        <nav className="space-y-2">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                                                ? 'bg-primary text-white font-medium shadow-lg'
                                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        <item.icon size={20} />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 bg-surface/50 border border-white/5 rounded-[32px] p-8 min-h-[500px]">
                    {children}
                </main>
            </div>
        </div>
    );
}
