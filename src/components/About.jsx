const skillGroups = [
    { title: 'AI / Agentic', skills: ['LLM APIs', 'MCP', 'Tool-use/Agent workflows', 'Prompt design', 'Output validation', 'Tensorflow'] },
    { title: 'Languages', skills: ['Java', 'Python', 'C#', 'JavaScript', 'TypeScript', 'SQL'] },
    { title: 'Frontend', skills: ['React', 'Redux', 'GraphQL'] },
    { title: 'Backend / Cloud', skills: ['Node.js', 'Express', 'Spring', 'AWS'] },
    { title: 'Databases', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL Server'] },
    { title: 'Testing', skills: ['JUnit', 'Cucumber', 'Cypress', 'Selenium'] },
];

const About = () => (
    <section id="about" className="about-section">
        <h2>About</h2>
        <p>
            Full stack engineer building web apps, AI tools, and automation.
        </p>

        <div className="skill-groups">
            {skillGroups.map((group) => (
                <div key={group.title}>
                    <div className="skill-group-title">{group.title}</div>
                    <div className="skill-group-tags">
                        {group.skills.map((skill) => (
                            <span key={skill} className="skill-group-tag">{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default About;
