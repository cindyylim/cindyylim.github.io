'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const ScrollToHash = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 0);
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [pathname, searchParams]);

    return null;
};

export default ScrollToHash;
