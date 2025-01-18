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
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.slideshowContainer}>
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        alt={`Slide ${index}`}
                        style={{
                            ...styles.slideshowImage,
                            opacity: index === currentSlide ? 1 : 0,
                            zIndex: index === currentSlide ? 1 : 0,
                        }}
                    />
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
        objectFit: 'cover',
        transition: 'opacity 1s ease-in-out',
    },
    contentContainer: {
        flex: 1,
        padding: '20px',
        fontFamily: "'Roboto', sans-serif",
        textAlign: 'center', // Center-align the text
        backgroundColor: '#fff',
    },
    header: {
        textAlign: 'center', // Center-align the text
        marginBottom: '40px',
    },
    title: {
        fontSize: '2.5rem',
        color: '#415256',
    },
    subtitle: {
        fontSize: '1.25rem',
        color: '#415256',
        marginBottom: '20px',
    },
    ctaButton: {
        display: 'inline-block',
        padding: '10px 20px',
        fontSize: '1.25rem',
        color: '#fff',
        backgroundColor: '#1588fc',
        borderRadius: '5px',
        textDecoration: 'none',
    },
    servicesSection: {
        textAlign: 'left',
    },
    sectionTitle: {
        fontSize: '2rem',
        color: '#415256',
        marginBottom: '20px',
    },
    servicesList: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
    },
    serviceItem: {
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    serviceTitle: {
        fontSize: '1.5rem',
        color: '#415256',
        marginBottom: '10px',
    },
    serviceDescription: {
        fontSize: '1rem',
        color: '#415256',
    },
};

export default Home;