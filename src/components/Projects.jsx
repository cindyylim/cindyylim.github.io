'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { projects, filterCategories } from '../data/projects';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState(null);

    const filtered = activeFilter
        ? projects.filter((p) => p.categories.includes(activeFilter))
        : projects;

    return (
        <section id="projects">
            <header className="page-header">
                <h1 className="page-title">Projects</h1>
                <p className="page-stats">
                    {projects.length} projects
                    <span>·</span>
                    full stack engineer
                </p>
            </header>

            <nav className="filter-bar" aria-label="Filter projects">
                <button
                    className={`filter-link ${activeFilter === null ? 'active' : ''}`}
                    onClick={() => setActiveFilter(null)}
                >
                    All
                </button>
                {filterCategories.map((cat) => (
                    <React.Fragment key={cat}>
                        <span className="filter-separator">·</span>
                        <button
                            className={`filter-link ${activeFilter === cat ? 'active' : ''}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            {cat}
                        </button>
                    </React.Fragment>
                ))}
            </nav>

            <ul className="project-list">
                {filtered.map((project) => (
                    <li key={project.id} className="project-item">
                        <Link href={`/project/${project.id}`}>
                            <img
                                src={project.image}
                                alt=""
                                className="project-icon"
                            />
                        </Link>
                        <div className="project-content">
                            <Link href={`/project/${project.id}`} className="project-title">
                                {project.title}
                            </Link>
                            <span className="project-tagline">{project.tagline}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
