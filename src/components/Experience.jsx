import React from 'react';
import { experiences } from '../data/experience';

const Experience = () => {
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
        timeline: {
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
        },
        timelineBar: {
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent-teal), var(--accent-teal-dark))',
            opacity: 0.3,
            borderRadius: '10px',
        },
        item: {
            marginBottom: '3rem',
            paddingLeft: '60px',
            position: 'relative',
        },
        dot: {
            position: 'absolute',
            left: '11px',
            top: '8px',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-color)',
            border: '3px solid var(--accent-teal)',
            boxShadow: '0 0 15px var(--glow-teal)',
            zIndex: 1,
        },
        content: {
            backgroundColor: 'var(--glass-bg)',
            border: '1px solid var(--border-color)',
            padding: '2.5rem',
            borderRadius: 'var(--radius)',
            transition: 'var(--transition)',
            boxShadow: '0 10px 30px rgba(255, 143, 163, 0.05)',
        },
        period: {
            fontFamily: 'var(--font-mono)',
            fontSize: '1.0rem',
            color: 'var(--accent-blue-dark)',
            fontWeight: '600',
            marginBottom: '0.5rem',
            display: 'block',
        },
        jobTitle: {
            fontSize: '1.6rem',
            fontFamily: 'var(--font-serif)',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '0.3rem',
        },
        company: {
            fontSize: '1.2rem',
            fontFamily: 'var(--font-sans)',
            color: 'var(--text-secondary)',
            fontWeight: '500',
            marginBottom: '1rem',
            display: 'block',
        },
        desc: {
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontWeight: '300',
        },
        tagList: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
        },
        tag: {
            backgroundColor: 'rgba(162, 155, 254, 0.1)',
            color: 'var(--accent-teal-dark)',
            padding: '0.3rem 0.8rem',
            borderRadius: '100px',
            fontSize: '1.0rem',
            fontWeight: '600',
            fontFamily: 'var(--font-sans)',
        }
    };

    return (
        <section id="experience" style={styles.section}>
            <div style={styles.header}>
                <p style={styles.subtitle}>My Journey</p>
                <h2 style={styles.title}>Professional Experience</h2>
            </div>

            <div style={styles.timeline}>
                <div style={styles.timelineBar}></div>
                {experiences.map((exp, idx) => (
                    <div key={idx} style={styles.item} className="experience-item">
                        <div style={styles.dot}></div>
                        <div style={styles.content} className="project-card">
                            <span style={styles.period}>{exp.period}</span>
                            <h3 style={styles.jobTitle}>{exp.title}</h3>
                            <span style={styles.company}>{exp.company} • {exp.location}</span>
                        </div>
                    </div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .experience-item:hover .dot {
                    background-color: var(--accent-blue) !important;
                    transform: scale(1.2);
                    box-shadow: 0 0 20px var(--accent-blue) !important;
                    transition: var(--transition);
                }
            `}} />
        </section>
    );
};

export default Experience;
