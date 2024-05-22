import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUpcomingEvents } from '../api';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUpcomingEvents();
      setEvents(data);
    };

    fetchData();
  }, []);

  return (
    <section className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="event-cards">
        {events.map((event) => (
          <div className="card" key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <button className="register" onClick={() => navigate(`/event/${event.id}`)}>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
