import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <div style={styles.navBrand}>
                <NavLink to="/" style={styles.link}>
                    Tyler's Tech Repair
                </NavLink>
            </div>
            <ul style={styles.navLinks}>
                <li>
                    <NavLink
                        to="/"
                        style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/appointments"
                        style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                    >
                        Appointments
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/services"
                        style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                    >
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};


const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#d7d7d7', // Light grey background
        padding: '1rem',
        color: '#415256', // Dark grey text color
        fontFamily: "'Roboto', sans-serif", // Apply Roboto font
    },
    navBrand: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#415256', // Dark grey text color
        fontFamily: "'Roboto', sans-serif", // Apply Roboto font
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
        fontSize: '1rem',
        padding: '8px 12px',
        borderRadius: '5px',
        transition: 'background-color 0.3s, color 0.3s', // Smooth transition for background and text color
        fontFamily: "'Roboto', sans-serif", // Apply Roboto font
    },
    activeLink: {
        textDecoration: 'none',
        color: '#ffffff', // White text color
        backgroundColor: '#1588fc', // Modern blue background color
        padding: '8px 12px',
        borderRadius: '5px',
        fontWeight: 'bold',
        fontFamily: "'Roboto', sans-serif", // Apply Roboto font
    },
    linkHover: {
        backgroundColor: '#b3bfb6', // Light green-grey background color on hover
        color: '#ffffff', // White text color on hover
        fontFamily: "'Roboto', sans-serif", // Apply Roboto font
    },
};

export default Navbar;