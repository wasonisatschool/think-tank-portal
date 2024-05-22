import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLatestResearch } from '../api';
import './LatestResearch.css';

const LatestResearch = () => {
  const [research, setResearch] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLatestResearch();
      setResearch(data);
    };

    fetchData();
  }, []);

  return (
    <section className="latest-research">
      <h2>Latest Research</h2>
      <div className="research-cards">
        {research.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <button className="read-more" onClick={() => navigate(`/research/${item.id}`)}>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestResearch;
