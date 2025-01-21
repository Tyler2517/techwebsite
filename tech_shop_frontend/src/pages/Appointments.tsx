import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID = '78396367532-1m0srttijt820loit3l89hoarivh4va7.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDQxc3Na95kq2UItGlNL84EiRL3iIohwQ4'; // Replace with the actual API key from your Google Cloud project
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

const Appointments = () => {
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
                ux_mode: 'popup', // Ensures the auth flow is done in a popup
                redirect_uri: 'http://localhost:3000', // Replace with your redirect URI
            }).then(() => {
                // Handle the initial sign-in state.
                gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
                updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            });
        };

        gapi.load('client:auth2', initClient);
    }, []);

    const updateSigninStatus = (isSignedIn: boolean) => {
        if (isSignedIn) {
            console.log('User is signed in');
            // You can now create events in Google Calendar
        } else {
            console.log('User is not signed in');
        }
    };

    const handleAuthClick = () => {
        gapi.auth2.getAuthInstance().signIn();
    };

    const handleSignoutClick = () => {
        gapi.auth2.getAuthInstance().signOut();
    };

    const createEvent = () => {
        const event = {
            'summary': 'Appointment with Tyler',
            'location': 'Tyler\'s Tech Repair',
            'description': 'Tech repair appointment',
            'start': {
                'dateTime': '2023-10-01T17:00:00-07:00',
                'timeZone': 'America/Los_Angeles',
            },
            'end': {
                'dateTime': '2023-10-01T19:30:00-07:00',
                'timeZone': 'America/Los_Angeles',
            },
            'recurrence': [
                'RRULE:FREQ=WEEKLY;BYDAY=MO,WE,FR'
            ],
            'attendees': [
                {'email': 'tyler@example.com'}
            ],
        };

        gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event,
        }).then((response: any) => {
            console.log('Event created: ', response);
        });
    };

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
            <button onClick={handleAuthClick}>Authorize Google Calendar</button>
            <button onClick={handleSignoutClick}>Sign Out</button>
            <button onClick={createEvent}>Create Event</button>
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