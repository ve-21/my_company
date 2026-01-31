'use client';

import { usePathname } from 'next/navigation';
import BackgroundOrbs from "@/components/BackgroundOrbs";
import AnimatedCursor from "@/components/AnimatedCursor";

export default function GlobalEffects() {
    const pathname = usePathname();
    // Disable effects on admin page to ensure maximum performance for forms
    const isAdmin = pathname?.startsWith('/admin');

    if (isAdmin) return null;

    return (
        <>
            <AnimatedCursor />
            <BackgroundOrbs />
        </>
    );
}
