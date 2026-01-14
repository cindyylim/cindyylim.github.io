import React from 'react';
import { education } from '../data/education';

const Education = () => {
    const styles = {
        section: {
            paddingTop: '80px',
        },
        header: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '4rem',
            textAlign: 'center',
        },
        title: {
            fontSize: '2.5rem',
            fontFamily: 'var(--font-serif)',
            fontWeight: '700',
            fontStyle: 'italic',
            marginBottom: '0.5rem',
        },
        subtitle: {
            color: 'var(--accent-blue-dark)',
            fontSize: '0.9rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontWeight: '600',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
        },
        card: {
            backgroundColor: 'var(--glass-bg)',
            border: '1px solid var(--border-color)',
            padding: '3rem',
            borderRadius: 'var(--radius)',
            transition: 'var(--transition)',
            boxShadow: '0 10px 30px rgba(255, 143, 163, 0.05)',
            position: 'relative',
            overflow: 'hidden',
        },
        flower: {
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            fontSize: '5rem',
            opacity: 0.05,
            transform: 'rotate(15deg)',
        },
        period: {
            fontFamily: 'var(--font-mono)',
            fontSize: '1.0rem',
            color: 'var(--accent-blue-dark)',
            fontWeight: '600',
            marginBottom: '1rem',
            display: 'block',
        },
        degree: {
            fontSize: '1.6rem',
            fontFamily: 'var(--font-serif)',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '0.5rem',
        },
        school: {
            fontSize: '1.2rem',
            fontFamily: 'var(--font-sans)',
            color: 'var(--text-secondary)',
            fontWeight: '500',
            marginBottom: '1.5rem',
            display: 'block',
        },
        desc: {
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            marginBottom: '2rem',
            fontWeight: '300',
        },
        achievementList: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
        },
        achievement: {
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: '400',
        },
        bullet: {
            color: 'var(--accent-blue-dark)',
            fontSize: '0.8rem',
        }
    };

    return (
        <section id="education" style={styles.section}>
            <div style={styles.header}>
                <p style={styles.subtitle}>Background</p>
                <h2 style={styles.title}>Academic Foundation</h2>
            </div>

            <div style={styles.grid}>
                {education.map((edu, idx) => (
                    <div key={idx} style={styles.card} className="skill-card">
                        <span style={styles.flower}>🌸</span>
                        <span style={styles.period}>{edu.period}</span>
                        <h3 style={styles.degree}>{edu.degree}</h3>
                        <span style={styles.school}>{edu.school} • {edu.location}</span>
                        <p style={styles.desc}>{edu.description}</p>

                        <div style={styles.achievementList}>
                            {edu.achievements.map((ach, aIdx) => (
                                <div key={aIdx} style={styles.achievement}>
                                    <span style={styles.bullet}>✿</span> {ach}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
