import React from 'react';
import Link from 'next/link';
import { projects, getRelatedProjects, getNextProject } from '../../../src/data/projects';

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

const ProjectDetails = async ({ params }) => {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <article className="app-detail">
                <header className="app-detail-header">
                    <h1 className="app-detail-title">Project not found</h1>
                    <nav className="app-detail-nav">
                        <Link href="/" className="app-detail-nav-link">All projects</Link>
                    </nav>
                </header>
            </article>
        );
    }

    const related = getRelatedProjects(project.id);
    const nextProject = getNextProject(project.id);
    return (
        <article className="app-detail">
            <header className="app-detail-header">
                <img
                    src={project.image}
                    alt=""
                    className="app-detail-icon"
                />
                <h1 className="app-detail-title">{project.title}</h1>
                <h2 className="app-detail-tagline">{project.tagline}</h2>

                <nav className="app-detail-nav" aria-label="Project links">
                    <Link href={`/project/${nextProject.id}`} className="app-detail-nav-link">
                        Another project
                    </Link>
                    {project.link && (
                        <>
                            <span className="app-detail-nav-sep">·</span>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="app-detail-nav-link"
                            >
                                Live demo
                            </a>
                        </>
                    )}
                    <span className="app-detail-nav-sep">·</span>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="app-detail-nav-link"
                    >
                        Source code
                    </a>
                </nav>

                <nav className="app-detail-nav-secondary">
                    <Link href="/" className="app-detail-nav-link">All projects</Link>
                    <span className="app-detail-nav-sep">·</span>
                    <Link href="/#contact" className="app-detail-nav-link">Contact</Link>
                </nav>

            </header>

            <div className="app-detail-screenshots">
                {project.images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="app-detail-screenshot"
                    />
                ))}
            </div>

            <div className="app-detail-body">
                {project.overview.map((paragraph, idx) => (
                    <p key={idx} className="app-detail-paragraph">{paragraph}</p>
                ))}

                <h4 className="app-detail-section-title">Example use-cases</h4>
                <ul className="app-detail-list">
                    {project.useCases.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>

            {related.length > 0 && (
                <section className="app-detail-related">
                    <h3 className="app-detail-related-title">You might also like</h3>
                    <ul className="app-detail-related-list">
                        {related.map((rel) => (
                            <li key={rel.id} className="app-detail-related-item">
                                <Link href={`/project/${rel.id}`}>
                                    <img src={rel.image} alt="" className="app-detail-related-icon" />
                                </Link>
                                <Link href={`/project/${rel.id}`} className="app-detail-related-name">
                                    {rel.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            <footer className="app-detail-footer">
                <nav className="app-detail-nav">
                    <Link href="/" className="app-detail-nav-link">All projects</Link>
                    {project.link && (
                        <>
                            <span className="app-detail-nav-sep">·</span>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="app-detail-nav-link"
                            >
                                Live demo
                            </a>
                        </>
                    )}
                    <span className="app-detail-nav-sep">·</span>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="app-detail-nav-link"
                    >
                        Source code
                    </a>
                </nav>
            </footer>
        </article>
    );
};

export default ProjectDetails;
