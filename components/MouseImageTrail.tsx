import React, { useRef, useCallback } from 'react';
import { useAnimate } from 'framer-motion';
import { IMAGES } from '../constants';

const MouseImageTrail: React.FC<{ children: React.ReactNode, renderImageBuffer: number, rotationRange: number }> = ({ 
    children, 
    renderImageBuffer, 
    rotationRange 
}) => {
    const [scope, animate] = useAnimate();
    const lastRenderPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const imageIndex = useRef(0);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const distance = calculateDistance(clientX, clientY, lastRenderPosition.current.x, lastRenderPosition.current.y);

        if (distance >= renderImageBuffer) {
            lastRenderPosition.current.x = clientX;
            lastRenderPosition.current.y = clientY;

            renderNextImage(clientX, clientY);
        }
    }, [renderImageBuffer]);

    const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    };

    const renderNextImage = (x: number, y: number) => {
        const image = IMAGES[imageIndex.current % IMAGES.length];
        const selector = `.trail-image-${imageIndex.current}`;
        const el = document.getElementById(`trail-image-${imageIndex.current}`);

        if (el) {
            el.style.display = "block";
            el.style.left = `${x}px`;
            el.style.top = `${y}px`;
            // Hero 섹션(z-10)보다 높고 Header(z-50)보다 낮거나 비슷하게 설정하여 보이게 함
            el.style.zIndex = (40 + (imageIndex.current % 10)).toString();

            const rotation = Math.random() * rotationRange * 2 - rotationRange; 

            animate(
                selector,
                { 
                    opacity: [0, 1, 0], 
                    scale: [0.5, 1, 0.5],
                    rotate: rotation 
                },
                { duration: 1.2, ease: "easeOut" }
            );
        }

        imageIndex.current = (imageIndex.current + 1) % IMAGES.length;
    };

    return (
        <div 
            ref={scope} 
            className="relative w-full overflow-hidden bg-[#F1B821]"
            onMouseMove={handleMouseMove}
        >
            {IMAGES.map((img, index) => (
                <img
                    key={index}
                    id={`trail-image-${index}`}
                    className={`trail-image-${index} pointer-events-none fixed w-48 h-auto object-cover opacity-0`}
                    src={img}
                    alt="trail"
                    style={{ 
                        transform: 'translate(-50%, -50%)', 
                        display: 'none',
                        pointerEvents: 'none'
                    }}
                />
            ))}
            {children}
        </div>
    );
};

export default MouseImageTrail;