import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'AI / Agentic',
            skills: [
                'LLM APIs',
                'MCP',
                'Agent workflows',
                'Prompt engineering',
                'Output validation',
                'TensorFlow',
                'Supervised/Unsupervised ML',
            ],
        },
        {
            title: 'Languages',
            skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
        },
        {
            title: 'Frontend',
            skills: ['React', 'Redux', 'Tailwind CSS', 'GraphQL'],
        },
        {
            title: 'Backend / Cloud',
            skills: ['Node.js', 'Express', 'Spring', 'AWS (EC2, S3)', 'Git'],
        },
        {
            title: 'Databases',
            skills: ['SQL Server', 'Redis', 'PostgreSQL', 'MongoDB'],
        },
        {
            title: 'Testing',
            skills: ['JUnit', 'Cucumber', 'Cypress', 'Selenium'],
        },
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
            fontSize: '2.75rem',
            fontFamily: 'var(--font-serif)',
            fontWeight: '700',
            fontStyle: 'italic',
            marginBottom: '0.5rem',
        },
        subtitle: {
            color: 'var(--accent-blue-dark)',
            fontSize: '1.15rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontWeight: '600',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
        },
        card: {
            backgroundColor: 'var(--glass-bg)',
            border: '1px solid var(--border-color)',
            padding: '2rem',
            borderRadius: 'var(--radius)',
            transition: 'var(--transition)',
            boxShadow: '0 10px 30px rgba(255, 143, 163, 0.05)',
        },
        cardTitle: {
            fontSize: '1.65rem',
            fontFamily: 'var(--font-serif)',
            fontWeight: '700',
            marginBottom: '1.25rem',
            color: 'var(--text-primary)',
        },
        tags: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
        },
        tag: {
            border: '1px solid var(--border-color)',
            padding: '0.55rem 1.1rem',
            borderRadius: '100px',
            background: 'rgba(255, 255, 255, 0.6)',
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            fontWeight: '500',
            fontFamily: 'var(--font-sans)',
            lineHeight: 1.4,
        },
    };

    return (
        <section id="skills" style={styles.section}>
            <div style={styles.header}>
                <p style={styles.subtitle}>Skillset</p>
                <h2 style={styles.title}>Areas of Expertise</h2>
            </div>

            <div style={styles.grid}>
                {skillCategories.map((cat) => (
                    <div key={cat.title} style={styles.card} className="skill-card">
                        <h3 style={styles.cardTitle}>{cat.title}</h3>
                        <div style={styles.tags}>
                            {cat.skills.map((skill) => (
                                <span key={skill} style={styles.tag}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
