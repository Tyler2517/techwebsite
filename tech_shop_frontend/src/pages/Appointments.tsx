import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID = '78396367532-1m0srttijt820loit3l89hoarivh4va7.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDQxc3Na95kq2UItGlNL84EiRL3iIohwQ4'; // Replace with the actual API key from your Google Cloud project
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

const Appointments = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Appointments</h1>
            <p style={styles.text}>Schedule an appointment with Tyler's Tech Repair.</p>
            <section style={styles.section}>
                <h2 style={styles.subtitle}>Available Times</h2>
                <p style={styles.text}>We are available for appointments from 5:00 PM to 7:00 PM, Monday through Friday.</p>
                <ul style={styles.timeList}>
                    <li style={styles.timeItem}>Monday: 5:00 PM - 7:00 PM</li>
                    <li style={styles.timeItem}>Tuesday: 5:00 PM - 7:00 PM</li>
                    <li style={styles.timeItem}>Wednesday: 5:00 PM - 7:00 PM</li>
                    <li style={styles.timeItem}>Thursday: 5:00 PM - 7:00 PM</li>
                    <li style={styles.timeItem}>Friday: 5:00 PM - 7:00 PM</li>
                </ul>
            </section>
            <section style={styles.section}>
                <h2 style={styles.subtitle}>Free Diagnostics and Consultations</h2>
                <p style={styles.text}>Come in for a free diagnostics and consultations. We are here to help you with all your tech repair needs.</p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.subtitle}>Book an Appointment</h2>
                <div style={styles.calendarContainer}>
                <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Nkp0srbKK9Q1TKO0WhxeWEKdrckQmH4voJ5sIL6LQFqK7Zkm8roH3WGAGJbVZHW7M1O5Xul6j?gv=true" width="100%" height="600"></iframe>
                </div>
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
    calendarContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    calendar: {
        border: 1,
        width: '800px',
        height: '600px',
    },
};

export default Appointments;