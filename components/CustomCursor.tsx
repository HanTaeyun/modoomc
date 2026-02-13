import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
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
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-black z-[9999] pointer-events-none"
            variants={variants}
            animate="default"
            transition={{
                x: {
                    duration: 0.1,
                    ease: "linear",
                    repeat: 0,
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                },
                y: {
                    duration: 0.1,
                    ease: "linear",
                    repeat: 0,
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }
            }}
        >
            <div className="w-1 h-1 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
    );
};

export default CustomCursor;