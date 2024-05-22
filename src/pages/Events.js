import React, { useEffect, useState } from 'react';
import { getEvents } from '../api';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEvents();
      setEvents(data);
    };

    fetchData();
  }, []);

  return (
    <div className="events">
      <h1>Events</h1>
      <div className="event-cards">
        {events.map((event) => (
          <div className="card" key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <button className="register">Register</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
