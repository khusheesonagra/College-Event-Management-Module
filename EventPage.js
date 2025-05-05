import React, { useEffect, useState } from 'react';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';
import { fetchEvents } from '../utils/api';

const EventPage = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getEvents = async () => {
            const data = await fetchEvents();
            setEvents(data);
        };
        getEvents();
    }, []);

    return (
        <div>
            <h1>Manage Events</h1>
            <EventForm />
            <EventList events={events} />
        </div>
    );
};

export default EventPage;