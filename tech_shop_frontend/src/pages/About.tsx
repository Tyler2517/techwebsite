const About = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>About Tyler's Tech Repair</h1>
            <section style={styles.section}>
                <h2 style={styles.subtitle}>Our Mission</h2>
                <p style={styles.text}>At Tyler's Tech Repair, our mission is to provide reliable and affordable tech repair services to our community. We strive for excellence and aim to exceed customer expectations with every repair.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.subtitle}>Our History</h2>
                <p style={styles.text}>For the past 10 years, Tyler has been dedicated to working on computers, solving a wide range of technical issues, and helping people get the most out of their devices. With a deep passion for technology and a commitment to quality service, Tyler's Tech Repair has become a trusted name in the community.</p>
            </section>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: "'Roboto', sans-serif",
    },
    title: {
        textAlign: 'center',
        color: '#415256',
        fontSize: '2.5rem',
        marginBottom: '20px',
    },
    section: {
        marginBottom: '40px',
    },
    subtitle: {
        fontSize: '2rem',
        color: '#1588fc',
        marginBottom: '10px',
    },
    text: {
        fontSize: '1.25rem',
        color: '#555',
        lineHeight: '1.6',
    },
};

export default About;