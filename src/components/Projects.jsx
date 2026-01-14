import React from 'react';
import Link from 'next/link';
import { projects } from '../data/projects';

const Projects = () => {
    const featuredProject = projects[0];
    const otherProjects = projects.slice(1);

    const styles = {
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
            marginBottom: '1rem',
        },
        featured: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
            marginBottom: '6rem',
            backgroundColor: 'var(--glass-bg)',
            padding: '3rem',
            borderRadius: 'var(--radius)',
            border: '1px solid var(--border-color)',
            boxShadow: '0 20px 50px rgba(255, 143, 163, 0.08)',
        },
        featuredImage: {
            width: '100%',
            borderRadius: 'var(--radius)',
            boxShadow: '0 25px 50px -12px rgba(255, 143, 163, 0.25)',
            transform: 'rotate(-2deg)',
            cursor: 'pointer',
            transition: 'var(--transition)',
        },
        featuredContent: {
            textAlign: 'left',
        },
        featuredLabel: {
            fontFamily: 'var(--font-sans)',
            color: 'var(--accent-blue-dark)',
            fontSize: '1rem',
            fontWeight: '500',
            marginBottom: '0.8rem',
            display: 'block',
            fontStyle: 'italic',
        },
        featuredTitle: {
            fontSize: '2.5rem',
            fontFamily: 'var(--font-serif)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
        },
        tagList: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.8rem',
            marginTop: '2rem',
        },
        tag: {
            backgroundColor: 'rgba(107, 163, 255, 0.1)',
            color: 'var(--accent-blue-dark)',
            padding: '0.4rem 1.2rem',
            borderRadius: '100px',
            fontSize: '1.0rem',
            fontWeight: '600',
            fontFamily: 'var(--font-sans)',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
        },
        card: {
            backgroundColor: 'var(--glass-bg)',
            border: '1px solid var(--border-color)',
            padding: '2.5rem',
            borderRadius: 'var(--radius)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'var(--transition)',
            boxShadow: '0 10px 30px rgba(255, 143, 163, 0.05)',
        },
        cardImage: {
            width: '100%',
            height: '220px',
            objectFit: 'cover',
            borderRadius: 'calc(var(--radius) - 5px)',
            marginBottom: '1.5rem',
            transition: 'var(--transition)',
            border: '1px solid var(--border-color)',
        },
        cardTitle: {
            fontSize: '1.5rem',
            fontFamily: 'var(--font-serif)',
            fontWeight: '700',
            marginBottom: '1rem',
            color: 'var(--text-primary)',
        },
        cardDesc: {
            fontSize: '1.1rem', /* Increased from 1rem */
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
            lineHeight: '1.8',
            fontWeight: '400',
        },
        projectLink: {
            display: 'inline-block',
            padding: '1rem 2.5rem', /* Increased padding */
            borderRadius: '100px',
            border: '2px solid var(--accent-blue-dark)',
            color: 'var(--accent-blue-dark)',
            fontSize: '1rem', /* Increased from 0.95rem */
            fontWeight: '700', /* Increased from 600 */
            fontFamily: 'var(--font-sans)',
            transition: 'var(--transition)',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            textDecoration: 'none',
        },
        githubLink: {
            display: 'inline-block',
            padding: '1rem 2.5rem', /* Increased padding */
            borderRadius: '100px',
            border: '2px solid var(--accent-teal-dark)',
            color: 'var(--accent-teal-dark)',
            fontSize: '1rem', /* Increased from 0.95rem */
            fontWeight: '700', /* Increased from 600 */
            fontFamily: 'var(--font-sans)',
            transition: 'var(--transition)',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            textDecoration: 'none',
        },
        buttonGroup: {
            display: 'flex',
            gap: '1rem',
            marginTop: '2rem',
            flexWrap: 'wrap',
        }
    };

    return (
        <section id="work">
            <div style={styles.header}>
                <p style={styles.subtitle}>Curated Portfolio</p>
                <h2 style={styles.title}>Featured Creations</h2>
            </div>

            <div style={styles.featured}>
                <div style={{ padding: '1rem' }}>
                    <Link href={`/project/${featuredProject.id}`}>
                        <img src={featuredProject.image} alt={featuredProject.title} style={styles.featuredImage} className="featured-img-hover" />
                    </Link>
                </div>
                <div style={styles.featuredContent}>
                    <span style={styles.featuredLabel}>Featured Project</span>
                    <h3 style={styles.featuredTitle}>{featuredProject.title}</h3>
                    <p style={styles.cardDesc}>{featuredProject.description}</p>
                    <div style={styles.tagList}>
                        {featuredProject.tags.map(tag => <span key={tag} style={styles.tag}>{tag}</span>)}
                    </div>
                    <div style={styles.buttonGroup}>
                        <Link href={`/project/${featuredProject.id}`} style={styles.projectLink} className="project-link">
                            View Details
                        </Link>
                        <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" style={styles.githubLink} className="github-link">
                            Source Code
                        </a>
                    </div>
                </div>
            </div>

            <div style={styles.grid}>
                {otherProjects.map((project, idx) => (
                    <div key={idx} style={styles.card} className="project-card">
                        <Link href={`/project/${project.id}`} style={{ display: 'block', overflow: 'hidden', borderRadius: 'calc(var(--radius) - 5px)', marginBottom: '1.5rem' }}>
                            <img src={project.image} alt={project.title} style={styles.cardImage} className="grid-img-hover" />
                        </Link>
                        <div>
                            <h3 style={styles.cardTitle}>{project.title}</h3>
                            <p style={styles.cardDesc}>{project.description}</p>
                            <div style={styles.tagList}>
                                {project.tags.map(tag => <span key={tag} style={styles.tag}>{tag}</span>)}
                            </div>
                        </div>
                        <div style={{ ...styles.buttonGroup, marginTop: '2.5rem' }}>
                            <Link href={`/project/${project.id}`} style={{ ...styles.projectLink, flex: 1, textAlign: 'center', marginTop: 0 }} className="project-link">
                                Details
                            </Link>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ ...styles.githubLink, flex: 1, textAlign: 'center' }} className="github-link">
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .featured-img-hover:hover {
                    transform: rotate(0deg) scale(1.02) !important;
                    box-shadow: 0 30px 60px -12px rgba(255, 143, 163, 0.4) !important;
                }
                .grid-img-hover:hover {
                    transform: scale(1.05);
                }
            `}} />
        </section>
    );
};

export default Projects;
