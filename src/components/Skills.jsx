import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
        },
        {
            title: 'Frameworks/Tools',
            skills: ['React', 'Redux', 'GraphQL', 'PostgreSQL', 'AWS', 'Git', 'MongoDB', 'Node.js', 'Spring', 'Selenium', 'Cucumber', 'Cypress'],
        }
    ];

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
            fontSize: '1rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontWeight: '600',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
        },
        card: {
            backgroundColor: 'var(--glass-bg)',
            border: '1px solid var(--border-color)',
            padding: '2.5rem',
            borderRadius: 'var(--radius)',
            transition: 'var(--transition)',
            boxShadow: '0 10px 30px rgba(255, 143, 163, 0.05)',
        },
        cardIcon: {
            fontSize: '2.5rem',
            marginBottom: '1.5rem',
            display: 'block',
        },
        cardTitle: {
            fontSize: '1.6rem', /* Increased from 1.4rem */
            fontFamily: 'var(--font-serif)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
        },
        list: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1rem',
        },
        item: {
            fontSize: '1.1rem', /* Increased from 1rem */
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: '400', /* Increased from 300 for better presence */
        },
        bullet: {
            color: 'var(--accent-blue-dark)',
            fontSize: '1rem',
        }
    };

    return (
        <section id="skills" style={styles.section}>
            <div style={styles.header}>
                <p style={styles.subtitle}>Skillset</p>
                <h2 style={styles.title}>Areas of Expertise</h2>
            </div>

            <div style={styles.grid}>
                {skillCategories.map((cat, idx) => (
                    <div key={idx} style={styles.card} className="skill-card">
                        <h3 style={styles.cardTitle}>{cat.title}</h3>
                        <ul style={styles.list}>
                            {cat.skills.map((skill, sIdx) => (
                                <li key={sIdx} style={styles.item}>
                                    <span style={styles.bullet}>✿</span> {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
