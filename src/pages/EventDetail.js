import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../api';
import './EventDetail.css';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEventById(id);
      setEvent(data);
    };

    fetchData();
  }, [id]);

  if (!event) return <p>Loading...</p>;

  return (
    <div className="event-detail">
      <h1>{event.title}</h1>
      <p className="date">Date: {event.date}</p>
      <p className="location">Location: {event.location}</p>
      <div className="content">{event.content}</div>
      <button className="back-button" onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

export default EventDetail;
