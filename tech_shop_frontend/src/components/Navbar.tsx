import { borderBottom } from '@mui/system';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isLogoHovered, setIsLogoHovered] = useState(false);

    return (
        <nav style={styles.navbar}>
            <div style={styles.container}>
                <div style={styles.navBrand}>
                    <NavLink to="/">
                        <img
                            src="/files/mobile-logo.png" // Update the path to your logo
                            alt="Logo"
                            style={{
                                ...styles.logo,
                                ...(isLogoHovered ? styles.logoHover : {}),
                            }}
                            onMouseEnter={() => setIsLogoHovered(true)}
                            onMouseLeave={() => setIsLogoHovered(false)}
                        />
                    </NavLink>
                </div>
                <ul style={styles.navLinks}>
                    <li>
                        <NavLink to="/" style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/appointments" style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
                            Appointments
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        width: 'width',
        backgroundColor: '#d7d7d7', // Light grey background
        padding: '10px 0', // Padding on top and bottom
        borderBottom: '1px solid #b3bfb6', // Light green border
    },
    container: {
        maxWidth: 'width', // Or any maximum width you prefer
        margin: '0 auto', // Center the container
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px', // Padding on the sides
    },
    navBrand: {
        display: 'flex',
        alignItems: 'center',
    },
    navLinks: {
        listStyleType: 'none',
        display: 'flex',
        gap: '15px',
        margin: 0,
        padding: 0,
    },
    link: {
        textDecoration: 'none',
        color: '#415256', // Dark grey text color
        fontSize: '1.25rem', // Increased font size
        padding: '8px 12px',
        borderRadius: '5px',
        transition: 'background-color 0.3s, color 0.3s', // Smooth transition for background and text color
        fontFamily: "'Roboto', sans-serif", // Apply Roboto font
    },
    activeLink: {
        textDecoration: 'none',
        color: '#ffffff', // White text color
        backgroundColor: '#1588fc', // Modern blue background color
        fontSize: '1.25rem', // Increased font size
        padding: '8px 12px',
        borderRadius: '5px',
        fontWeight: 'bold',
        fontFamily: "'Roboto', sans-serif", // Apply Roboto font
    },
    logo: {
        height: '60px', // Adjust the height of the logo as needed
        transition: 'transform 0.3s', // Smooth transition for the transform property
    },
    logoHover: {
        transform: 'scale(0.9)', // Scale down the logo slightly on hover
    },
};

export default Navbar;