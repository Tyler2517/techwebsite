import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
    '/files/andras-vas-Bd7gNnWJBkU-unsplash.jpg',
    '/files/liam-briese-lYxQ5F9xBDM-unsplash.jpg',
    '/files/keyboard-70506_1280.jpg'
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.slideshowContainer}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.slideshowImage,
                            backgroundImage: `url(${slide})`,
                            opacity: index === currentSlide ? 1 : 0,
                            zIndex: index === currentSlide ? 1 : 0,
                        }}
                    >
                        <div style={styles.overlay}></div>
                    </div>
                ))}
            </div>
            <div style={styles.contentContainer}>
                <header style={styles.header}>
                    <h1 style={styles.title}>Welcome to Tyler's Tech Repair</h1>
                    <p style={styles.subtitle}>Your one-stop solution for all tech repairs and services.</p>
                    <Link to="/appointments" style={styles.ctaButton}>Book an Appointment</Link>
                </header>
                <section style={styles.servicesSection}>
                    <h2 style={styles.sectionTitle}>Our Services</h2>
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
                            <p style={styles.serviceDescription}>Get your computer up to date with the latest hardware.</p>
                        </div>
                        <div style={styles.serviceItem}>
                            <h3 style={styles.serviceTitle}>Accessory Sales</h3>
                            <p style={styles.serviceDescription}>We offer a wide range of tech accessories for your needs.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
    },
    slideshowContainer: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        overflow: 'hidden',
        position: 'relative',
    },
    slideshowImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'opacity 1s ease-in-out',
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better text readability
        zIndex: 1,
    },
    contentContainer: {
        flex: 1,
        padding: '20px',
        fontFamily: "'Roboto', sans-serif",
        textAlign: 'center', // Center-align the text
        backgroundColor: '#f9f9f9', // Subtle background color
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Add shadow
        borderRadius: '10px', // Rounded corners
        margin: '20px', // Add margin
    },
    header: {
        textAlign: 'center', // Center-align the text
        marginBottom: '20px',
    },
    title: {
        fontSize: '2rem', // Adjust font size
        color: '#1588fc', // Brighter color
        marginBottom: '10px',
        animation: 'fadeIn 2s', // Add fade-in animation
    },
    subtitle: {
        fontSize: '1.25rem', // Adjust font size
        color: '#415256',
        marginBottom: '20px',
        animation: 'fadeIn 2s 0.5s', // Add fade-in animation with delay
    },
    ctaButton: {
        display: 'inline-block',
        padding: '10px 20px', // Adjust padding
        fontSize: '1.25rem', // Adjust font size
        color: '#fff',
        backgroundColor: '#1588fc',
        borderRadius: '5px',
        textDecoration: 'none',
        transition: 'background-color 0.3s, transform 0.3s', // Add transition effect
    },
    ctaButtonHover: {
        backgroundColor: '#106bbf',
        transform: 'scale(1.05)', // Slightly enlarge the button on hover
    },
    servicesSection: {
        textAlign: 'left',
        padding: '20px', // Add padding
    },
    sectionTitle: {
        fontSize: '2rem', // Adjust font size
        color: '#1588fc', // Brighter color
        marginBottom: '10px',
        animation: 'fadeIn 2s 1s', // Add fade-in animation with delay
    },
    servicesList: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '15px', // Adjust gap
    },
    serviceItem: {
        backgroundColor: '#fff',
        padding: '15px', // Adjust padding
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Add shadow
        animation: 'fadeInUp 1s', // Add fade-in-up animation
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    serviceTitle: {
        fontSize: '1.5rem', // Adjust font size
        color: '#1588fc', // Brighter color
        marginBottom: '10px',
    },
    serviceDescription: {
        fontSize: '1rem',
        color: '#415256',
        textAlign: 'center', // Center-align the text
    },
    '@keyframes fadeIn': {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },
    '@keyframes fadeInUp': {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
    },
};

export default Home;