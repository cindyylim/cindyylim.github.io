import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    const styles = {
        section: {
            padding: '150px 2rem 100px',
            textAlign: 'center',
            backgroundColor: 'rgba(255, 143, 163, 0.02)',
            borderRadius: '100px 100px 0 0',
            marginTop: '100px',
        },
        title: {
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: '700',
            fontStyle: 'italic',
            marginBottom: '2rem',
            color: 'var(--text-primary)',
        },
        sub: {
            fontFamily: 'var(--font-sans)',
            color: 'var(--accent-blue-dark)',
            marginBottom: '1rem',
            display: 'block',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontWeight: '600',
            fontSize: '1rem', /* Increased from 0.9rem */
        },
        desc: {
            maxWidth: '600px',
            margin: '0 auto 4rem',
            color: 'var(--text-secondary)',
            fontSize: '1.2rem',
            lineHeight: '1.8',
            fontWeight: '300',
        },
        emailBtn: {
            display: 'inline-block',
            padding: '1.2rem 3.5rem',
            fontSize: '1rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: '600',
            color: 'white',
            backgroundColor: 'var(--accent-blue)',
            borderRadius: '100px',
            cursor: 'pointer',
            transition: 'var(--transition)',
            marginBottom: '5rem',
            boxShadow: '0 10px 25px rgba(255, 143, 163, 0.3)',
        },
        socials: {
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            color: 'var(--text-secondary)',
            marginBottom: '4rem',
        },
        socialLink: {
            transition: 'var(--transition)',
            color: 'var(--text-secondary)',
        },
        footer: {
            marginTop: '80px',
            fontSize: '0.9rem',
            fontFamily: 'var(--font-sans)',
            color: 'var(--text-secondary)',
            opacity: 0.7,
            letterSpacing: '1px',
        }
    };

    return (
        <section id="contact" style={styles.section}>
            <span style={styles.sub}>Let's Create Together</span>
            <h2 style={styles.title}>Get In Touch</h2>
            <a href="mailto:cindyl23@proton.me" style={styles.emailBtn}>
                Send a Message
            </a>

            <div style={styles.socials}>
                <a href="https://github.com/cindyylim" style={styles.socialLink} className="social-link"><Github size={26} /></a>
                <a href="https://www.linkedin.com/in/cindylimm/" style={styles.socialLink} className="social-link"><Linkedin size={26} /></a>
                <a href="mailto:cindyl23@proton.me" style={styles.socialLink} className="social-link"><Mail size={26} /></a>
            </div>

            <div style={styles.footer}>
                Designed with ♡ by Cindy &copy; 2026
            </div>
        </section>
    );
};

export default Contact;
