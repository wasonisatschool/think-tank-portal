import React, { useEffect, useState } from 'react';
import { getResearchOutputs } from '../api';
import './ResearchOutputs.css';

const ResearchOutputs = () => {
  const [outputs, setOutputs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getResearchOutputs();
      setOutputs(data);
    };

    fetchData();
  }, []);

  const filteredOutputs = selectedCategory === 'all' 
    ? outputs 
    : outputs.filter(output => output.category === selectedCategory);

  return (
    <div className="research-outputs">
      <h1>Research Outputs</h1>
      <div className="categories">
        <button onClick={() => setSelectedCategory('all')}>All</button>
        <button onClick={() => setSelectedCategory('reports')}>Reports</button>
        <button onClick={() => setSelectedCategory('papers')}>Papers</button>
        <button onClick={() => setSelectedCategory('recommendations')}>Recommendations</button>
      </div>
      <div className="output-cards">
        {filteredOutputs.map((output) => (
          <div className="card" key={output.id}>
            <h2>{output.title}</h2>
            <p>{output.summary}</p>
            <button className="read-more">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchOutputs;
