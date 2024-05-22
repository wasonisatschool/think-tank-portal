import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNewsById } from '../api';
import './NewsDetail.css';

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNewsById(id);
      setNews(data);
    };

    fetchData();
  }, [id]);

  if (!news) return <p>Loading...</p>;

  return (
    <div className="news-detail">
      <h1>{news.title}</h1>
      <p className="date">Published on: {news.date}</p>
      <div className="content">{news.content}</div>
      <button className="back-button" onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

export default NewsDetail;
