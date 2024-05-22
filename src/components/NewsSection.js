import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLatestNews } from '../api';
import './NewsSection.css';

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLatestNews();
      setNews(data);
    };

    fetchData();
  }, []);

  return (
    <section className="news-section">
      <h2>News</h2>
      <div className="news-cards">
        {news.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <button className="read-more" onClick={() => navigate(`/news/${item.id}`)}>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
