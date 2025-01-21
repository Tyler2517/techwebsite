const Services = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Our Services</h1>
            <p style={styles.text}>Discover the services we offer at Tyler's Tech Repair.</p>
            <div style={styles.servicesList}>
                <div style={styles.serviceItem}>
                    <h3 style={styles.serviceTitle}>Laptop Repair</h3>
                    <p style={styles.serviceDescription}>We fix all types of laptops quickly and reliably.</p>
                </div>
                <div style={styles.serviceItem}>
                    <h3 style={styles.serviceTitle}>Computer Repair</h3>
                    <p style={styles.serviceDescription}>From desktops to laptops, we handle all computer issues.</p>
                </div>
                <div style={styles.serviceItem}>
                    <h3 style={styles.serviceTitle}>Computer Upgrades</h3>
                    <p style={styles.serviceDescription}>Enhance your computer's performance with our upgrade services.</p>
                </div>
                {/* Add more services as needed */}
            </div>
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
    text: {
        fontSize: '1.25rem',
        color: '#555',
        lineHeight: '1.6',
        textAlign: 'center',
        marginBottom: '40px',
    },
    servicesList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    serviceItem: {
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
    },
    serviceTitle: {
        fontSize: '1.75rem',
        color: '#1588fc',
        marginBottom: '10px',
    },
    serviceDescription: {
        fontSize: '1.25rem',
        color: '#555',
    },
};

export default Services;