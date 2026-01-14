import React from 'react';
import Link from 'next/link';
import { projects } from '../../../src/data/projects';
import { ChevronLeft, ExternalLink, Github } from 'lucide-react';

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

const ProjectDetails = async ({ params }) => {
    const { id } = await params;
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div style={{ padding: '100px 2rem', textAlign: 'center' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)' }}>Project Not Found</h2>
                <Link href="/" style={{ color: 'var(--accent-teal-dark)', marginTop: '2rem', display: 'inline-block' }}>
                    Back to Portfolio
                </Link>
            </div>
        );
    }

    const styles = {
        section: {
            padding: '120px 2rem 100px',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        backBtn: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            marginBottom: '3rem',
            transition: 'var(--transition)',
            textDecoration: 'none',
        },
        header: {
            marginBottom: '4rem',
        },
        title: {
            fontSize: '3.5rem',
            fontFamily: 'var(--font-serif)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
        },
        tagList: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.8rem',
            marginBottom: '2rem',
        },
        tag: {
            backgroundColor: 'rgba(255, 143, 163, 0.1)',
            color: 'var(--accent-teal-dark)',
            padding: '0.4rem 1.2rem',
            borderRadius: '100px',
            fontSize: '1.0rem',
            fontWeight: '600',
        },
        gallery: {
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
        },
        imageContainer: {
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(255, 143, 163, 0.1)',
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--glass-bg)',
        },
        image: {
            width: '100%',
            height: 'auto',
            display: 'block',
            transition: 'var(--transition)',
        },
        content: {
            position: 'sticky',
            top: '120px',
        },
        description: {
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            fontWeight: '400',
        },
        buttonGroup: {
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
        },
        btn: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.7rem',
            padding: '1rem 2rem',
            borderRadius: '100px',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'var(--transition)',
            textDecoration: 'none',
        },
        primaryBtn: {
            backgroundColor: 'var(--accent-teal-dark)',
            color: 'white',
            boxShadow: '0 10px 20px var(--glow-teal)',
        },
        secondaryBtn: {
            border: '2px solid var(--accent-teal-dark)',
            color: 'var(--accent-teal-dark)',
        }
    };

    return (
        <section style={styles.section}>
            <Link href="/" style={styles.backBtn} className="nav-link">
                <ChevronLeft size={18} /> Back to Portfolio
            </Link>

            <div style={styles.header}>
                <h1 style={styles.title}>{project.title}</h1>
                <div style={styles.tagList}>
                    {project.tags.map(tag => (
                        <span key={tag} style={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>

            <div className="project-details-grid">
                <div style={styles.gallery}>
                    {project.images.map((img, idx) => (
                        <div key={idx} style={styles.imageContainer}>
                            <img src={img} alt={`${project.title} ${idx + 1}`} style={styles.image} />
                        </div>
                    ))}
                </div>

                <div style={styles.content} className="project-details-content">
                    <p style={styles.description}>{project.detailedDescription}</p>

                    <div style={styles.buttonGroup}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ ...styles.btn, ...styles.primaryBtn }} className="project-link">
                            <ExternalLink size={18} /> Live Project
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ ...styles.btn, ...styles.secondaryBtn }} className="github-link">
                            <Github size={18} /> Source Code
                        </a>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .project-details-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 968px) {
                    .project-details-grid {
                        grid-template-columns: 1fr;
                    }
                    .project-details-content {
                        position: static !important;
                        order: -1;
                        margin-bottom: 3rem;
                    }
                }
                .project-link:hover {
                    transform: translateY(-2px);
                }
                .github-link:hover {
                    transform: translateY(-2px);
                }
            `}} />
        </section>
    );
};

export default ProjectDetails;
