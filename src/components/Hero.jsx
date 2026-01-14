import React from 'react';

const Hero = () => {
    const styles = {
        hero: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
        },
        sub: {
            fontSize: '1rem', /* Increased for accessibility */
            fontFamily: 'var(--font-sans)',
            color: 'var(--accent-blue-dark)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            fontWeight: '600',
        },
        title: {
            fontSize: 'clamp(3rem, 10vw, 5.5rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: '700',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
            fontStyle: 'italic',
        },
        highlight: {
            color: 'var(--accent-blue-dark)',
            WebkitTextStroke: 'none',
            display: 'block',
            fontSize: '0.45em',
            fontStyle: 'normal',
            fontFamily: 'var(--font-sans)',
            fontWeight: '400',
            marginTop: '0.5rem',
            letterSpacing: '4px',
        },
        description: {
            maxWidth: '650px',
            fontSize: '1.3rem', /* Increased from 1.2rem */
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            fontWeight: '400', /* Increased from 300 for better contrast */
        },
        featured: {
            display: 'flex',
            gap: '1.5rem',
            marginTop: '4rem',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-sans)',
            color: 'var(--text-secondary)',
            opacity: 0.8,
            alignItems: 'center',
        },
        tag: {
            border: '1px solid var(--border-color)',
            padding: '0.3rem 1rem',
            borderRadius: '100px',
            background: 'var(--glass-bg)',
            color: 'var(--accent-blue)',
            fontSize: '0.7rem',
            fontWeight: '500',
        }
    };

    return (
        <section id="home" style={styles.hero} className="fade-in">
            <div className="glow-bg" aria-hidden="true">
                <div className="glow-circle glow-1"></div>
                <div className="glow-circle glow-2"></div>
            </div>

            <p style={styles.sub}>Welcome, I am</p>
            <h1 style={styles.title}>
                CINDY<br />
                <span style={styles.highlight}>FULL STACK ENGINEER</span>
            </h1>
            <p style={styles.description}>
            </p>
        </section>
    );
};

export default Hero;
