import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getResearchById } from '../api';
import './ResearchDetail.css';

const ResearchDetail = () => {
  const { id } = useParams();
  const [research, setResearch] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getResearchById(id);
      setResearch(data);
    };

    fetchData();
  }, [id]);

  if (!research) return <p>Loading...</p>;

  return (
    <div className="research-detail">
      <h1>{research.title}</h1>
      <p className="date">Published on: {research.date}</p>
      <div className="content">{research.content}</div>
      <button className="back-button" onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

export default ResearchDetail;
