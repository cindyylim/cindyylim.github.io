'use client';

import React, { useEffect, useState, Suspense } from 'react';
import Navbar from './Navbar';
import ScrollToHash from './ScrollToHash';

const ClientLayout = ({ children }) => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <Suspense fallback={null}>
                <ScrollToHash />
            </Suspense>
            <div
                className="custom-cursor"
                style={{
                    transform: `translate(${cursorPos.x - 10}px, ${cursorPos.y - 10}px)`
                }}
            />
            <Navbar />
            <main className="container">
                {children}
            </main>
        </>
    );
};

export default ClientLayout;
