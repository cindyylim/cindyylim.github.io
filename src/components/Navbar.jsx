'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Projects', href: '/#projects' },
        { name: 'About', href: '/#about' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav className="site-nav">
            <div className="site-nav-inner">
                <Link href="/" className="site-logo" onClick={() => setIsMenuOpen(false)}>
                    Cindy Lim
                </Link>

                <ul className="nav-links nav-links-desktop">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="nav-link">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="nav-link"
                        style={{ fontSize: '1.25rem' }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
