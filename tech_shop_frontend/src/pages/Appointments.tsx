const Appointments = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Appointments</h1>
            <p style={styles.text}>Schedule an appointment with Tyler's Tech Repair.</p>
            <section style={styles.section}>
                <h2 style={styles.subtitle}>Available Times</h2>
                <p style={styles.text}>We are available for appointments from 5:00 PM to 7:30 PM, Monday through Friday.</p>
                <ul style={styles.timeList}>
                    <li style={styles.timeItem}>Monday: 5:00 PM - 7:30 PM</li>
                    <li style={styles.timeItem}>Tuesday: 5:00 PM - 7:30 PM</li>
                    <li style={styles.timeItem}>Wednesday: 5:00 PM - 7:30 PM</li>
                    <li style={styles.timeItem}>Thursday: 5:00 PM - 7:30 PM</li>
                    <li style={styles.timeItem}>Friday: 5:00 PM - 7:30 PM</li>
                </ul>
            </section>
            <section style={styles.section}>
                <h2 style={styles.subtitle}>Free Diagnostics and Consultations</h2>
                <p style={styles.text}>Come in for a free diagnostics and consultations. We are here to help you with all your tech repair needs.</p>
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
    text: {
        fontSize: '1.25rem',
        color: '#555',
        lineHeight: '1.6',
    },
    section: {
        marginBottom: '40px',
    },
    subtitle: {
        fontSize: '2rem',
        color: '#1588fc',
        marginBottom: '10px',
    },
    timeList: {
        listStyleType: 'none',
        padding: 0,
    },
    timeItem: {
        fontSize: '1.25rem',
        color: '#555',
        marginBottom: '10px',
    },
};

export default Appointments;