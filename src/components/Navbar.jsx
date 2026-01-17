'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'Skills', id: 'skills' },
        { name: 'Portfolio', id: 'work' },
        { name: 'Connect', id: 'contact' },
    ];

    const styles = {
        nav: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: scrolled ? '0.8rem 4rem' : '1.5rem 4rem',
            backgroundColor: scrolled ? 'var(--glass-bg)' : 'transparent',
            backdropFilter: scrolled ? 'blur(15px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1000,
            transition: 'var(--transition)',
        },
        logo: {
            fontSize: '1.5rem',
            fontFamily: 'var(--font-serif)',
            fontWeight: '700',
            letterSpacing: '1px',
            color: 'var(--text-primary)',
            fontStyle: 'italic',
            zIndex: 1001,
        },
        links: {
            display: 'flex',
            gap: '2.5rem',
        },
        link: {
            fontSize: '1.05rem',
            fontFamily: 'var(--font-sans)',
            color: 'var(--text-secondary)',
            fontWeight: '400',
            letterSpacing: '0.5px',
            position: 'relative',
            textDecoration: 'none',
        }
    };

    return (
        <nav style={styles.nav} className="nav-padding">
            <Link href="/#home" style={{ textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>
                <div style={styles.logo}>Cindy</div>
            </Link>

            {/* Desktop Links */}
            <ul style={styles.links} className="nav-links-desktop">
                {navLinks.map((link) => (
                    <li key={link.id} style={{ listStyle: 'none' }}>
                        <Link href={`/#${link.id}`} style={styles.link} className="nav-link">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Toggle */}
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul style={{ ...styles.links, flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <li key={link.id} style={{ listStyle: 'none' }}>
                            <Link
                                href={`/#${link.id}`}
                                style={{ ...styles.link, fontSize: '1.5rem', color: 'var(--text-primary)' }}
                                className="nav-link"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
