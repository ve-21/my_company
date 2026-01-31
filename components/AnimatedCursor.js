'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            backgroundColor: "rgba(79, 108, 246, 0.2)",
        },
        text: {
            height: 80,
            width: 80,
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            mixBlendingMode: "difference"
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] hidden lg:block border border-primary/30 backdrop-blur-sm shadow-[0_0_15px_rgba(79,108,246,0.3)]"
            variants={variants}
            animate={cursorVariant}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 250,
                restDelta: 0.001,
                mass: 0.5
            }}
        />
    );
}
