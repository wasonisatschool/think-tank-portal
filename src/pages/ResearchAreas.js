import React, { useEffect, useState } from 'react';
import { getResearchAreas } from '../api';
import './ResearchAreas.css';

const ResearchAreas = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getResearchAreas();
      setAreas(data);
    };

    fetchData();
  }, []);

  return (
    <div className="research-areas">
      <h1>Research Areas</h1>
      <div className="area-cards">
        {areas.map((area) => (
          <div className="card" key={area.id}>
            <h2>{area.title}</h2>
            <p>{area.description}</p>
            <button className="learn-more">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchAreas;
